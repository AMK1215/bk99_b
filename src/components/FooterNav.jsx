import React from 'react'
import '../assets/css/home.css'
import home from '../assets/img/home.png'
import exchange from '../assets/img/exchange.png'
import transaction from '../assets/img/transaction.png'
import profile from '../assets/img/profileMenu.png'
import clock from '../assets/img/clock.svg'
 import { Link } from 'react-router-dom'

const FooterNav = () => {
    const menus=[
        {img:home,name:'Home',link:'/'},
        {img:exchange,name:'Money Exchange',link:'/exchange'},
        {img:transaction,name:'Transfer Logs',link:'/transfer-logs'},
        {img:clock,name:'Game Logs',link:'/game-logs'},
        {img:profile,name:'Profile',link:'/profile'},
    ]
  return (
    <div className='footerNav py-2 px-1  d-flex align-items-center justify-content-between'>
      {menus.map((item,index)=>{
        return <Link to={item.link} key={index} className='text-center'>
            <img className='footerNavImg' src={item.img} />
            <small className='d-block'>{item.name}</small>
        </Link>
      })}
    </div>
  )
}

export default FooterNav
