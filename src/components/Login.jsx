import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if(email === ""  && password === ""){
            alert("please enter valid details");
        }else{
            const newDetails = {email, password};
            setData(...data, newDetails);
            console.log(data);
            localStorage.setItem("userDetails",JSON.stringify(newDetails));
            setEmail("");
            setPassword("");
            navigate('/mainpage')
        }
    }

  return (
    <div className='container'>
        <div className='form'>
            <form onSubmit={submitHandler} className="login-form">
                <input type="text" 
                       placeholder='Email' 
                       className='form-input'
                       onChange={emailHandler}
                       value={email}
                />
                <input type="password" 
                       placeholder='Password' 
                       className='form-input'
                       onChange={passwordHandler}
                       value={password}
                />              
                <button className='btn'>LOGIN</button> <br />
                 
                <Link to='register' className='link'>New user register here</Link>
            </form>
         </div>
    </div>
  )
}

export default Login