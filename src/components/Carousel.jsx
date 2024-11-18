import React from 'react'
import b1 from '../assets/img/banner1.png'
import b2 from '../assets/img/banner2.png'
import b3 from '../assets/img/banner3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Carousel = () => {
    const banners=[b1,b2,b3]
  return (
    <Swiper
    // spaceBetween={50}
    slidesPerView={1}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
  >
    {banners && banners.map((banner,index)=>{
        return  <SwiperSlide key={index} className='cursor-pointer'>
            <img className='bannerImg w-100 rounded-3' src={banner} />
        </SwiperSlide>

    })}
    </Swiper>
  )
}

export default Carousel
