import { useEffect, useState } from "react";

const useFetchUser = (id) => {
    const [userdata,setUserdata] = useState();
    useEffect(
        ()=>{
            const getData = async()=>{
                const fetchLink = 'http://localhost:3000/Users' + (typeof id === "string" ? `?username=${id}` : `/${id}`);
                const response =  await fetch(fetchLink);
                const result = await response.json();
                setUserdata(result);
            }
            getData();
        }        
    ,[id]);
    return userdata;

}
 
export default useFetchUser;