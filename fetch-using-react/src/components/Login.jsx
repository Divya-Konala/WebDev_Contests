import { useEffect, useState } from "react";
import ProfilePage from "./ProfilePage";


const Login = () => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [errorMsg,setErrMsg]=useState("");

  const handleLogin = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameState,
        password: passwordState,
      }),
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
        else{
          let message=`${res.status} ${res.statusText}`;
          setErrMsg(message);
          throw new Error(message);
        }
      })
      .then((data) =>{
        setIsLoggedIn(true);
          localStorage.setItem("id",data.id);
          localStorage.setItem("token",data.token);
      })
      .catch((error) => console.log(error));
  };

  useEffect(()=>{
    // console.log(userData);
  })
  return (
    <>
    {(!isLoggedIn)
    ?<div className="Login">
      <h1>Login Page</h1>
    <input
      type="text"
      value={usernameState}
      onChange={(e) => setUsernameState(e.target.value)}
      placeholder="username"
    />
    <input
      type="password"
      value={passwordState}
      onChange={(e) => setPasswordState(e.target.value)}
      placeholder="password"
    />
    <button type="button" onClick={handleLogin}>
      Login
    </button>
    <p className="errorMessage">{errorMsg}</p>
  </div>
    :<ProfilePage/>
  }
    </>
  );
};

export default Login;
