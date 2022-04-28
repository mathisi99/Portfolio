import React from 'react'
import "./testimonials.css"

import Testimonial from './Testimonial'
import {Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { testimonialData } from '../../myInformation';
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={40}
        slidesPerView={1}
        navigation={{clickable: true}}
        pagination={{clickable: true}}
        scrollbar={{draggable: true}}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonialData.map(obj => {
          return ( 
            <SwiperSlide>
              <Testimonial avatar={obj.avatar} name={obj.name} content={obj.content} />
            </SwiperSlide>
          )
        })}
        
      </Swiper>
        
    </section>
  )
}

export default Testimonials