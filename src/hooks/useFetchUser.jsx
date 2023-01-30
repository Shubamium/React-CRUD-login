import { useEffect, useState } from "react";

const useFetchUser = (id) => {
    const [userdata,setUserdata] = useState();
    useEffect(
        ()=>{
            const getData = async()=>{
                const response =  await fetch('http://localhost:3000/Users/' + id);
                const result = await response.json();
                setUserdata(result);
            }
            getData();
        }        
    ,[id]);
    return userdata;

}
 
export default useFetchUser;