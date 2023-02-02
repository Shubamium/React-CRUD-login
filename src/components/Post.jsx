import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useFetchUser from "../hooks/useFetchUser";

const Post = ({postData}) => {
    const userdata = useFetchUser(postData.userId);

    if(!userdata) return <></>;
    return (  
        <div className="post">
            <h2><Link to={`/profile/${userdata.username}`}>@{userdata.username}</Link></h2>
            <p>{postData.post}</p>
            <p>Likes: { postData.likes}</p>
        </div>
    );
}
 
export default Post;