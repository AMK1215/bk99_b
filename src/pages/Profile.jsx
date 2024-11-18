import React, { useState } from 'react'
import { GrPrevious } from 'react-icons/gr'
import '../assets/css/profile.css'
import user from '../assets/img/user.png'
import { BiEdit } from 'react-icons/bi'
import information from '../assets/img/information.png'
import language from '../assets/img/language.png'
import report from '../assets/img/report.png'
import contact from '../assets/img/contact.png'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import en from '../assets/img/en.png'
import mm from '../assets/img/mm.png'

const ProfilePage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    const links=[
        {img:information,name:'Edit profile information',link:'/edit-profile'},
        {img:report,name:'Win Loss Report',link:'/report'},
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
                <img src={item.img} />
                <p>{item.name}</p>
                </Link>
            </div>
        })}
         <div onClick={handleShow}  className='mb-3'>
                <div className='d-flex gap-1 align-items-center'>
                <img src={language} />
                <p>Language</p>
                </div>
      </div>
      </div>
      <Modal  className="text-black" show={show} onHide={handleClose}>
        <Modal.Header closeButton className='py-2 my-0'>
          <Modal.Title>
            <h5  style={{fontSize:'19px'}}  className='fw-bold mt-3 mb-0 '>Choose Your Preferred Language</h5>
            <small style={{fontSize:'15px'}} >Please select your Language</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <button className="mb-2 mb-sm-4 bg-white border rounded-4 py-3 text-center" style={{width:'100%'}}>
            <img src={en} style={{width:'25px',height:'20px',objectFit:'cover'}} /> English
          </button>
          <button className=" bg-white border rounded-4 py-3 text-center" style={{width:'100%'}}>
          <img src={mm} style={{width:'25px',height:'20px',objectFit:'cover'}} /> Myanmar
          </button>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProfilePage
