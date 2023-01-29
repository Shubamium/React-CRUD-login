import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/userContext";
import { USER_ACTION } from "./UserAction";

const Logout = () => {
   const {userData, userDispatch} = useContext(UserContext);
   useEffect(()=>{
        console.log('hi');
        if(userData){
            userDispatch({type:USER_ACTION.LOGOUT});
        }
   },[]);
    return (
          <Navigate to="/"/> 
    );
}
 
export default Logout;