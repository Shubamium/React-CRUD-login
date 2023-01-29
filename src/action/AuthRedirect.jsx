import { Navigate } from "react-router-dom";

const authRedirect = (auth) => {
    if(auth === false){
        return <Navigate to="/"/>;
    }else{
        return <Navigate to="/dashboard"/>;
    }
}
 
export default authRedirect;