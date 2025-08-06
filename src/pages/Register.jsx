import { useNavigate } from "react-router";
import axios from "../utils/util.js";
import { useState } from "react";
import Nav from "../components/nav.jsx";

export default function Register({user}){
    const navigate=useNavigate();
    const [password,setpassword]=useState("");
    const [userName,setname]=useState("");
    const [email,setemail]=useState("")
    async function handleloginsubmit(e) {
        e.preventDefault();
       const res= await axios.post('/user/signup',{userName,email,password});
       if(res.data.status===200){
        navigate('/');
       }
       alert(res.error);
    }
return (
    <>
    <Nav user={user}/>
        <form >
            <label htmlFor="">User Name:</label>
            <input type="text" name="name" value={userName} onChange={(e)=>setname(e.target.value)} /> <br />
            <label htmlFor="">Email:</label>
            <input type="text" name="name" value={email} onChange={(e)=>setemail(e.target.value)} /> <br />
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
            <button type="submit" onClick={handleloginsubmit}>Login</button>
        </form>
    </>
);
}