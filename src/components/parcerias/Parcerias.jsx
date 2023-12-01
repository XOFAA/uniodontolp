import React from 'react';
import {Box,Container, Typography} from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CarouselParcerias.css'

export const Parcerias = ()=>{
  const numParcerias = 24;
  const parcerias = Array.from({ length: numParcerias }, (_, index) => `/images/parcerias/link${index + 1}.png`);
    return(
      

        <Box  className="CarouselParcerias"  sx={{width:'100%',mt:5,bgcolor:'#60EBFF',height:{xs:'100%',md:'300px'}}}>
         
    


            <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222',pt:5}}>
            Veja os parceiros que estão  <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#222222' }}> Sorrindo</span>  com a gente
       
        </Typography>
        <Box >

        <Container>
        <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={10}
           
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
             breakpoints={{
                0: {
                  slidesPerView: 1,
                 
                },
                400:{
                  slidesPerView: 1,
                },
                600:{
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 4,
                 
                },
                1200: {
                  slidesPerView: 5,
                  
                },
                1536:{
                  slidesPerView: 5,
                }
              }}    
             navigation
              loop={true}
             
           >
          
           

          {parcerias.map((parceria, index) => (
        <SwiperSlide key={index}>
          <Box>
            <img src={parceria} alt={`Parceria ${index + 1}`} />
          </Box>
        </SwiperSlide>
      ))}
            

              
               
               
           </Swiper>
           </Container>
           </Box>
        
           
            </Box>
     
    )
}