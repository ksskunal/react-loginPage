import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../ContextApi";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const {username, setUsername,password, setpassword,setLoginStatus} = useContext(ContextApi)
 
  const [error, setError] = useState('');
  function handlesubmit(e) {
    e.preventDefault();
    const record = { username, password };
    if (record.username === "kunal123") {
      if (record.password === "1234") {

        window.localStorage.setItem('username', record.username)
        setUsername(window.localStorage.getItem('username'))
        window.localStorage.setItem('password', record.password)
        setpassword(window.localStorage.getItem('password'))
        window.localStorage.setItem('loginStatus', 1)
        setLoginStatus(window.localStorage.getItem('loginStatus'))
       
        navigate("/home");
      } else {
        setError("Your password is not correct");
      }
    } else {
      setError("Your Username is Not Correct");
    }
    if (record.username.trim() === "") {
      setError("Please Do Not Leave Empty space in Username ");
    }

    setTimeout(() => {
      setError('');
    }, 2000);
  }

  return (
    <>
        <h2 className="login">Login </h2>
      <form action="" onSubmit={handlesubmit}>
        <span className="error-block">{error}</span>
        <br />
        <label className="form-label" htmlFor="">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className="form-control"
          name=""
          id=""
        />

        <label className="form-label" htmlFor="">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          type="text"
          className="form-control"
          name=""
          id=""
        />
        <button type="submit" className="form-control btn btn-primary my-2">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
