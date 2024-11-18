import React,{useState} from 'react'
import filter from '../assets/img/filter.png'
import '../assets/css/transaction.css'
import { GrPrevious } from 'react-icons/gr'
import { Offcanvas } from 'react-bootstrap'
import calendar from '../assets/img/calendar.png'
const TransactionPage = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const data=[
        {status:'Transaction Out',
            id:'123456890',
            amount:10000,
            closing:4000,
            time:new Date().toLocaleString()
        },
        {status:'Transaction In',
        id:'123456890',
        amount:10000,
        closing:4000,
        time:new Date().toLocaleString()
    },
    {status:'Transaction Out',
    id:'123456890',
    amount:10000,
    closing:4000,
    time:new Date().toLocaleString()
},
{status:'Transaction In',
id:'123456890',
amount:10000,
closing:4000,
time:new Date().toLocaleString()
},
    ]
    const periods=[
        {name:'Today',value:'today'},
        {name:'This Week',value:'thisWeek'},
        {name:'This Month',value:'thisMonth'},
        {name:'Previous Month',value:'previousMonth'},
        {name:'This Year',value:'thisYear'},
    ]
    const times=[
        {name:'15 Sep 2023',value:''},
        {name:'20 Sep 2023',value:''},
     ]
     const statuses=[
        {name:'Transaction In',value:''},
        {name:'Transaction Out',value:''},
     ]
  return (
    <div className='py-2  pb-5 transaction'>
     <div className="mb-2 pe-2 d-flex align-items-center justify-content-between"> 
     <div className=" d-flex align-items-center gap-2 gap-sm-5" >
        <div onClick={()=>history.back()} >
            <GrPrevious color='#fff' size={20} />
        </div>
        <div className=' mx-auto'>
            <h5 className=' text-center fw-bold'>Transaction</h5>
        </div>
      </div>
      <img onClick={handleShow} src={filter} style={{width:'20px',height:'20px'}} />
       </div>
       <div className="px-4">
       <p className='fw-bold'>This Week</p>
       <div className="my-2 ">
        {data.map((item,index)=>{
            return <div key={index} className={` ${item.status==='Transaction In' ? 'transactionIn' : 'transactionOut'} rounded-3 bg-white text-black mb-2 row py-2  px-sm-2  shadow-lg `}>
                <div className="col-6">
                    <small className="d-block fw-bold text-black">{item.status}</small>
                    <small className='d-block'>Transaction ID</small>
                    <small className='d-block'>{item.id}</small>
                </div>
                <div className="col-6">
                    <p className="fw-bold">{item.amount}</p>
                    <small  className='d-block'>Closing Balance</small>
                    <small className='d-block fw-bold'>{item.closing}</small>
                    <small className='d-block'>{item.time}</small>
                </div>
            </div>
        })}
       </div>
       </div>
       <Offcanvas className='rounded-top-4' placement='bottom' show={show} onHide={handleClose}>
        <Offcanvas.Header className='d-flex align-items-center justify-content-between border-bottom'>
          <Offcanvas.Title>Filters</Offcanvas.Title>
          <Offcanvas.Title onClick={handleClose} className='text-primary'>Clear</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <p className='fw-bold mb-2'>Period</p>
            <div className="d-flex align-items-center gap-2 gap-sm-4 flex-wrap">
                {periods.map((item,index)=>{
                    return <button className='bg-white py-2 px-3 rounded-4 border' key={index}>
                        <p className='transactionFilterText'>{item.name}</p>
                    </button>
                })}
            </div>
            <p className='fw-bold mb-2 mt-4'>Select Period</p>
            <div className="d-flex align-items-center gap-2 gap-sm-4 flex-wrap">
                {times.map((item,index)=>{
                    return <button className='bg-white py-2 px-3 rounded-4 border' key={index}>
                        <img src={calendar} style={{width:'18px',height:'18px'}} />                        
                         <p className='d-inline ms-1 transactionFilterText'>{item.name}</p>

                    </button>
                })}
            </div>
            <p className='fw-bold mb-2 mt-4'>Status</p>
            <div className="d-flex align-items-center gap-2 gap-sm-4 flex-wrap">
                {statuses.map((item,index)=>{
                    return <button className='bg-white py-2 px-3 rounded-4 border' key={index}>
                    <p className='transactionFilterText'>{item.name}</p>

                    </button>
                })}
            </div>
            <button  className="mt-4 py-2 shadow-lg  navLoginBtn">Show results (5)</button>

        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}

export default TransactionPage
