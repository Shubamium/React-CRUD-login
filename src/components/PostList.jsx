import Post from "./Post";

const PostLists = ({posts}) => {
    return ( 
        <div className="post-lists">
            {[...posts].reverse().map((post)=>{
                return <Post postData={post} key={post.id}></Post>;
            })}
        </div>
     );
}
 
export default PostLists;