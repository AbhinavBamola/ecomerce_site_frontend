import { useNavigate } from "react-router";
import axios from "../utils/util.js";
import { useState } from "react";
import Nav from "../components/nav.jsx";

export default function Createproduct({user}){
    const navigate=useNavigate();
    const [description,setdescription]=useState("");
    const [Name,setname]=useState("");
    const [price,setprice]=useState("")
    const [category,setcategory]=useState("");
    const [stock,setstock]=useState("");
    const[image,setimage]=useState(null);

    async function handleloginsubmit(e) {
        try{
        e.preventDefault();
        const formData=new FormData();
        formData.append('productName',Name);
        formData.append('description',description);
        formData.append('price',price);
        formData.append('category',category);
        formData.append('stock',stock);
        if(image){
            formData.append('productImage',image);
        }
        
       const res= await axios.post('/product/create',formData,{headers:{
        "Content-Type":"multipart/formdata",
       },
        withCredentials:true,
    });
        }
       catch(err){
        alert("Fill all the Fields")
    }
       
    }
return (
    <>
    <Nav user={user} />
        <form >
            <label htmlFor="">Product Name:</label>
            <input type="text" name="name" value={Name} onChange={(e)=>setname(e.target.value)} /> <br />
            <label htmlFor="">Description</label>
            <input type="text" name="name" value={description} onChange={(e)=>setdescription(e.target.value)} /> <br />
             <label htmlFor="">Price:</label>
            <input type="text" name="name" value={price} onChange={(e)=>setprice(e.target.value)} /> <br />
            <label htmlFor="">Category:</label>
            <input type="text" name="name" value={category} onChange={(e)=>setcategory(e.target.value)} /> <br />
             <label htmlFor="">Stock:</label>
            <input type="text" name="name" value={stock} onChange={(e)=>setstock(e.target.value)} /> <br />
             <input type="file" name="" id="" onChange={e=>setimage(e.target.files[0])} /><br />
            <button type="submit" onClick={handleloginsubmit}>Login</button>
        </form>
    </>
);
}