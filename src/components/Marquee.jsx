import React from 'react'
 import { Volume2Icon } from 'lucide-react'

const Marquee = () => {
    
  return (
   <div className='ps-lg-3 py-sm-3   d-flex align-items-center gap-2 flex-nowrap'>
       <div className='shadow-lg  homeMarquee  py-1 px-3  m-sm-2 '>
         <Volume2Icon className='marqueeText me-2' size={22}/>
         <marquee className='marqueeText' behavior="" direction="left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo ut eaque, nostrum iusto voluptate dolor, animi harum alias accusantium facere quas aliquid. Aut cumque non autem laboriosam aperiam totam.
        </marquee>
     </div>
    </div>
    

   )
}

export default Marquee
