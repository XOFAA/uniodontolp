import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
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
              <img src="images/topslide/foto1.png" style={{ width: '100%', height: '100%' }} />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}

        {/* Mobile Images */}
        {isMobile && (
          <>
            <SwiperSlide>
              <img src="images/topslide/mobile_foto1.png" style={{ width: '100%', height: '100%' }} />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}
      </Swiper>

      {/* BotoesPlanos no posicionamento absoluto */}
      <Box
        sx={{
          position: 'absolute',
          bottom:-40,
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
