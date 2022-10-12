import React from 'react'
import { Link } from 'react-router-dom'

const Logout = () => {
  return (
    <div className='logout-section'>
        <div className='logout'>
         <h1>Thank you!!</h1>
        </div>
        <Link to='/'>
           <button className='logout-btn'>Book again</button>
        </Link>
    </div>
  )
}

export default Logout