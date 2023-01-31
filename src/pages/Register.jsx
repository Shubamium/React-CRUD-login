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
    const userdata = await fetch('http://localhost:3000/Users');
    const result = await userdata.json();

    // Check if username not exist
    const usernameExist = ()=>{
        const res = result.find((user)=> user.username === username);
        return res;
    } 
    let exist = usernameExist();
    console.log(exist);
    // If username does not exist
    if(!exist){
        return redirect('/');
    }else{
        return({error:'Username already exist'});
    }

  

}