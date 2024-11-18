import React, { useState } from 'react'
import '../assets/css/home.css'
import navAmount from '../assets/img/navAmount.png'
import profile from '../assets/img/loginProfile.png'
import lock from '../assets/img/loginLock.png'
 import {  BiSearch } from 'react-icons/bi'
import {   Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png';
import user from '../assets/img/user.png'
import coin from '../assets/img/coin.png'
import reload from '../assets/img/reload.svg'
const Navbar = () => {
  
  return (
    <div className='border-bottom cursor-pointer text-white d-flex align-items-center justify-content-between  px-2 px-sm-3'>
      <Link to={'/'}>
        <img src={logo} className='logo' />
      </Link>
      <div className=' d-flex align-items-center gap-1'>
        <div>
          <p className="fw-semibold text-center">user@123</p>
          <div className="d-flex align-items-center gap-1">
            <img src={coin} className='navCoin' />
            <small className="fw-semibold">10000</small>
            <img src={reload} className='navReload' />
          </div>
        </div>
       <img src={user} className='navUser'  />
      <div>
         
      </div>
      </div>
       
    </div>
  )
}

export default Navbar
