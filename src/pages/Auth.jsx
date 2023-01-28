import { Outlet } from "react-router-dom";

const Auth = () => {
    return ( 
        <div className="auth-page">
            <p>This is the authpage</p>
            <Outlet></Outlet>
        </div>
     );
}
 
export default Auth;