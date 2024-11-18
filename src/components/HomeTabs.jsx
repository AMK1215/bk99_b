import React, { useState } from 'react'
import all from '../assets/img/all.png'
import hot from '../assets/img/hot.png'
import slot from '../assets/img/slots.png'
import casino from '../assets/img/casino.png'
import sport from '../assets/img/sport.png'
 import fish from '../assets/img/fish.png'
import SearchInput from './SearchInput'

const HomeTabs = () => {
  const [selectedTab,setSelectedTab]=useState('all');
    const homeTabs=[
        {img:all,name:'All',value:'all'},
        // {img:hot,name:'Hot Games'},
        {img:slot,name:'Slots',value:'slots'},
        {img:casino,name:'Live Casinos',value:'casinos'},
        {img:sport,name:'Sports',value:'sports'},
         {img:fish,name:'Fishing',value:'fishing'}
    ];
    const slots=[
      'https://shwedinker777.online/assets/img/game_logo/asia_gaming.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/pragmatic_play.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/pg_soft.png',
      'https://shwedinker777.online/assets/img/game_logo/cq_9.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/joker.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/real_time_gaming.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/yggdrasil.png',
      'https://shwedinker777.online/assets/img/game_logo/habanero.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/reevo.png',
      'https://shwedinker777.online/assets/img/game_logo/skywind_group.png'
    ]
    const casinos=[
      'https://shwedinker777.online/assets/img/game_logo/asia_gaming_casino.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/all_bet.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/big_gaming_casino.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/pragmatic_casino.png',
      'https://shwedinker777.online/assets/img/game_logo/yeebet.png',
      'https://shwedinker777.online/assets/img/game_logo/wm_casino.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/vivo_gaming.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/dream_gaming.png'
    ]
    const sports=[
      'https://shwedinker777.online/assets/img/game_logo/sbo_sport.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/ug_sport.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/ibc.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/ssport.jpeg'
    ]
    const fishes=[
      'https://shwedinker777.online/assets/img/game_logo/cq_9_fishing.jpeg',
      'https://shwedinker777.online/assets/img/game_logo/joker_fishing.jpeg'
    ]
  return (
    <div className='my-2'>
      <div className="homeTabs d-flex align-items-center gap-3" style={{overflowX:'scroll'}}>
        {homeTabs.map((item,index)=>{
            return <div  onClick={()=>setSelectedTab(item.value)} key={index} className={`cursor-pointer d-flex align-items-center ${selectedTab===item.value ? 'activeHomeTab' :''} `}>
                <img src={item.img} />
                <small style={{textWrap:'nowrap'}}>{item.name}</small>
            </div>
        })}
      </div>
      <SearchInput/>
      <div className="my-2 px-2">
        {selectedTab==='all' && <div>
          <h5 className='mt-2'>Slots</h5>
          <div className="row">
            {slots.map((slot)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={slot}  />
              </div>
            })}
          </div>
          <h5 className='mt-2'>Live Casinos</h5>
          <div className="row">
            {casinos.map((casino)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={casino}  />
              </div>
            })}
          </div>
          <h5 className='mt-2'>Sports</h5>
          <div className="row">
            {sports.map((sport)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={sport}  />
              </div>
            })}
          </div>
          <h5 className='mt-2'>Fishing</h5>
          <div className="row">
            {fishes.map((fish)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={fish}  />
              </div>
            })}
          </div>
        </div> }
        {selectedTab==='slots' && <div>
          <h5 className='mt-2'>Slots</h5>
          <div className="row">
            {slots.map((slot)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={slot}  />
              </div>
            })}
          </div>
         </div> }
         {selectedTab==='casinos' && <div>
          <h5 className='mt-2'>Live Casinos</h5>
          <div className="row">
            {casinos.map((casino)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={casino}  />
              </div>
            })}
          </div>
         </div> }
         {selectedTab==='sports' && <div>
           <h5 className='mt-2'>Sports</h5>
          <div className="row">
            {sports.map((sport)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={sport}  />
              </div>
            })}
          </div>
           
        </div> }
        {selectedTab==='fishing' && <div>
           <h5 className='mt-2'>Fishing</h5>
          <div className="row">
            {fishes.map((fish)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={fish}  />
              </div>
            })}
          </div>
        </div> }
      </div>
      

    </div>
  )
}

export default HomeTabs
