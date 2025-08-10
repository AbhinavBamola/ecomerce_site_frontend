import { useEffect } from "react";
import { useState } from "react"
import Nav from "../components/nav";
import axios from '../utils/util.js';
import { useNavigate } from "react-router";

export default function Home({user,setuser}){
    const [name,setname]=useState("Guest");
    const [img,setimg]=useState("");
    const [products,setproducts]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
    if(user){
        console.log(user);
        setname(user.userName); 
        setimg(user.profileImage);
    }
    else{
        setimg('')
        setname("Guest");
    }},[user]);

    useEffect(()=>{
        const getproducts=async function () {
            await axios.get('/product/getallproducts')
                .then(res=>{setproducts(res.data)
            console.log(res.data)})
                .catch(err=>console.log(err));
        }
        getproducts();
    },[user])

    function createNewHandler(e){
        navigate('/createproduct')
    }
    const list=products.map(product=><h4>{product.productName}</h4>)
    if(user&&user.role=="admin"){
        return(<>
        <Nav user={user} setuser={setuser}/>
            <button onClick={createNewHandler}>Create New Product</button>
            {list}
        </>);
    }
    else{
    return(<>
    <Nav user={user} setuser={setuser}/>
    <img src={`http://localhost:8000${img}`} alt="" />
    <h1>Hello {name}</h1>
    </>)}
}