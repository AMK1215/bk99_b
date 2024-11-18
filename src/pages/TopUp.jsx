import React from 'react'
import { Form } from 'react-bootstrap'
import { GrPrevious } from 'react-icons/gr'
import { useSearchParams } from 'react-router-dom'

const TopUpPage = () => {
  const [searchParams]=useSearchParams();
  const selectedBank=searchParams.get('bank')==='kpay' ? "K Pay" :
  searchParams.get('bank')==='wave'  ? 'Wave' : searchParams.get('bank')==='cb' ? 'CB' : searchParams.get('bank')==='aya' ? "AYA" : '' ;
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
            <h5 className=' text-center fw-bold'>Deposit</h5>
        </div>
       
      </div>
      <Form className='mb-4'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name*</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone*</Form.Label>
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Amount*</Form.Label>
        <Form.Control type="text" placeholder="Amount" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Payment Method*</Form.Label>
       <Form.Select >
        {banks.map((item,index)=>{
          return  <option selected={selectedBank===item.name} key={index} value={item.value}>{item.name}</option>
        })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{selectedBank} Phone*</Form.Label>
        <Form.Control type="text" placeholder={selectedBank+ " Phone"}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Screenshot*</Form.Label>
        <Form.Control type="file"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your note</Form.Label>
        <Form.Control as="textarea" placeholder='Write here...' rows={3} />
      </Form.Group>
      </Form>
      <button  className="py-2 shadow-lg  navLoginBtn">Deposit</button>

    </div>
  )
}

export default TopUpPage
