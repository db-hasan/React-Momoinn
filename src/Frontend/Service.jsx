import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Service = () => {
    return (
        <>
            <Header />
            <div className='p-5'>
                <h1>Dame Routing</h1>
                <Link to="dame">Routing</Link>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Service