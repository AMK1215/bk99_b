import React, { useState } from 'react'
import all from '../assets/img/all.png'
import hot from '../assets/img/hot.png'
import slot from '../assets/img/slots.png'
import casino from '../assets/img/casino.png'
import sport from '../assets/img/sport.png'
 import fish from '../assets/img/fish.png'
import SearchInput from './SearchInput'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
 import { casinoAllGames, casinoGames, fishAllGames, fishGames, slotAllGames, slotGames, sportAllGames, sportGames } from '../const/data'
import { useNavigate, useSearchParams } from 'react-router-dom'

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
    
  return (
    <div className='my-2'>
      <div className="homeTabs d-flex align-items-center gap-3" style={{overflowX:'scroll'}}>
        {homeTabs.map((item,index)=>{
            return <div  onClick={()=>setSelectedTab(item.value)} key={index} className={`cursor-pointer d-flex align-items-center ${selectedTab===item.value ? 'activeHomeTab' :''} `}>
                <img src={item.img} className='typeIcon' />
                <small className='typeName' style={{textWrap:'nowrap'}}>{item.name}</small>
            </div>
        })}
      </div>
      <SearchInput/>
      <div className="my-2 px-2">
        {selectedTab==='all' && <div>
          <h5 className='mt-2'>Slots</h5>
          <div className="row">
            {slotAllGames.map((slot)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={slot.img}  />
              </div>
            })}
          </div>
          <h5 className='mt-2'>Live Casinos</h5>
          <div className="row">
            {casinoAllGames.map((casino)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={casino.img}  />
              </div>
            })}
          </div>
          <h5 className='mt-2'>Sports</h5>
          <div className="row">
            {sportAllGames.map((sport)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={sport.img}  />
              </div>
            })}
          </div>
          <h5 className='mt-2'>Fishing</h5>
          <div className="row">
            {fishAllGames.map((fish)=>{
              return <div className='col-4 mb-2 col-md-3 col-lg-2 p-1 p-sm-2'>
                 <img className=' img-fluid gameImg'  src={fish.img}  />
              </div>
            })}
          </div>
        </div> }
        <div className="pt-2 pb-5 mb-5">
        {selectedTab==='slots' && <SlotsTab/> }
        {selectedTab==='casinos' && <CasinoTab/> }
        {selectedTab==='sports' && <SportTab/> }
        {selectedTab==='fishing' && <FishTab/> }
        </div>
         
      </div>
      

    </div>
  )
}

export default HomeTabs

const SlotsTab=()=>{
  const [activeProvider,setActiveProvider]=useState(slotGames[0].providerName)
  const selectedGames=slotGames.filter((item)=>item.providerName===activeProvider)[0].games;
    return <div>
  <h5 className='mt-2'>Slots</h5>
 <Swiper className="mySwiper mt-3 w-full "
    breakpoints={{
    0: {
      slidesPerView: 5,
    },
    400:{
      slidesPerView:6,
    },
     865:{
      slidesPerView:9
    },
    1000:{
      slidesPerView:14
    },
    
  }}
   >
          {slotGames.map((list, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  setActiveProvider(list.providerName )
                 }}
                key={index}
              >
                <div
                  className={`providerBtn ${
                    activeProvider === list.providerName
                      ? "activeGameList"
                      : "" 
                   }
               ${index === 0 && "gameListStart"}
                ${index === slotGames.length - 1 && "gameListEnd"}
                  cursor-pointer text-center fw-semibold py-1 px-0  px-sm-2    gameProvider text-nowrap`}
                >
                  {list.providerName}{" "}
                </div>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
  <div className="row mt-4">
    {selectedGames.map((item)=>{
      return <div className='col-4 mb-2 col-sm-3 col-lg-2 p-1 p-sm-2'>
         <img className=' img-fluid gameImg'  src={item.img}  />
      </div>
    })}
  </div>
 </div>
}
const CasinoTab=()=>{
  const [activeProvider,setActiveProvider]=useState(casinoGames[0].providerName)
  const selectedGames=casinoGames.filter((item)=>item.providerName===activeProvider)[0].games;
    return <div>
  <h5 className='mt-2'>Live Casinos</h5>
 <Swiper className="mySwiper mt-3 w-full "
    breakpoints={{
    0: {
      slidesPerView: 5,
    },
    400:{
      slidesPerView:6,
    },
     865:{
      slidesPerView:9
    },
    1000:{
      slidesPerView:14
    },
    
  }}
   >
          {casinoGames.map((list, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  setActiveProvider(list.providerName )
                 }}
                key={index}
              >
                <div
                  className={`providerBtn ${
                    activeProvider === list.providerName
                      ? "activeGameList"
                      : "" 
                   }
               ${index === 0 && "gameListStart"}
                ${index === casinoGames.length - 1 && "gameListEnd"}
                  cursor-pointer text-center fw-semibold py-1 px-0  px-sm-2    gameProvider text-nowrap`}
                >
                  {list.providerName}{" "}
                </div>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
  <div className="row mt-4">
    {selectedGames.map((item)=>{
      return <div className='col-4 mb-2 col-sm-3 col-lg-2 p-1 p-sm-2'>
         <img className=' img-fluid gameImg'  src={item.img}  />
      </div>
    })}
  </div>
 </div>
}
const SportTab=()=>{
  const [activeProvider,setActiveProvider]=useState(sportGames[0].providerName)
  const selectedGames=sportGames.filter((item)=>item.providerName===activeProvider)[0].games;
    return <div>
  <h5 className='mt-2'>Sports</h5>
 <Swiper className="mySwiper mt-3 w-full "
    breakpoints={{
    0: {
      slidesPerView: 5,
    },
    400:{
      slidesPerView:6,
    },
     865:{
      slidesPerView:9
    },
    1000:{
      slidesPerView:14
    },
    
  }}
   >
          {sportGames.map((list, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  setActiveProvider(list.providerName )
                 }}
                key={index}
              >
                <div
                  className={`providerBtn ${
                    activeProvider === list.providerName
                      ? "activeGameList"
                      : "" 
                   }
               ${index === 0 && "gameListStart"}
                ${index === sportGames.length - 1 && "gameListEnd"}
                  cursor-pointer text-center fw-semibold py-1 px-0  px-sm-2    gameProvider text-nowrap`}
                >
                  {list.providerName}{" "}
                </div>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
  <div className="row mt-4">
    {selectedGames.map((item)=>{
      return <div className='col-4 mb-2 col-sm-3 col-lg-2 p-1 p-sm-2'>
         <img className=' img-fluid gameImg'  src={item.img}  />
      </div>
    })}
  </div>
 </div>
}
const FishTab=()=>{
  const [activeProvider,setActiveProvider]=useState(fishGames[0].providerName)
  const selectedGames=fishGames.filter((item)=>item.providerName===activeProvider)[0].games;
    return <div>
  <h5 className='mt-2'>Fishing</h5>
 <Swiper className="mySwiper mt-3 w-full "
    breakpoints={{
    0: {
      slidesPerView: 5,
    },
    400:{
      slidesPerView:6,
    },
     865:{
      slidesPerView:9
    },
    1000:{
      slidesPerView:14
    },
    
  }}
   >
          {fishGames.map((list, index) => {
            return (
              <SwiperSlide
                onClick={() => {
                  setActiveProvider(list.providerName )
                 }}
                key={index}
              >
                <div
                  className={`providerBtn ${
                    activeProvider === list.providerName
                      ? "activeGameList"
                      : "" 
                   }
               ${index === 0 && "gameListStart"}
                ${index === fishGames.length - 1 && "gameListEnd"}
                  cursor-pointer text-center fw-semibold py-1 px-0  px-sm-2    gameProvider text-nowrap`}
                >
                  {list.providerName}{" "}
                </div>{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
  <div className="row mt-4">
    {selectedGames.map((item)=>{
      return <div className='col-4 mb-2 col-sm-3 col-lg-2 p-1 p-sm-2'>
         <img className=' img-fluid gameImg'  src={item.img}  />
      </div>
    })}
  </div>
 </div>
}