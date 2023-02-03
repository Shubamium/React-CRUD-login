import { useEffect, useRef, useState } from "react";
import Post from "./Post";

const PostLists = ({posts, pagination}) => {
    const [postList,setPL] = useState([...posts].reverse());
    const [page,setPage] = useState(0);
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
                    {/* Previous Button */}
                   {getPageCount() > 1 &&  <button className="btn-page nav" onClick={()=>setPage(prev => prev > 0 ? prev-1: 0)}>←</button>}
                        {/* Page Button */}
                        {pageButton.map((id)=>(
                            <button className={`btn-page${id-1 === page ? ' active' : ''}`} key={id} onClick={()=>{handleSetPage(id-1)}}>{id}</button>
                            ))
                        }
                    {/* Next Button */}
                {getPageCount() > 1 && <button className="btn-page nav"  onClick={()=>setPage(prev => prev >= getPageCount()-1 ? prev : prev+1)}>→</button>}
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