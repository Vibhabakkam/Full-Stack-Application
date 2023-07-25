import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [loginData, setLoginrData] = useState({ email: "", password: "" });
    const router = useNavigate();

    const handleChange = (event) => {
      setLoginrData({ ...loginData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (loginData.email && loginData.password) {
            const response = await axios.post("http://localhost:8000/login", {
                email: loginData.email,
                password: loginData.password
            })
            console.log(response, "- response")
            if (response.data.status == 200) {
                alert(response.data.message)
                router('/allProduct');
            } else {
                alert("Error..")
            }
        } else {
            alert("Please fill all the fields.")
        }

    }

    return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <div style={{border:"2px solid black" , height:"400px" , width:"400px" , display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , marginTop:"100px"}}>
      <h1>Login</h1> 
      <form onSubmit={handleSubmit}>
        <label>Email</label><br />
        <input onChange={handleChange} type='email' name='email' /><br />
        <label>Password</label><br />
        <input onChange={handleChange} type='text' name='password' /><br />
        <input type='submit' value="Login" /><br />
      </form>
      </div>
    </div>
    )
}

export default Login