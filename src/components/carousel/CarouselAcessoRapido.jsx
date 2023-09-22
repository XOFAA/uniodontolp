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
import './CarouselAcessoRapido.css';

export const CarouselAcessoRapido = ()=>{

    const acessorapido =[
      {
        
        icon:<img src='images/carrouselmenu/link1.svg'/>,
        texto:'Encontre um Dentista',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link2.svg'/>,
        texto:'Segunda Via de Boleto',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link3.svg'/>,
        texto:'Pronto Atendimento',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link4.svg'/>,
        texto:'Acesso Portal Pessoa Física',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link5.svg'/>,
        texto:'Canais de Atendimento',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link6.svg'/>,
        texto:'Renegociar Débitos',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link7.svg'/>,
        texto:'Informe de Rendimentos',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link8.svg'/>,
        texto:'Happy Clube de Vantagens',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link9.svg'/>,
        texto:'Guia Nacional Uniodonto',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link10.svg'/>,
        texto:'O Que o Dentista Disse?',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link11.svg'/>,
        texto:'Acesso Portal Pessoa Jurídica',
        link:'#'
      },
      {
        
        icon:<img src='images/carrouselmenu/link12.svg'/>,
        texto:'Outras Uniodontos',
        link:'#'
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
            spaceBetween={35}
           
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
          
           

       {acessorapido.map((menu,index)=>(

      <SwiperSlide key={index}>
        <Link href='#'>
     
              <Card  sx={{ height: '130px', width: '120px', p: 1, boxShadow: 3, bgcolor: '#A60069', borderRadius: 3 }}>
                <CardMedia sx={{ textAlign: 'end' }}>
                  {menu.icon}
                </CardMedia>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#fff', mt: 3 }}>{menu.texto}</Typography>
              </Card>
              </Link>
            </SwiperSlide>
  ))}
           
               
               
           </Swiper>
           </Box>
           </Container>
           
            </Box>
    )
}