import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterNav from './FooterNav'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <div className='pb-5'>
        <Navbar/>
       <Outlet/>
       <FooterNav/>
       <Toaster/>
    </div>
  )
}

export default Layout
