import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useNavigation, useOutletContext } from "react-router-dom";
import AddPost from "../components/AddPost";
import PostLists from "../components/PostList";
import UserContext from "../context/userContext";

const Timeline = () => {
    let context = useOutletContext();
    let userAuthState = context.userData;
    let navigation = useNavigation();
    let navigate = useNavigate();
    let posts = useLoaderData();

    let [postlist,setPl] = useState([]);
    let [newPost,setNewPost] = useState([...posts, ...postlist]); 
    
    useEffect(()=>{
        setNewPost([...posts, ...postlist]);
    },[postlist]);

    if(navigation.state === "loading"){
        return (
            <p>Loading . . . </p>
        );
    }

    return (  
        <div className="timeline">
            <AddPost posterId={userAuthState.userId} updateList={(data)=>{
                setPl((prev)=>{
                    console.log('adding post');
                    let old = [...prev, data];
                    return old;
                });
            }}/>
            <h2 className="section-title">Your Timeline!!!</h2>
            {newPost ? <PostLists pagination={5} posts={newPost}></PostLists> : <p>Loading . . .</p>}    
        </div>
    );
}
 
export default Timeline;

export async function timelineLoader(){
    const data = await fetch('http://localhost:3000/Posts');
    return data.json();
}