import React from 'react'
import logo from '../assets/img/logo.png'
 import { Button } from 'react-bootstrap'
import { BiShield, BiUser } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
 const LoginPage = () => {
  const navigate=useNavigate();
  return (
    <div className="auth py-5">
    <div className=' d-flex flex-column align-items-center'>
       <img onClick={()=>navigate('/')} src={logo} className='authLogo' />
       <h5>Welcome Back!</h5>
      <p>Login to Your Account!</p>
      <div className="mb-2 w-full">
        <p className="text-sm">Username</p>
        <div className="d-flex align-items-center gap-1 p-2 rounded bg-white">
          <BiUser size={23} className='text-secondary' />
          <input className='w-full' type="text" placeholder='Username' />
        </div>
      </div>
      <div className="mb-2 w-full">
        <p className="text-sm">Password</p>
        <div className="d-flex align-items-center gap-1 p-2 rounded  bg-white">
          <BiShield size={23} className='text-secondary' />
          <input  className='w-full' type="password" placeholder='Password' />
        </div>
      </div>
     
       <button className="px-4 mt-4 btn-gold fw-semibold py-2 authBtn rounded text-center">Login</button>
       <p className='mt-4 mb-2'>Don't have an account yet?</p>
       <Link to={'/register'}>
       <Button  variant="outline-light" className='authBtn px-4'>Register</Button>
       </Link>


       
    </div>
    </div>
  )
}

export default LoginPage