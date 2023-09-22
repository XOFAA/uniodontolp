import React from 'react';
import {Box,Button,Container, Typography} from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const NossosBeneficios =()=>{
    const numParcerias = 6;
  const parcerias = Array.from({ length: numParcerias }, (_, index) => `/images/nossosbeneficios/link${index + 1}.png`);
    return(
        <>
        <Box  className="CarouselParcerias"  sx={{mt:5,height:'100%'}}>
            <Box sx={{display:'flex',bgcolor:'#A60069',p:4}}>
             

            <Container>

            <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
            <Typography sx={{fontStyle:'italic',fontSize:'28px',color:'#fff'}}>Junte-se a nós e faça a diferença!</Typography>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',fontWeight:'bolder',color:'#fff'}}>A Uniodonto Manaus espera por você!</Typography>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',color:'#fff',my:3}}>Estamos em busca de novos talentos para se juntarem a nós. Se você é apaixonado pelo que faz, valoriza um ambiente de trabalho colaborativo e deseja fazer a diferença, seja nosso Colaborador! Preencha o formulário abaixo e venha fazer parte de nosso time dedicado e comprometido com as pessoas.</Typography>
            </Box>
            </Container>
            </Box>
        <Container>
      
            <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222',pt:5}}>
            Nossos  <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#222222' }}> Benefícios</span> 
            </Typography>
   
            
    
        <Box>
  
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
           </Box>

    
           <Box sx={{display:'flex',alignItems:'center',mt:5,boxShadow:5,p:5,borderRadius:'10px'}}>
            <Box sx={{display:'flex',flexDirection:'column',textAlign:'start'}}>
           <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Participe</span> do Banco de Talentos</Typography> 
            <Typography sx={{color:'#363636',fontSize:'20px',fontStyle:'italic'}}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação por parte dos conselhos diretivos</Typography>
            </Box>
           <Button variant='contained' sx={{textTransform:'none',height:'124px',width:'370px',borderRadius: '10px', bgcolor: '#A60069'}}>
           <img src='images/nossosbeneficios/icon1.png' style={{marginLeft:'30px'}}/>
            <Typography sx={{fontSize:'22px',fontStyle:'italic',textAlign:'center'}}>Conheça vagas <span style={{fontWeight:'bolder',fontSize:'27px'}}>Disponíveis</span></Typography>
           </Button>
         
       
        </Box>

          
    
           </Container>
            </Box>
            
 </>
 
    )
}