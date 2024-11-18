import React from 'react'
import { GrPrevious } from 'react-icons/gr'
import twitter from '../assets/img/twitter.png'
import titok from '../assets/img/titok.png'
import fb from '../assets/img/fb.png'
import ig from '../assets/img/ig.png'
import { Link } from 'react-router-dom'
const ContactUsPage = () => {
    const socials=[
        {img:twitter,link:'/'},
        {img:titok,link:'/'},
        {img:fb,link:'/'},
        {img:ig,link:'/'}
    ]
  return (
    <div className='p-2 pb-5'>
       <div className="mb-2 d-flex align-items-center gap-2 gap-sm-5" >
        <div onClick={()=>history.back()} >
            <GrPrevious color='#fff' size={20} />
        </div>
        <div className=' mt-3 mx-auto'>
            <h5 className=' text-center fw-bold'>Contact Us</h5>
        </div>
       
      </div>
      <div style={{background:'#ecedee'}} className='text-black p-3 p-sm-4 rounded-3'>
        <h5>Visit Us</h5>
        <p>12 Marina Boulevard, DBS Asia Central, Marina Bay Financial Centre Tower 3, Singapore 018982</p>
        <h5 className='mt-3'>Email Us</h5>
        <p>test@sdax.com</p>
        <h5 className='mt-3'>Call Us</h5>
        <p>+971-4-576-6770 , +971-55-983-7007</p>
        <p className="mt-3">Feel free to get in touch with us through our channels:</p>
        <div className="mt-3 d-flex align-items-center  gap-3">
            {socials.map((social,index)=>{
                return <Link key={index} to={social.link}>
                    <img className='socialIcon' src={social.img}  />
                </Link>
            })}
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
