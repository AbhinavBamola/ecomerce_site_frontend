import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router'; 
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [user, setuser] = useState(null);

  useEffect( ()=>{
    async function getuser(params) {
      const res=await axios.get('http://localhost:8000/api/me');
    setuser(res.data);
    }
    getuser();
  },[user])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login user={user} setuser={setuser} />} />
          <Route path="/register" element={<Register user={user} setuser={setuser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
