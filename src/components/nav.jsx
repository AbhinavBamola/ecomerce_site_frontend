import { useNavigate } from "react-router";
import axios from '../utils/util.js';

export default function Nav({user,setuser}){
    const navigate=useNavigate();

    function handlelogin(){
        navigate('/login');
    }
    async function handlelogout(){
        await axios.post('/user/logout')
        setuser(null);
    }

    function handleregister(){
        navigate('/register');
    }

    function handlehome(){
        navigate('/');
    }

    if(user==null){
        return(
            <>
            <nav>
                <ul>
                    <li>
                        <button onClick={handlehome}>Home</button>
                    </li>
                    <li>
                        <button onClick={handlelogin}>Login</button>
                    </li>
                    <li>
                        <button onClick={handleregister}>Register</button>
                    </li>
                </ul>
            </nav>
            </>
        );
    }
    else{
          return(
            <>
            <nav>
                <ul>
                    <li>
                        <button onClick={handlehome}>Home</button>
                    </li>
                    <li>
                        <button onClick={handlelogout}>Logout</button>
                    </li>
                </ul>
            </nav>
            </>
        );
    }
}