import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div id='header'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="" alt="" /><strong>MomoInn</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className='col-md-12'>
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/package">Rooms & Suites</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/events">Meeting & Events</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/restaurants">Restaurants & Bar</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/facilities">Facilities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <button className="btn btn-outline-warning text-light" type="submit"><Link to="/booking">Booking</Link></button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
