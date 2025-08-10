import { useNavigate } from "react-router";
import axios from "../utils/util.js";
import { useState } from "react";
import Nav from "../components/nav.jsx";

export default function Register({user,setuser}){
    const navigate=useNavigate();
    const [password,setpassword]=useState("");
    const [userName,setname]=useState("");
    const [email,setemail]=useState("")
    const [display,setdisplay]=useState("None");
    const [adminkey,setadminkey]=useState("");
    const [photo,setphoto]=useState(null);
    function adminlogintoggle(e){
            if(e.target.checked){
                setdisplay('inline')
            }
            else{
                setdisplay('none')
                setadminkey("");
            }
    }

    async function handleloginsubmit(e) {
        try{
        e.preventDefault();
        const formData=new FormData();
        formData.append('userName',userName);
        formData.append('email',email);
        formData.append('password',password);
        formData.append('adminkey',adminkey);
        if(photo){
            formData.append('profileImage',photo);
        }
        
       const res= await axios.post('/user/signup',formData,{headers:{
        "Content-Type":"multipart/formdata",
       },
        withCredentials:true,
    });
        await axios.get('/api/me').then(res=>setuser(res.data)).catch(err=>{console.log(err)});
       if(res.status===200){
        navigate('/');
       }}
       catch(err){
        if(display=="inline"){
        alert("Wrong admin key or user already Exists")}

        else{
            alert("User Already Exists");
        }
    }
       
    }
return (
    <>
    <Nav user={user} setuser={setuser}/>
        <form >
            <label htmlFor="">User Name:</label>
            <input type="text" name="name" value={userName} onChange={(e)=>setname(e.target.value)} /> <br />
            <label htmlFor="">Email:</label>
            <input type="text" name="name" value={email} onChange={(e)=>setemail(e.target.value)} /> <br />
            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={e=>setpassword(e.target.value)}/> <br />
            <label htmlFor="">New Admin registration</label>
                <input type="checkbox" name="" id="" onChange={adminlogintoggle} /><br />
                <label htmlFor="" style={{display:display}}>Admin Secret Key</label>
                <input type="text" name="" id=""  style={{display:display}} value={adminkey} onChange={e=>setadminkey(e.target.value)}/><br/>
                <label htmlFor="">Upload profile Image</label>
            <input type="file" name="" id="" onChange={e=>setphoto(e.target.files[0])} /><br />
            <button type="submit" onClick={handleloginsubmit}>Login</button>
        </form>
    </>
);
}