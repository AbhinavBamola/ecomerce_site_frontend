import { useEffect } from "react";
import { useState } from "react"
import Nav from "../components/nav";

export default function Home({user}){
    const [name,setname]=useState("");
    useEffect(()=>{
    if(user){
        setname(user.name);
    }
    else{
        setname("Guest");
    }},[]);
    return(<>
    <Nav user={user}/>
    <h1>Hello {name}</h1>
    </>)
}