import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import AddPost from "../components/AddPost";
import PostLists from "../components/PostList";
import UserContext from "../context/userContext";

const Profile = () => {
    const navigation = useNavigation();
    const data = useLoaderData()[0];
    const userAuthState = useContext(UserContext);
   
    if(navigation.state === "loading"){
        return <p>Loading . . .</p>;
    }
    const [userPost,setUserPost] = useState();

    useEffect(()=>{
        const loadData = async ()=>{
            const request = await fetch(`http://localhost:3000/Posts?userId=${data.id}`);
            const result = await request.json();
            setUserPost(result);
        }
        loadData();
    },[]);

    const isUserProfile = userAuthState.userData.username === data.username;
    if(!data) return <></>;
    return ( 
        <div>

            <h2>Welcome to <Link to={`/profile/${data.username}`}>@{data.username}</Link>'s Profile page!</h2>
            { isUserProfile && <AddPost posterId={data.id} updateList={(data)=>{
                setUserPost((prev)=>{
                    let old = [...prev, data];
                    return old;
                });
            }}></AddPost>}
            <p>Posts by this user:</p>
            {userPost ? <PostLists pagination={10} posts={userPost}/> : <p>Loading . . .</p>}
        </div>
     );
}
 
export default Profile;

export async function profileLoader({params}){
    console.log(params);
    const data = await fetch(`http://localhost:3000/Users?username=${params.username}`);
    return data.json();
};