import { PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BankPage = () => {
  return (
    <div className='px-2 px-sm-4 py-4 '>
      <h4 className="fw-smeibold text-center mb-4">My Banks</h4>
     <p className='bg-white my-2 px-3 py-2 rounded-3 text-danger text-center'> 
      *အကောင့်အမျိုးအစားတစ်ခုအတွက် အကောင့်တစ်ခုသာ သိမ်းဆည်းလို့ရပါမည်။ 
       </p>
      <p className='bg-white px-3 py-2 rounded-3 text-danger text-center'>
            *အကောင့်အမျိုးအစားတစ်ခုကို 30 ရက်အတွင်း တစ်ကြိမ်သာ အပြောင်းအလဲ ပြုလုပ်နိုင်ပါမည်။
   </p>
      <div className="text-center mt-4">
      <Link to={'/add-bank'}>
      <Button className='py-2 px-4 ' variant="outline-danger">
       <PlusCircleIcon/>  
       <h5 className="ms-2 mt-2 d-inline">
         Add Bank Account
       </h5>
      </Button>
      </Link>
      </div>
    </div>
  )
}

export default BankPage
