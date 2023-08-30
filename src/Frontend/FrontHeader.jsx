import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
const FrontHeader = () => {
  return (
    <div className='nav_bar'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/">About</Link></li>
    </div>
  )
}

export default FrontHeader
