import React from 'react'
import { FcPrevious } from 'react-icons/fc'
import { GrPrevious } from 'react-icons/gr'
import AccountInfo from '../components/AccountInfo'
import topup from '../assets/img/topup.png'
import withdraw from '../assets/img/withdraw.png'
import CurrentBalance from '../components/CurrentBalance'
import { Link } from 'react-router-dom'

const ExchangePage = () => {
  return (
    <div className='p-2'> 
      <div className="mb-4 d-flex align-items-center gap-2 gap-sm-5" >
        <div onClick={()=>history.back()} >
            <GrPrevious color='#fff' size={20} />
        </div>
        <div className=' mt-3 mx-auto'>
            <h5 className=' text-center fw-bold'>Exchange</h5>
        </div>
      </div>
      <AccountInfo/>
      <CurrentBalance/>
       <div className='row px-2 mt-3  mx-auto cursor-pointer gap-1  gap-sm-5'>
            <div className='col-5 col-md-2 ' >
               <Link to={'/exchange/bank?type=top-up'} className='border rounded-4 py-2 px-3 d-flex align-items-center '  style={{background:'#757f9a',width:'max-content'}}>
               <img src={topup} className='mt-1 me-1' />
                <small  style={{textWrap:'nowrap'}}>Top Up</small>
               </Link>
            </div>
            <div className='  col-5  col-md-2  '>
            <Link to={'/exchange/bank?type=with-draw'} className='border rounded-4 py-2 px-3 d-flex align-items-center ' style={{width:'max-content'}}>
                <img src={withdraw} className='mb-1 me-1' />
                <small style={{textWrap:'nowrap'}}>With Draw</small>
                </Link>
            </div>
       </div>
    </div>
  )
}

export default ExchangePage
