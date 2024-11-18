import React from 'react'
import coin from '../assets/img/coin.png'
import user from '../assets/img/user.png'
import reload from '../assets/img/reload.svg'


const CurrentBalance = () => {
  return (
    <>
    <div className='rounded-4 p-3 exchangeContainer d-flex align-items-center gap-1'>
    <img src={user} className='exchangeUser'  />
    <div>
         <p className="fw-semibold ms-2 exchangeText">user@123</p>
          <div className="d-flex align-items-center gap-1">
            <img src={coin} className='exchangeCoin' />
            <small className="fw-semibold exchangeText">10000 Ks</small>
            <img src={reload} className='exchangeReload' />
          </div>
        </div>
      <div>
         
      </div>
      </div>
    </>
  )
}

export default CurrentBalance
