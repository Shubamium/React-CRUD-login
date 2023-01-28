import { useContext } from "react";
import { Navigate, redirect } from "react-router-dom";
import UserContext from "../context/userContext";

const Dashboard = () => {

    const userContext = useContext(UserContext);
    if(!userContext.userData.isAuthenticated){
        return <Navigate to="/" />;
    }
    return ( 
        <div>
            <p>Welcome to the dashboard!</p>
        </div>
     );
}
 
export default Dashboard;