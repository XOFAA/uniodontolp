import React from 'react';
import {Box, Card, CardMedia, Container, Typography} from '@mui/material';
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

export const CarouselAcessoRapido = ()=>{
    return(
        <Box sx={{bgcolor:'#f1f1f1',height:'350px'}}>
            <Container>
    

        <Typography sx={{textAlign:'center',fontSize:'40px',fontWeight:'bolder',color:'#363636',my:5}}>Acesso Rapido</Typography>
        <Box>

   
        <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y,]}
            spaceBetween={45}
             breakpoints={{
                0: {
                  slidesPerView: 2,
                 
                },
                768: {
                  slidesPerView: 4,
                 
                },
                1024: {
                  slidesPerView: 6,
                  
                },
              }}    
             navigation
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
           >
          
             <Box sx={{ml:'auto'}}>

       
             <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><FmdGoodIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Encontre um dentista</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><RequestQuoteIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Segunda via de Boleto</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><FmdGoodIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Pronto atendimento</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><ExitToAppIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Acessar Área Beneficiário</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><FmdGoodIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Canais de Atendimento</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><MonetizationOnIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Renegociar Débitos</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><FmdGoodIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Encontre um dentista</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><RequestQuoteIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Segunda via de Boleto</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><FmdGoodIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Pronto atendimento</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><ExitToAppIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Acessar Área Beneficiário</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><FmdGoodIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Canais de Atendimento</Typography>
                </Card>
                </SwiperSlide>

                <SwiperSlide>
                <Card sx={{height:'130px',width:'120px',p:1,boxShadow:3,bgcolor:'#A60069',borderRadius:3}}>
                <CardMedia sx={{textAlign:'end'}}><MonetizationOnIcon sx={{color:'#fff',fontSize:'50px'}}/></CardMedia>
               <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Renegociar Débitos</Typography>
                </Card>
                </SwiperSlide>
               
                </Box>
           </Swiper>
           </Box>
           </Container>
           
            </Box>
    )
}