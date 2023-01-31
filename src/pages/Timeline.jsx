import { useLoaderData, useNavigation } from "react-router-dom";
import PostLists from "../components/PostList";
import useFetchPost from "../hooks/useFetchPost";

const Timeline = () => {
    let posts = useLoaderData();
    let navigation = useNavigation();
    if(navigation.state === "loading"){
        return (
            <p>Loading . . . </p>
        );
    }

    // let posts = useFetchPost();
    return (  
        <div>
            <p>Your Timeline!!!</p>
            { posts ? <PostLists posts={posts}></PostLists> : <p>Loading . . .</p>}    
        </div>
    );
}
 
export default Timeline;

export async function timelineLoader(){
    const data = await fetch('http://localhost:3000/Posts');
    return data.json();
}