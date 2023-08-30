import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import FrontHeader from './FrontHeader'
import FrontFooter from './FrontFooter'
const Service = () => {
  return (
    <>
    <FrontHeader />
    <div className='p-5'>
        <Link to="data">Data</Link>
    </div>
    <Outlet/>
    <FrontFooter />
    </>
  )
}

export default Service