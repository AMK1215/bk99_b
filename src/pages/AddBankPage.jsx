import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { GrPrevious } from 'react-icons/gr';

const AddBankPage = () => {
    const [selectedBank,setSelectedBank]=useState('kpay');
    const banks=[
      {name:'K Pay',value:'kpay'},
      {name:'Wave',value:'wave'}
      ,{name:'CB',value:'cb'},
      {name:'AYA',value:'aya'}
    ]
  return (
    <div className='p-2 pb-5'>
      
      <div className="mb-2 d-flex align-items-center gap-2 gap-sm-5" >
        <div onClick={()=>history.back()} >
            <GrPrevious color='#fff' size={20} />
        </div>
        <div className=' mt-3 mx-auto'>
            <h4 className=' text-center fw-bold'>Add Bank</h4>
        </div>
       
      </div>
      <Form className='mb-4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Bank Type*</Form.Label>
       <Form.Select onChange={(e)=>setSelectedBank(e.target.value)}>
        {banks.map((item,index)=>{
          return  <option selected={selectedBank===item.name} key={index} value={item.value}>{item.name}</option>
        })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Bank Account Name*</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Bank Account Number*</Form.Label>
        <Form.Control type="text" placeholder="Amount" />
      </Form.Group>
     
       
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your note</Form.Label>
        <Form.Control as="textarea" placeholder='Write here...' rows={3} />
      </Form.Group>
      </Form>
      <button  className="py-2 shadow-lg  navLoginBtn">Add Bank</button>

    </div>
  )
}

export default AddBankPage
