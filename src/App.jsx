import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Createproduct from './pages/CreateProduct.jsx';
import axios from './utils/util.js';
import { useEffect } from 'react';

function App() {
  const [user, setuser] = useState(null);

  useEffect(() => {
    async function getuser(params) {
      await axios.get('/api/me')
      .then((res) => { if(Object.keys(res.data).length==0&&res.data.constructor==Object){
        setuser(null);
      }
      else{
        setuser(res.data);
      }
     })
      .catch(err => { console.log(err) })
    }
    getuser();
    console.log("User after setting " + user)
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home user={user} setuser={setuser} />} />
          <Route path="/login" element={<Login user={user} setuser={setuser} />} />
          <Route path="/createproduct"  element={<Createproduct user={user} />}/>
          <Route path="/register" element={<Register user={user} setuser={setuser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
