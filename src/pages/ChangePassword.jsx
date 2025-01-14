import React from 'react'
import { Form } from 'react-bootstrap'
import { GrPrevious } from 'react-icons/gr'

const ChangePassword = () => {
  return (
    <div className='p-2 pb-5'>
    <div className="mb-2 d-flex align-items-center gap-2 gap-sm-5" >
     <div onClick={()=>history.back()} >
         <GrPrevious color='#fff' size={20} />
     </div>
     <div className=' mt-3 mx-auto'>
         <h5 className=' text-center fw-bold'>Change Password</h5>
     </div>
    </div>
     <Form className='mb-4'>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Current Password*</Form.Label>
     <Form.Control type="password" placeholder="Current Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>New Password*</Form.Label>
     <Form.Control type="password" placeholder="New Password" />
   </Form.Group>
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
     <Form.Label>Confirm Password*</Form.Label>
     <Form.Control type="password" placeholder="Confirm Password" />
   </Form.Group>
    </Form>
   <button  className="py-2 shadow-lg  navLoginBtn">Save</button>
 </div>
  )
}

export default ChangePassword
