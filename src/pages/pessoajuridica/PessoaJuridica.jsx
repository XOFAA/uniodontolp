import React from 'react';
import {Box, Button, Container, Typography, useMediaQuery} from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@emotion/react';
import { NavBar } from '../../components/navbar/NavBar';
import { Parcerias } from '../../components/parcerias/Parcerias';
import { VantagensBeneficio } from '../../components/vantagensbeneficio/VantagensBeneficios';

export const PessoaJuridica = () => {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box sx={{ mt: 8, bgcolor: '#f1f1f1' }}>
              <NavBar/>
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
                        <SwiperSlide><img src="images/pessoajuridica/foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                       
                    </>
                )}

                {/* Mobile Images */}
                {isMobile && (
                    <>
                        <SwiperSlide><img src="images/topslide/mobile_foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        <SwiperSlide><img src="images/topslide/mobile_foto2.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                        <SwiperSlide><img src="images/topslide/mobile_foto3.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>
                    </>
                )}
            </Swiper>
            </Box>
            <Container>
            <Box sx={{mt:5,display:'flex',flexDirection:'column',gap:3}}>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069',textAlign:'center'}}>Enquanto você se dedica em sua empresa ou negócio, <span style={{fontStyle:'italic',fontWeight:'bold'}}>nós cuidamos dos sorrisos e da saúde bucal de seus colaboradores</span></Typography>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',textAlign:'center',color:'#363636'}}>A Uniodonto Manaus oferece benefícios e serviços personalizados, garantindo o bem-estar dos seus colaboradores, além de proporcionar gestão e contratação dos nossos planos sem burocracia e sob medida para o tamanho de sua empresa ou negócio.</Typography>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',textAlign:'center',color:'#363636'}}>Além de cobertura completa, conte com a maior rede de atendimento em odontologia do Brasil, aprovação online de procedimentos, planos com atendimento local e/ou nacional, além de muitos outros benefícios. Aqui, sua empresa ou negócio tem atendimento personalizado e seus colaboradores e familiares contarão com tratamentos de qualidade.
            </Typography>
            <Typography sx={{ fontStyle: 'italic', fontSize: '20px', textAlign: 'center', color: '#363636', fontWeight: 'bold' }}>
                 Faça sua proposta de adesão ou fale com um consultor para que você tenha um plano odontológico adequado ao seu tipo de negócio e necessidade de seus colaboradores.{' '}
                         <span style={{ color: '#A60069',fontWeight:'bold',fontSize:'20px',fontStyle:'italic' }}>Aqui, o seu sorriso é único.</span>
                 </Typography>
                 <Box sx={{textAlign:'center'}}>                 
                 <Button variant='contained' sx={{width:'220px',height:'50px',borderRadius:'5px'}}>Solicite uma Proposta</Button>
                 </Box>
            </Box>
            </Container>
            <Parcerias/>
            <VantagensBeneficio/>
            </>
     
    );
};