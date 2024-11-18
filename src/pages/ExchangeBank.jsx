import React from 'react'
import { GrPrevious } from 'react-icons/gr'
 import CurrentBalance from '../components/CurrentBalance'
import kpay from '../assets/img/kpay.png'
import wave from '../assets/img/wave.png'
import cb from '../assets/img/cb.png'
import aya from '../assets/img/aya.png'
import { Link, useSearchParams } from 'react-router-dom'

const ExchangeBank = () => {
    const [searchParams]=useSearchParams();
    const banks=[
        {id:1,img:kpay,name:'K Pay',value:'kpay'},
        {id:2,img:wave,name:'Wave',value:'wave'},
        {id:3,img:cb,name:'CB',value:'cb'},
        {id:4,img:aya,name:'AYA',value:'aya'},
     ]
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
       <CurrentBalance/>
      <h5 className="fw-bold my-3">Choose Payment Method</h5>
      <div className="d-flex gap-3 gap-sm-5 align-items-center my-2">
        {banks.map((bank)=>{
            return <div key={bank.id} className="cursor-pointer text-center">
                <Link to={`${searchParams.get('type')==='top-up' ? '/top-up?bank='+bank.value :'/with-draw?bank='+bank.value}`}>
                 <img src={bank.img} className='exchangeBank' />
                <p>{bank.name}</p>
                </Link>
            </div>
        })}
      </div>
    </div>
  )
}

export default ExchangeBank
