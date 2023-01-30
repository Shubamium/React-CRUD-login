import { useEffect, useState } from "react";

const useFetchPost = () => {
    let [posts, setPosts] = useState();
    useEffect(() => {
        const data = async () => {
            const data = await fetch('http://localhost:3000/Posts');
            let result = await data.json();
            setPosts(result);
        }
        data();
    }, [])

    return posts;
}
 
export default useFetchPost;