import { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import PostLists from "../components/PostList";
import useFetchUser from "../hooks/useFetchUser";

const Profile = () => {
    const navigation = useNavigation();
    const data = useLoaderData()[0];

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

    if(!data) return <></>;
    return ( 
        <div>
            <h2>Welcome to <Link to={`/profile/${data.username}`}>@{data.username}</Link>'s Profile page!</h2>
            <p>Posts by this user:</p>
            {userPost ? <PostLists posts={userPost}/> : <p>Loading . . .</p>}
        </div>
     );
}
 
export default Profile;

export async function profileLoader({params}){
    console.log(params);
    const data = await fetch(`http://localhost:3000/Users?username=${params.username}`);
    return data.json();
};