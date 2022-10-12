import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='reg-container'>
        <div className='user'>
            <h2 className='user-text'>New User</h2>
            <h5 className='user-content'>Please fill the details to register</h5>
        </div>
        
          <form className='reg-details'>
            <input type="text" placeholder='Name' className='reg-input'/>
            <input type="text" placeholder='Email'className='reg-input'/>
            <input type="password" placeholder='Password' className='reg-input'/>
            <input type="password" placeholder='Confirm Password'className='reg-input'/>   
          </form>
        
        <div className='register'>
            <Link to="/" className='reg-btn'>REGISTER</Link>
        </div>
    </div>
  )
}

export default Register