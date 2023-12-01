import { Box, Typography } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SwiperCpd =()=>{
    const numParcerias = 6;
    const parcerias = Array.from({ length: numParcerias }, (_, index) => `/images/cpd/link${index + 1}.png`);
    return(
        <>
         
        <Box className="CarouselParcerias" sx={{py:3}}>
  
        <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={10}
           grabCursor
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
             breakpoints={{
                0: {
                  slidesPerView: 1,
                 
                },
                400:{
                  slidesPerView: 2,
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
          
           

        <SwiperSlide >
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'160px',height:'160px',borderRadius:'10px',bgcolor:'#363636'}}>
            <Typography sx={{fontSize:'16px',color:'#fff',fontWeight:'bold',fontStyle:'italic'}}>Responsabilidade</Typography>
          </Box>
        </SwiperSlide>
    
        <SwiperSlide >
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'160px',height:'160px',borderRadius:'10px',bgcolor:'#363636'}}>
            <Typography sx={{fontSize:'16px',color:'#fff',fontWeight:'bold',fontStyle:'italic'}}>Ética</Typography>
          </Box>
        </SwiperSlide>
        
        <SwiperSlide >
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'160px',height:'160px',borderRadius:'10px',bgcolor:'#363636'}}>
            <Typography sx={{fontSize:'16px',color:'#fff',fontWeight:'bold',fontStyle:'italic'}}>Sustentabilidade</Typography>
          </Box>
        </SwiperSlide>
        
        <SwiperSlide >
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'160px',height:'160px',borderRadius:'10px',bgcolor:'#363636'}}>
            <Typography sx={{fontSize:'16px',color:'#fff',fontWeight:'bold',fontStyle:'italic'}}>Compromisso</Typography>
          </Box>
        </SwiperSlide>
        
        <SwiperSlide >
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'160px',height:'160px',borderRadius:'10px',bgcolor:'#363636'}}>
            <Typography sx={{fontSize:'16px',color:'#fff',fontWeight:'bold',fontStyle:'italic'}}>Respeito</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide >
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'160px',height:'160px',borderRadius:'10px',bgcolor:'#363636'}}>
            <Typography sx={{fontSize:'16px',color:'#fff',fontWeight:'bold',fontStyle:'italic'}}>Cooperação</Typography>
          </Box>
        </SwiperSlide>
        

           </Swiper>
           </Box>
        </>
    )
}