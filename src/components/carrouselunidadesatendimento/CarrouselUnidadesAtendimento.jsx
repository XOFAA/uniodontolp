import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Container } from '@mui/material';
import './CarrouselUnidadesAtendimento.css';

export const CarrouselUnidadesAtendimento = ()=>{
    return(
      <Box className="CarouselDiretores"  sx={{mt:10}}>
              <Container>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}

      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween:250
        },
        400:{
          slidesPerView: 1,
          spaceBetween:-105
        },
        600:{
          slidesPerView: 2,
          spaceBetween:-50
        },
        900: {
          slidesPerView: 3,
          spaceBetween:100
         
        },
        1200: {
          slidesPerView: 4,
          
        },
        1536:{
          slidesPerView: 4,
        }
      }} 
    
     
        
    
    >
      <SwiperSlide>
        <Box sx={{width:'260px',height:'510px'}}>
        <img src='images/carrouselunidadedeatenimentos/link1.png'/>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{width:'260px',height:'510px'}}>
        <img src='images/carrouselunidadedeatenimentos/link2.png'/>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{width:'260px',height:'510px'}}>
        <img src='images/carrouselunidadedeatenimentos/link3.png'/>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box sx={{width:'260px',height:'510px'}}>
        <img src='images/carrouselunidadedeatenimentos/link4.png'/>
        </Box>
      </SwiperSlide>
  
    </Swiper>
    </Container>
    </Box>
    )
}