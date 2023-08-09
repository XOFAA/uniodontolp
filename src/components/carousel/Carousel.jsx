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
       <Box sx={{mt:8,bgcolor:'#f1f1f1'}}>
   <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        slidesPerView={1}
      
     
        scrollbar={{ draggable: true }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      
      >
     
        
        <SwiperSlide><img src="images/topslide/foto1.png" style={{width:'100%',height:'100%'}}/></SwiperSlide>
   
        <SwiperSlide><img src="images/topslide/foto2.png" style={{width:'100%',height:'100%'}}/></SwiperSlide>
      

        <SwiperSlide><img src="images/topslide/foto3.png" style={{width:'100%',height:'100%'}}/></SwiperSlide>      
  
     
      </Swiper>
      
       </Box>
     
    );
  };
  