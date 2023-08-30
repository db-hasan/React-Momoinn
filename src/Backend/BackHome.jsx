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
        <div className='p-5'>
          <Sidebar />
        </div>
        <div className='p-5'>
          <Dashboard />
        </div>
        
    </div>
    <BackFooter />
    </>
    
  )
}

export default BackHome