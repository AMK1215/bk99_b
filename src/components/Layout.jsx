import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterNav from './FooterNav'

const Layout = () => {
  return (
    <div className='pb-5'>
        <Navbar/>
       <Outlet/>
       <FooterNav/>
    </div>
  )
}

export default Layout
