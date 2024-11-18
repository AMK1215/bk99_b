import React, { useState } from 'react'
import { GrPrevious } from 'react-icons/gr'
import '../assets/css/profile.css'
import user from '../assets/img/user.png'
import { BiEdit } from 'react-icons/bi'
import information from '../assets/img/information.png'
import language from '../assets/img/language.png'
 import contact from '../assets/img/contact.png'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import en from '../assets/img/en.png'
import mm from '../assets/img/mm.png'
import report from '../assets/img/report.png'
import password from '../assets/img/password.png'
import bank from '../assets/img/bank.png'
import log from '../assets/img/log.svg'

const ProfilePage = () => {
  const links=[
        {img:information,name:'Edit profile information',link:'/edit-profile'},
        {img:password,name:'Change Password',link:'/change-password'},
        {img:bank,name:'My Banks',link:'/bank'},
        {img:report,name:'Transfer Logs',link:'/transfer-logs'},
        {img:log,name:'Game Logs',link:'/game-logs'},
        {img:contact,name:'Contact us',link:'/contact'},
    ]
  return (
    <div className='p-2 pb-5 profile'>
        <div className="mb-2 d-flex align-items-center gap-2 gap-sm-5" >
        <div onClick={()=>history.back()} >
            <GrPrevious color='#fff' size={20} />
        </div>
        <div className=' mt-3 mx-auto'>
            <h5 className=' text-center fw-bold'>Profile</h5>
        </div>
       
      </div>
      <div className='text-center profileContainer'>
        <img src={user} className='userImg' />
        <Link to={'/edit-profile'}>
        <div className="profileEditContainer">
            <BiEdit color='black' size={23} />
        </div>
        </Link>
      </div>
      <p className="text-center fw-bold mt-3 mb-1">Taylor Swift</p>
      <p className="text-center mb-4">youremail@domain.com | +01 234 567 89</p>
      <small >Account Settings</small>
      <div className="mt-2 bg-white text-black p-3 rounded-4">
        {links.map((item,index)=>{
            return <div key={index} className='mb-3'>
                <Link to={item.link} className='d-flex gap-1 align-items-center'>
                <img src={item.img} className='profileIcon' />
                <p>{item.name}</p>
                </Link>
            </div>
        })}
          
      </div>
       
    </div>
  )
}

export default ProfilePage
