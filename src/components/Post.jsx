import { useEffect, useRef, useState } from "react";
import useFetchUser from "../hooks/useFetchUser";

const Post = ({postData}) => {
    const userdata = useFetchUser(postData.userId);
    return (  
        <div className="post">
            <h2>@{userdata && userdata.username}</h2>
            <p>{postData.post}</p>
            <p>Likes: { postData.likes}</p>
        </div>
    );
}
 
export default Post;