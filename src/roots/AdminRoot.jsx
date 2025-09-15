import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const AdminRoot = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
        <div className='mt-4'>
        <Footer /></div>
    </div>
  )
}

export default AdminRoot