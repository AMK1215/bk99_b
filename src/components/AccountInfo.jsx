import React from 'react'
import profile from '../assets/img/profile.png'
import '../assets/css/home.css'
const AccountInfo = () => {
  return (
    <div className='accountInfo cursor-pointer mb-3 py-1 py-sm-2 px-2 px-sm-3 rounded-3 d-flex align-items-center gap-2'>
      <img src={profile} className='accountInfoProfile' />
      <div>
        <p className="fw-bold">Su Yee</p>
        <p className='p-0 m-0'>ID:12345689</p>
      </div>
    </div>
  )
}

export default AccountInfo
