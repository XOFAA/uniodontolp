import React from 'react';
import {Box, Card, CardMedia, Container, Link, Typography} from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export const ObjetivosEsg = ()=>{

    const ObjetivoEsgImages =[
      {
        
        icon:<img src='images/esg/link1.png'/>,

        link:'https://brasil.un.org/pt-br/sdgs/1'
      },
      {
        
        icon:<img src='images/esg/link2.png'/>,
        texto:'Segunda Via de Boleto',
        link:'https://brasil.un.org/pt-br/sdgs/2'
      },
      {
        
        icon:<img src='images/esg/link3.png'/>,
   
        link:'https://brasil.un.org/pt-br/sdgs/3'
      },
      {
        
        icon:<img src='images/esg/link4.png'/>,
   
        link:'https://brasil.un.org/pt-br/sdgs/4'
      },
      {
        
        icon:<img src='images/esg/link5.png'/>,
    
        link:'https://brasil.un.org/pt-br/sdgs/5'
      },
      {
        
        icon:<img src='images/esg/link6.png'/>,
    
        link:'https://brasil.un.org/pt-br/sdgs/6'
      },
      {
        
        icon:<img src='images/esg/link7.png'/>,

        link:'https://brasil.un.org/pt-br/sdgs/7'
      },
      {
        
        icon:<img src='images/esg/link8.png'/>,
    
        link:'https://brasil.un.org/pt-br/sdgs/8'
      },
      {
        
        icon:<img src='images/esg/link9.png'/>,
      
        link:'https://brasil.un.org/pt-br/sdgs/9'
      },
      {
        
        icon:<img src='images/esg/link10.png'/>,

        link:'https://brasil.un.org/pt-br/sdgs/10'
      },
      {
        
        icon:<img src='images/esg/link11.png'/>,
      
        link:'https://brasil.un.org/pt-br/sdgs/11'
      },
      {
        
        icon:<img src='images/esg/link12.png'/>,
    
        link:'https://brasil.un.org/pt-br/sdgs/12'
      },
      {
        
        icon:<img src='images/esg/link13.png'/>,
   
        link:'https://brasil.un.org/pt-br/sdgs/13'
      },
      {
        
        icon:<img src='images/esg/link14.png'/>,
 
        link:'https://brasil.un.org/pt-br/sdgs/14'
      },
      {
        
        icon:<img src='images/esg/link15.png'/>,
     
        link:'https://brasil.un.org/pt-br/sdgs/15'
      },
      {
        
        icon:<img src='images/esg/link16.png'/>,
  
        link:'https://brasil.un.org/pt-br/sdgs/16'
      },
      {
        
        icon:<img src='images/esg/link17.png'/>,
    
        link:'https://brasil.un.org/pt-br/sdgs/17'
      }
    ]
    return(



          <Box  className="carouselAcessoRapido"  sx={{bgcolor:'#f1f1f1',height:'340px'}}>
            <Container>
    


            <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222',pt:5}}>
            Acesso 
        <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#363636' }}> Rápido</span> 
        </Typography>
        <Box>

   
        <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={45}
           
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
             breakpoints={{
                0: {
                  slidesPerView: 1,
                 
                },
                400:{
                  slidesPerView: 2
                },
                600:{
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 5,
                 
                },
                1200: {
                  slidesPerView: 6,
                  
                },
                1536:{
                  slidesPerView: 6,
                }
              }}    
             navigation
           pagination
             
           >
          
           

       {ObjetivoEsgImages.map((images,index)=>(

      <SwiperSlide key={index}>
        <Link href={images.link} target='_blank'>
            {images.icon}
              </Link>
            </SwiperSlide>
  ))}
           
               
               
           </Swiper>
           </Box>
           </Container>
           
            </Box>
    )
}