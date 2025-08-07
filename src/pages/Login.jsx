    import { useNavigate } from "react-router";
    import axios from '../utils/util.js'
    import { useState } from "react";
    import Nav from "../components/nav.jsx";

    export default function Login({user,setuser}){
        const navigate=useNavigate();
        const [password,setpassword]=useState("");
        const [email,setemail]=useState("")
        async function handleloginsubmit(e) {
            try{
            e.preventDefault();
        const res= await axios.post('/user/signin',{email,password});
        await axios.get('/api/me').then(res=>setuser(res.data)).catch(err=>{console.log(err)});
        if(res.status===200){
            navigate('/');
        }}
        catch(err){
            alert(err);
        }
        }
    return (
        <>
        <Nav user={user} setuser={setuser}/>
            <form >
                <label htmlFor="">Email:</label>
                <input type="text" name="name" value={email} onChange={(e)=>setemail(e.target.value)} /> <br />
                <label htmlFor="">Password:</label>
                <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/>
                <button type="submit" onClick={handleloginsubmit}>Login</button>
            </form>
        </>
    );
    }