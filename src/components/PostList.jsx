import { useEffect, useRef, useState } from "react";
import Post from "./Post";

const PostLists = ({posts, pagination}) => {
    const [postList,setPL] = useState([...posts].reverse());
    const [page,setPage] = useState(1);
    const [pageButton,setPageButton] = useState([]);
    const range = pagination || 5;
  
    useEffect(()=>{
        console.log('change');
        setPL(getPostRange(posts,page,range));
    },[page]);

    useEffect(()=>{
        setPageButton(Array.from({length:getPageCount()},(_,i)=> i+1));
    },[postList])

    function getPostRange(arr,page,ranges){
        let start = ranges*page;
        let end = start + ranges;
        end = end >= arr.length ? arr.length : end;
        let res =  [...arr].slice(start,end);
        console.log(start,end,res);
        return res;
    }
   
    function getPageCount(){
        return Math.ceil( posts.length / range);
    }

    function handleSetPage(id){
        setPage(id);
    }
    
    return ( 
        <div className="post-lists">
            {pagination && 
                <div className="page-selector">
                    {pageButton.map((id)=>(
                        <button className={`btn-page ${id === page ? 'active' : ''}`} key={id} onClick={()=>{handleSetPage(id)}}>{id}</button>
                    ))}
                </div>
            }
            {postList.length > 0 ? postList.map((post)=>{
                return <Post postData={post} key={post.id}></Post>;
            }):
            <p>This user currently has no post!</p>
            }
        </div>
     );
}
 
export default PostLists;