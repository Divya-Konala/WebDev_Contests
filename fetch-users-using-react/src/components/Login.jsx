import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import {validateUser} from "../redux/Actions"
const Login=()=>{
    const dispatch=useDispatch();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const searching=useSelector(state=>state.validate.searching);
    const error=useSelector(state=>state.validate.error);

    const handleLogin=(e)=>{
        e.preventDefault();
        dispatch(validateUser(username,password));
    }
    return <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
            <button type="submit">Login</button>
            <p className="errorMessage">{error}</p>
            {searching && <p>Validating...</p>}
        </form>
    </div>
}

export default Login