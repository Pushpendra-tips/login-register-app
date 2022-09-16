import React, { useState } from "react";
import "./Register.css";
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const register=()=>{
   const {name, email, password, reEnterPassword} = user

   if(name && email && password && (password===reEnterPassword)){
    axios.post("http://localhost:5000/register",user)
    .then(res=>console.log(res))
    // alert("posted")
   }else{
    alert("invalid")
   }
  }

  const handleChange=(e)=>{
 
    const {name, value} = e.target
   setUser({
    ...user,
    [name]:value
   })
  }


  return (
    <div className="register">
        {console.log('user', user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="your Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="your Password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      ></input>
      <div className="button" onClick={register}>Register</div>
      or
      <div className="button">Login</div>
    </div>
  );
};
export default Register;
