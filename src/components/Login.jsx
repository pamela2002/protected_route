import React,{useEffect} from "react";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem("user-info")){
            navigate("/add");
        }
    },[]);
    return(
        <>
            <Header/>
            <h1>Login</h1>
        </>
    )
}

export default Login;