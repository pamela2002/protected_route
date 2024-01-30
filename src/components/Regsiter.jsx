import React,{useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";


const Register = () =>{
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()
    const signup = () =>{
        const item = {name, email, password};
        console.log(item);
        localStorage.setItem("user-info",JSON.stringify(item));
        navigate("/add");
    }
    useEffect(()=>{
        if(localStorage.getItem("user-info")){
            navigate("/add");
        }
    },[])
    return(
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection:"column",margin:"80px"}}>
            <h1 style={{textAlign:"center"}}>User Sign Up</h1>
            <input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} style={{height:"35px", width:"250px", position:"absolute", left:"42%", top:"28%"}}/><br/><br/>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{height:"35px", width:"250px", position:"absolute", left:"42%", top:"35%"}}/><br/><br/>
            <input type="text" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{height:"35px", width:"250px", position:"absolute", left:"42%", top:"42%"}}/><br/><br/>
            <button onClick={signup} style={{position:"absolute", top:"50%", right:"41.2%"}}>Submit</button>
            </div>
        </>
    )
}

export default Register;