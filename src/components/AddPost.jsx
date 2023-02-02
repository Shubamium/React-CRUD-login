import { useRef, useState } from "react";
const AddPost = ({
    posterId,
    updateList
}) => {
    let text = useRef();

    let [canSubmit,setCanSubmit] = useState(true);

    function handlePost(e){
        let post = {
            userId:posterId,
            post:text,
            likes:0
        }
        // console.log(post);
        fetch('http://localhost:3000/Posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        }).then((data)=>{
            return data.json();
        }).then((result)=>{
            updateList(result);
            setCanSubmit(true);
            
        });
        setCanSubmit(false);        
        e.preventDefault();
    }

    return ( 
        <form className="post" onSubmit={handlePost}>
            <label htmlFor="post">Post a message:</label>
            <textarea onChange={(e)=> text = e.target.value} name="postText" id="post" cols="40" rows="5" style={{resize:'none'}}></textarea>
            <button type="submit" disabled={!canSubmit}>Post</button>
        </form>
     );
}
 
export default AddPost;