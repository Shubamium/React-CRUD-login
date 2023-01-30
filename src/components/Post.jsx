const Post = ({postData}) => {
    return (  
        <div className="post">
            <h2>@{postData.user}</h2>
            <p>{postData.post}</p>
            <p>Likes: { postData.likes}</p>
        </div>
    );
}
 
export default Post;