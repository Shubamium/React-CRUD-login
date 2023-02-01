import { useContext, useEffect } from "react";
import { Form, Navigate, useActionData } from "react-router-dom";
import { USER_ACTION } from "../action/UserAction";
import UserContext from "../context/userContext";

const Login = () => {
    const {userData,userDispatch} = useContext(UserContext);
    const result = useActionData();

    useEffect(()=>{
        if(result && result.login){
            userDispatch({type:USER_ACTION.LOGIN,data:{userId:result.userId,username:result.username}});
        }
    },[result])
   
    // useEffect(()=>{
       
    // },[userData]);
    if(userData.isAuthenticated){
        return <Navigate to="/dashboard" />
    }
    return ( 
        <Form action="/auth/login" method="POST">
            <input type="text" name="username" placeholder="username. . ."  required/>
            <input type="password" name="password" placeholder="password. . ." required />
            <button type="submit">Login</button>
            {result && result.error && <p> {result.error}</p>}
        </Form>
     );
}


export const loginAction = async({request})=>{
    // Form Data
    const data = await request.formData();
    const username = data.get('username');
    const password = data.get('password');
    
    // Database Data
    let userlist = await fetch('http://localhost:3000/Users?username='+username);
    userlist = await userlist.json();
    if(userlist.length === 0){
        return {error:'No user with that username is found'};
    }
    // Check if username exist
    // let user = userlist.find((user) => user.username === username);
    // if(!user){
    //     return {error:'No user with that username is found'};
    // }
    // Check password
    if(password !== userlist[0].password){
        return{error:'Password is incorrect'}
    }

    console.log(userlist,"here");
    return {login:true,username:username,userId:userlist[0].id};
    

}
export default Login;

