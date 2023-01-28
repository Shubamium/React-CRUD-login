import { useReducer, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import userReducer from "../action/UserAction";
import UserContext from "../context/userContext";

const Root = () => {
    const baseData = {
        username:'',
        isAuthenticated:true,
        userId:''
    };

    const [userData, userDispatch] = useReducer(userReducer,baseData);

    return ( 
        <div id="main">
            <header>This is the header</header>
            <nav>
                <NavLink to="/">Home</NavLink>
                {
                userData.isAuthenticated 
                ?
                    <>
                         <NavLink to="auth/logout">Logout</NavLink>
                        <NavLink to="dashboard">Dashboard</NavLink>
                    </>
                :
                <>
                <NavLink to="auth/login">Sign In</NavLink>
                <NavLink to="auth/register">Sign Up</NavLink>
                </>
                 }
            </nav>

            <UserContext.Provider value={{userData,userDispatch}}>
                <main>
                    <Outlet></Outlet>
                </main>
            </UserContext.Provider>
        </div>
     );
}
 
export default Root;