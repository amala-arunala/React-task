import React from 'react'
import { NavLink } from 'react-router-dom'
import bus from '../images/busIcon.png'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-img'>
           <img src={bus} alt="bus" width="50px" height="50px" style={{marginRight : "8px"}}/>
           <h1>Online Bus Booking App</h1>
        </div>
        <NavLink to='/logout' className="nav-btn" 
             onClick={() => {localStorage.setItem("userDetails", JSON.stringify({}))}}>
              Logout
        </NavLink>
    </div>
  )
}

export default Navbar