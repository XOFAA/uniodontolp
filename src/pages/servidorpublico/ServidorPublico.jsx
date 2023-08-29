import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@emotion/react';
import { VantagensBeneficio } from '../../components/vantagensbeneficio/VantagensBeneficios';
import { NavBar } from '../../components/navbar/NavBar';

export const ServidorPublico=()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <>
       
       <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'}/>
             <Box sx={{ position: 'relative', bgcolor: '#f1f1f1'}}>
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
              <img src="images/servidorpublico/foto1.png" style={{ width: '100%', height: '100%' }} />
              <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '70%',
              transform: 'translate(-50%, -50%)',
           
            }}
          >
          
            <Typography sx={{fontStyle:'italic', fontSize:'2.6vw',textAlign:'end',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Servidor público</span>, seu<br/>sorriso e de sua família<br/>aqui é único!</Typography>
       
         
            <Typography sx={{fontStyle:'italic',fontSize:'1.3vw',textAlign:'end',color:'#A60069'}}>A Uniodonto Manaus oferece uma condição especial para servidores públicos da Prefeitura de Manaus e Governo do Estado do Amazonas</Typography>
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
              <img src="images/servidorpublico/foto1.png" style={{ width: '100%', height: '100%' }} />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}
      </Swiper>
    </Box>
        <VantagensBeneficio/>
        <Container>
        <Box sx={{display:'flex',mt:5}}>
           <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069',textAlign:'center'}}><span style={{fontWeight:'bold'}}>Para saber mais informações</span>, fale com um consultor ou clique no botão ao lado</Typography> 
       
           <Button variant='contained' sx={{p:4,width:'350px',borderRadius: '10px', bgcolor: '#107E75'}}>
         
           <img src='images/pessoajuridica/icon-wpp.png'/>
           
            <Typography sx={{fontSize:'22px',fontStyle:'italic'}}>  Fale com um <span style={{fontWeight:'bolder'}}>CONSULTOR</span></Typography>
           </Button>
         
       
        </Box>
        </Container>
        </>
    )
}