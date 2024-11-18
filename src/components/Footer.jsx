import React from 'react'
import '../assets/css/home.css'
import twitter from '../assets/img/twitter.png'
import titok from '../assets/img/titok.png'
import fb from '../assets/img/fb.png'
import ig from '../assets/img/ig.png'
import yt from '../assets/img/youtube.png'
import warning from '../assets/img/warning.png'
import { Link } from 'react-router-dom'
import sp1 from '../assets/img/sp1.png';
import sp2 from '../assets/img/sp2.png';
import sp3 from '../assets/img/sp3.png';
import sp4 from '../assets/img/sp4.png';
import sp5 from '../assets/img/sp5.png';
import sp6 from '../assets/img/sp6.png';
import sp7 from '../assets/img/sp7.png';
import sp8 from '../assets/img/sp8.png';
import sp9 from '../assets/img/sp9.png';
import sp10 from '../assets/img/sp10.png';
 const Footer = () => {
    const socials=[
        {img:twitter,link:'/'},
        {img:titok,link:'/'},
        {img:fb,link:'/'},
        {img:ig,link:'/'},
        {img:yt,link:'/'},
        {img:warning,link:'/'},
     ];
     const sponsors=[sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8,sp9,sp10]
  return (
    <footer className='footer py-5'>
        <div className=" d-flex align-items-center justify-content-center gap-3">
            {socials.map((social,index)=>{
                return <Link key={index} to={social.link}>
                    <img className='socialIcon' src={social.img}  />
                </Link>
            })}
        </div>
        <div className='text-center mt-4'>
        <small className='fw-bold'>Sponsorship and Gaming Responsibilities</small>
        <div className='mt-3   d-flex flex-wrap align-items-center justify-content-center gap-2 gap-sm-3'>
            {sponsors.map((item,index)=>{
                return <img className='sponsorImg' src={item} key={index} />
            })}
        </div>
        </div>
    </footer>
  )
}

export default Footer
