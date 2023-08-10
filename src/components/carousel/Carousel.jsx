import React from 'react';
import {Box, Container, useMediaQuery} from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@emotion/react';

export const Carousel = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ mt: 8, bgcolor: '#f1f1f1' }}>
            <Swiper
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {/* Desktop Images */}
                {!isMobile && (
                    <>
                        <SwiperSlide><img src="images/topslide/foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        <SwiperSlide><img src="images/topslide/foto2.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        <SwiperSlide><img src="images/topslide/foto3.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                    </>
                )}

                {/* Mobile Images */}
                {isMobile && (
                    <>
                        <SwiperSlide><img src="images/topslide/mobile_foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        <SwiperSlide><img src="images/topslide/mobile_foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        <SwiperSlide><img src="images/topslide/mobile_foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                    </>
                )}
            </Swiper>
        </Box>
    );
};