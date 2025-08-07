import { useEffect } from "react";
import { useState } from "react"
import Nav from "../components/nav";

export default function Home({user,setuser}){
    const [name,setname]=useState("Guest");
    useEffect(()=>{
    if(user){
        console.log(user);
        setname(user.userName);
    }
    else{
        setname("Guest");
    }},[user]);
    return(<>
    <Nav user={user} setuser={setuser}/>
    <h1>Hello {name}</h1>
    </>)
}