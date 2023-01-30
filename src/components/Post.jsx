import { useEffect, useRef, useState } from "react";

const Post = ({postData}) => {
    let [username, setUsername] = useState('');
    useEffect(()=>{
        if(postData){
            fetch(`http://localhost:3000/Users/${postData.userId}`)
            .then((result)=> result.json())
            .then((data)=>{
               setUsername(data.username);
            })
         }

    },[postData])
    return (  
        <div className="post">
            <h2>@{username}</h2>
            <p>{postData.post}</p>
            <p>Likes: { postData.likes}</p>
        </div>
    );
}
 
export default Post;