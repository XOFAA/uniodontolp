import { Box, Typography } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const NossosValores =()=>{
    const numParcerias = 6;
    const parcerias = Array.from({ length: numParcerias }, (_, index) => `/images/institucional/link${index + 1}.png`);
    return(
        <>
           <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222',pt:5}}>
            Nossos  <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#222222' }}> Valores</span> 
            </Typography>
        <Box className="CarouselParcerias" sx={{py:3}}>
  
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
          
           

          {parcerias.map((parceria, index) => (
        <SwiperSlide key={index}>
          <Box>
            <img src={parceria} alt={`Parceria ${index + 1}`} />
          </Box>
        </SwiperSlide>
      ))}

           </Swiper>
           </Box>
        </>
    )
}