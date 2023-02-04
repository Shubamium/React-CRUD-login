import { useRef, useState } from "react";
    const AddPost = ({
        posterId,
        updateList
    }) => {
    let [text,setText] = useState('');

    let [canSubmit,setCanSubmit] = useState(true);

    function handlePost(e){
        e.preventDefault();
        if(text === '') return;
        let post = {
            userId:posterId,
            post:text,
            likes:0
        }
        let abort = new AbortController();
        let signals = abort.signal;
        // console.log(post);
        fetch('http://localhost:3000/Posts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(post),
            signal:signals
        }).then((data)=>{
            return data.json();
        }).then((result)=>{
            updateList(result);
            setCanSubmit(true);
            
        });
        setCanSubmit(false);        
        setText('');
    }

    return ( 
        <form className="add-post" onSubmit={handlePost}>
            <label htmlFor="post">Post a message:</label>
            <textarea onChange={(e)=> setText(e.target.value)} value={text} name="postText" id="post" cols="40" rows="5" style={{resize:'none'}}></textarea>
            <button type="submit" disabled={!canSubmit}>Post</button>
        </form>
     );
}
 
export default AddPost;