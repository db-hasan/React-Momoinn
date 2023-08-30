import React from 'react'
import BackHeader from './BackHeader'
import BackFooter from './BackFooter'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'


const BackHome = () => {
  return (
    <>
    <BackHeader />
    <div className='d-flex'>
        <Sidebar />
        <Dashboard />
    </div>
    <BackFooter />
    </>
    
  )
}

export default BackHome