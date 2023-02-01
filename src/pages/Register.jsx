import { useContext, useState } from "react";
import { Form, Navigate, redirect, useActionData } from "react-router-dom";
import UserContext from "../context/userContext";

const Register = () => {
    const {userData,userDisptach} = useContext(UserContext);
    let result = useActionData();
    if(userData.isAuthenticated){
       return <Navigate to="/dashboard"></Navigate>; 
    }
 

    return ( 
        <Form action="/auth/signup" method="POST">
            <input type="text" name="username" placeholder="username. . ."  required/>
            <input type="password" name="password" placeholder="password. . ." required />
            <input type="password" name="c-password" placeholder="confirm password. . ." required />
            <button type="submit">Sign Up</button>
            {result && result.error && <p> {result.error}</p>}
        </Form>
    );
}
 
export default Register;


export const registerAction = async({request})=>{
    
    // Get the form data
    let data = await request.formData(); 
    const username = data.get('username');
    const password = data.get('password');
    const cpassword = data.get('c-password');

    // Check if password is the same
    if(password !== cpassword){
        return {error:'Password is not the same'};
    }

    // Get a list of all user
    // const userdata = await fetch('http://localhost:3000/Users');
    // const result = await userdata.json();

    // Method one [Bad Example] the user would have to fetch the data of every single users
    // // Check if username not exist
    // const usernameExist = ()=>{
    //     const res = result.find((user)=> user.username === username);
    //     return res;
    // } 
    // let exist = usernameExist();
    // // If username does not exist
    // if(!exist){
    //     return redirect('/');
    // }else{
    //     return({error:'Username already exist'});
    // }

    // Method two, [GOOD] Querying directly to the database
    const userdata = await fetch('http://localhost:3000/Users?username=' + username);
    const res = await userdata.json();

    let exist = res.length !== 0;
    
    if(exist){
        return {error:'Username already exist!'};
    }

    // Don't need this apparently
    // Json Data Automatically add id so 
    
    // const prevUser = await fetch('http://localhost:3000/Users?_sort=userId&_order=desc&limit=1')
    // let prevUserData = await prevUser.json();
    // // let nextId = prevUserData.userId+1;
    
    const userRegis = {
        // id:nextId,
        username:username,
        password:password,
    }

    fetch('http://localhost:3000/Users',{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(userRegis)
    })

    return redirect('/auth/login');
  

}