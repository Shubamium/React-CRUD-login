import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import authRedirect from "../action/AuthRedirect";
import UserContext from "../context/userContext";

const Dashboard = () => {

    const {userData, userDispatch} = useContext(UserContext);
    if(!userData.isAuthenticated){
       return <Navigate to="/"/>
    }
    return ( 
        <div>
            <p>Welcome to the dashboard! @{userData.username}</p>
        </div>
     );
}
 
export default Dashboard;