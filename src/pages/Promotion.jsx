import React from 'react'
import Marquee from '../components/Marquee'
import LanguageDropdown from '../components/LanguageDropdown'

const Promotion = () => {
    const imgs=[
         'https://spiderman-2-react.vercel.app/assets/p2-B5iW7-Mx.png',
        'https://spiderman-2-react.vercel.app/assets/p3-D8z2ql8D.png',
        'https://spiderman-2-react.vercel.app/assets/p1-D1y5gQGM.png'
    ]
  return (
    <div>
      <div className="d-flex align-items-center">
        <Marquee  />
        <LanguageDropdown/>
      </div>
      <h1 className="text-center">Promotion</h1>
      <div className="px-2 py-3 px-sm-5">
        {imgs.map((img,index)=>{
            return <img className='rounded-3 promoImg mb-4' src={img} key={index} />
        })}
      </div>
    </div>
  )
}

export default Promotion
