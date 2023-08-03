import React from 'react';
import {Box, Container} from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carousel = () => {
    return (
       <Box sx={{mt:8}}>
   <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        slidesPerView={1}
      
     
        scrollbar={{ draggable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
     
        
        <SwiperSlide><img src="/TopSlide/foto1.png" style={{width:'100%',height:'100%'}}/></SwiperSlide>
   
        <SwiperSlide><img src="/TopSlide/foto2.png" style={{width:'100%',height:'100%'}}/></SwiperSlide>
      

        <SwiperSlide><img src="/TopSlide/foto1.png" style={{width:'100%',height:'100%'}}/></SwiperSlide>      
  
     
      </Swiper>
      
       </Box>
     
    );
  };
  