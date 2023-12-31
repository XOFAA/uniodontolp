import React, { useState } from 'react';
import { Box, Typography, useMediaQuery,Skeleton  } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@emotion/react';
import { BotoesPlanos } from '../botoesplanos/BotoesPlanos';
import './Carousel.css';
export const Carousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box  sx={{position: 'relative', bgcolor: '#f1f1f1',mb:10}}>
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {/* Desktop Images */}
        {!isMobile && (
          <>
        <SwiperSlide>
            <Box  sx={{
            position: 'relative',
            width: '100%',
            height:'100%'
          }}> 
              
           
              <img
                src="images/topslide/foto1.png"
                style={{ width: '100%', height: '100%' }}
               
              />
              
              <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '70%',
              transform: 'translate(-50%, -50%)',
           
            }}
          >
            
          
         
             
              <Typography sx={{fontStyle:'italic', fontSize:'2.6vw',textAlign:'end',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Bem-vindo</span> ao Maior Sistema de Cooperativas Odontológicas do Mundo. </Typography>
       
              <Typography sx={{fontStyle:'italic',fontSize:'1.3vw',textAlign:'end',color:'#A60069'}}>Aqui, você encontra o plano odontológico ideal para você, sua família e seus colaboradores, com qualidade, solidez e confiança que temos há 35 anos.</Typography>
           
          </Box>
              </Box>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}

        {/* Mobile Images */}
        {isMobile && (
          <>
            <SwiperSlide>
          
             
             <img
                src="images/topslide/mobile_foto1.png"
                style={{ width: '100%', height: '100%' }}
              
              />
            </SwiperSlide>
      
          </>
        )}
      </Swiper>

      <Box
        sx={{
          position: 'absolute',
          bottom:{xs:-130,sm:-40},
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          
        }}
      >
      
        <BotoesPlanos />
      
    
      </Box>
    </Box>
  );
};
