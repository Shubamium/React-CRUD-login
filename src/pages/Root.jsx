import { useEffect, useReducer, useState } from "react";
import { NavLink, Outlet, redirect, useNavigate } from "react-router-dom";
import userReducer, { USER_ACTION } from "../action/UserAction";
import UserContext from "../context/userContext";
import AsyncSelect from "react-select/async";

const Root = () => {

    const [userData, userDispatch] = useReducer(userReducer, {
        username:'',
        isAuthenticated:false,
        userId:''
    });

    const option =[
        {value:'helo',label:'nice'},
        {value:'hewo',label:'ayooo'}
    ]
    useEffect(()=>{
        const userStatus = localStorage.getItem('userdata');
        const userObj = JSON.parse(userStatus);
        if(userObj.isAuthenticated == true){
            userDispatch({type:USER_ACTION.LOGIN,data:{username:userObj.username,userId:userObj.userId}})
        }
    },[]);

    const loadUser = async(val)=>{
        const request = await fetch('http://localhost:3000/Users?username_like='+val);
        const result = await request.json();
        let allUser = result.map((val)=>{return { value:val.id,label:'@'+val.username} });
        return allUser;
    }

    const navigate = useNavigate();
    const handleUserSearch = (val)=>{
        let username = val.label;
        username = username.split('');
        username[0] = '';
        username = username.join('');
        let link = '/profile/'+ username;
        navigate(link);
    };

    return ( 
        <div id="main">
            <header><h2>Basic-Barebone Twitter Clone</h2></header>
            <nav>
                <NavLink to="/">Home</NavLink>
                {
                userData.isAuthenticated == true
                ?
                    <>
                        <NavLink to="auth/logout">Logout</NavLink>
                        <NavLink to="dashboard">Dashboard</NavLink>
                        <NavLink to={`profile/${userData.username}`}>Profile</NavLink>
                        <div>
                            <p>Search User:</p>
                            <AsyncSelect 
                            styles={
                                {
                                    dropdownIndicator:(baseStyles)=>({...baseStyles,display:'none '}),
                                    container:(baseStyles)=>({...baseStyles,width:'300px'})
                                }                               
                            }
                            cacheOptions loadOptions={loadUser} 
                            onChange={handleUserSearch} 
                            escapeClearsValue={true}
                            blurInputOnSelect={true}
                            />
                        </div>
                    </>
                :
                <>
                <NavLink to="auth/login">Sign In</NavLink>
                <NavLink to="auth/signup">Sign Up</NavLink>
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