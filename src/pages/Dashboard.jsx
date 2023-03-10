import { useContext } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
import authRedirect from "../action/AuthRedirect";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import UserContext from "../context/userContext";
import Timeline from "./Timeline";
const Dashboard = () => {

    const {userData, userDispatch} = useContext(UserContext);
    if(!userData.isAuthenticated){
       return <Navigate to="/"/>
    }
    return ( 
        <div>
            <p>Welcome to the dashboard! @{userData.username}</p>
            <Outlet context={{userData,userDispatch}}></Outlet>
        </div>
     );
}
 
export default Dashboard;