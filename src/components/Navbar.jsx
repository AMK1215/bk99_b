import React, { useState } from 'react'
import '../assets/css/home.css'
import navAmount from '../assets/img/navAmount.png'
import profile from '../assets/img/loginProfile.png'
import lock from '../assets/img/loginLock.png'
 import {  BiSearch } from 'react-icons/bi'
import {   Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='border-bottom cursor-pointer text-white d-flex align-items-center justify-content-between py-2 px-2 px-sm-3'>
      <h5 className="fw-bold">Logo</h5>
      <div className=' d-flex align-items-center gap-3'>
        <buton className="navAmountBtn rounded-5 text-center py-1 py-sm-2 px-2  px-sm-4">
           <Link to={'/exchange'}>
           <img src={navAmount} />
            12000MMK
           </Link>
           </buton>
      <button onClick={handleShow} className="  loginBtn  py-2 py-sm-2 px-3 px-sm-4 rounded-2">Login</button>
      <div>
        <BiSearch className='searchIcon' />
      </div>
      </div>
      <Modal className='cursor-pointer loginModal' show={show} onHide={handleClose}>
        <Modal.Header className='loginModalHeader' closeButton>
          <Modal.Title className='loginTitle mx-auto'>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='loginModalBody'>
        <div className="loginInputContainer p-2 mb-3 d-flex align-items-center gap-2">
          <img src={profile} style={{width:'18px',height:'20px'}} />
          <input type="text" placeholder='Please enter username' />
          </div> 
          <div className="loginInputContainer p-2 mb-3 d-flex align-items-center  gap-2">
          <img src={lock}  style={{width:'18px',height:'20px'}}  />
          <input type="text" placeholder='Please enter password' />
          </div> 
          <div className="d-flex align-items-start gap-2">
            <input type="checkbox" checked className='mt-1' />
           <div>
           <p>I confirm that I am over 18 years old and have read</p>
            {/* <small className="d-block fw-bold ">Terms of Service</small> */}
           </div>
          </div>
          <button  className="py-2 shadow-lg mt-4 navLoginBtn">Login</button>
           </Modal.Body> 
      </Modal>
    </div>
  )
}

export default Navbar
