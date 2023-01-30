import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import authRedirect from "../action/AuthRedirect";
import Post from "../components/Post";
import UserContext from "../context/userContext";

const Dashboard = () => {

    const {userData, userDispatch} = useContext(UserContext);
    if(!userData.isAuthenticated){
       return <Navigate to="/"/>
    }
    return ( 
        <div>
            <p>Welcome to the dashboard! @{userData.username}</p>
            <Post postData={{user:'root',post:"this is a post!"}}></Post>
        </div>
     );
}
 
export default Dashboard;