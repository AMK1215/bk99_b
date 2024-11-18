import React from 'react'

const CurrentBalance = () => {
  return (
    <div style={{background:'#646c77'}} className="cursor-pointer py-3 px-3 d-flex align-items-center justify-content-between rounded-3">
       <small> Current Balance</small>
       <div className='d-flex align-items-center gap-1'><h5>86,450</h5> <h6 className='mt-1'> MMK</h6></div>
       </div>
  )
}

export default CurrentBalance
