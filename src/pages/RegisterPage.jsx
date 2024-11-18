import React from 'react'
import logo from '../assets/img/logo.png'
 import { Button } from 'react-bootstrap'
import { BiShield, BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
const RegisterPage = () => {
  const navigate=useNavigate();
  return (
    <div className="auth py-5">
    <div className=' d-flex flex-column align-items-center'>
       <img  onClick={()=>navigate('/')} src={logo} className='authLogo' />
       <h5>Welcome!</h5>
      <p>Register Your Account!</p>
      <div className="mb-2 w-full">
        <p className="text-sm">Username</p>
        <div className="d-flex align-items-center gap-1 p-2 rounded bg-white">
          <BiUser size={23} className='text-secondary' />
          <input className='w-full' type="text" placeholder='Username' />
        </div>
      </div>
      <div className="mb-2 w-full">
        <p className="text-sm">Password</p>
        <div className="d-flex align-items-center gap-1 p-2 rounded bg-white">
          <BiShield size={23} className='text-secondary' />
          <input  className='w-full' type="password" placeholder='Password' />
        </div>
      </div>
      <div className="mb-2 w-full">
        <p className="text-sm">Repeat Password</p>
        <div className="d-flex align-items-center gap-1 p-2 rounded bg-white">
        <BiShield size={23} className='text-secondary' />
          <input  className='w-full' type="password" placeholder='Repeat Password' />
        </div>
      </div>
       <button className="mt-4 btn-gold fw-semibold py-2 px-4 authBtn rounded text-center">Register</button>
       <p className='mt-4 mb-2'>Already have an account?</p>
      <Link to={'/login'}>
      <Button  variant="outline-light" className='authBtn px-4'>Login</Button>
      </Link>
       
    </div>
    </div>
  )
}

export default RegisterPage