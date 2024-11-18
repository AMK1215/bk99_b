import React from 'react'
import { FcPrevious } from 'react-icons/fc'
import { GrPrevious } from 'react-icons/gr'
 import topup from '../assets/img/topup.png'
import withdraw from '../assets/img/withdraw.png'
import CurrentBalance from '../components/CurrentBalance'
import { Link } from 'react-router-dom'

const ExchangePage = () => {
  return (
    <div className='p-2'> 
      <div className="px-2 px-sm-4 mb-4 d-flex align-items-center gap-2 gap-sm-5" >
        <div onClick={()=>history.back()} >
            <GrPrevious color='#fff' size={20} />
        </div>
        <div className=' mt-3 mx-auto'>
            <h5 className=' text-center fw-bold'>Exchange</h5>
        </div>
      </div>
       <CurrentBalance/>
       <div className='mt-3 d-flex align-items-center gap-4 justify-content-center'>
            <div className='' >
               <Link to={'/exchange/bank?type=top-up'} className='border rounded-5 py-2 px-4 d-flex align-items-center '  style={{background:'#757f9a',width:'max-content'}}>
               <img src={topup} className='mt-1 me-2 exchangeIcon' />
                <p className='exchangeText'  style={{textWrap:'nowrap'}}>Deposit</p>
               </Link>
            </div>
            <div className=''>
            <Link to={'/exchange/bank?type=with-draw'} className='border rounded-5 py-2 px-4 d-flex align-items-center ' style={{width:'max-content'}}>
                <img src={withdraw} className='mb-1 me-2 exchangeIcon' />
                <p  className='exchangeText' style={{textWrap:'nowrap'}}>With Draw</p>
                </Link>
            </div>
       </div>
    </div>
  )
}

export default ExchangePage
