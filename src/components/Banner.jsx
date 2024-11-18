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
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    const banners=[b1,b2,b3]
  return (
    <Carousel >
     {banners && banners.map((banner,index)=>{
        return  <Carousel.Item key={index}>
            <img className='bannerImg  rounded-3' src={banner} />
        </Carousel.Item>
     })}
    </Carousel>
  )
}

export default Banner
