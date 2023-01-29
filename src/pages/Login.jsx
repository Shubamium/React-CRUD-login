import { useContext, useEffect } from "react";
import { Form, Navigate, useActionData } from "react-router-dom";
import UserContext from "../context/userContext";

const Login = () => {
    const {userData} = useContext(UserContext);
    const result = useActionData();

    console.log(userData);
    if(userData.isAuthenticated){
        return <Navigate to="/" />
    }
    return ( 
        <Form action="/auth/login" method="POST">
            <input type="text" name="username" placeholder="username. . ."  required/>
            <input type="password" name="password" placeholder="password. . ." required />
            <button type="submit">Login</button>
            {result && <p>{result.username + result.password}</p>}
        </Form>
     );
}


export const loginAction = async({request})=>{
    const data = await request.formData();
    return {username:data.get('username'),password:data.get('password')};
}
export default Login;

