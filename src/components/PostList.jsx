import Post from "./Post";

const PostLists = ({posts}) => {
    return ( 
        <div className="post-lists">
            {posts.map((post)=>{
                return <Post postData={post} key={post.postId}></Post>;
            })}
        </div>
     );
}
 
export default PostLists;