import { useNavigate } from "react-router";

export default function Nav({user}){
    const navigate=useNavigate();

    function handlelogin(){
        navigate('/login');
    }
    function handlelogout(){}

    function handleregister(){
        navigate('/register');
    }

    function handlehome(){
        navigate('/');
    }

    if(!user){
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