import { Box, Container, Skeleton, Typography, useMediaQuery } from "@mui/material"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from "@emotion/react";
import { NavBar } from "../../components/navbar/NavBar";
import { Footer } from "../../components/footer/Footer";
import { useState } from "react";
import { Faqpa } from "../../components/faqpa/Faqpa";


export const ProntoAtendimento = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'} />

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
              <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%'
              }}>
                {!imageLoaded && ( // Renderiza o Skeleton se a imagem não estiver carregada
                  <Box sx={{ height: '600px' }}>
                    <Skeleton variant="rectangular" sx={{ bgcolor: '#E1FF7B' }} animation='wave' width="100%" height="100%" />
                  </Box>

                )}
                <img
                  src="images/prontoatendimento/foto1.png"
                  style={{ width: '100%', height: '100%', display: imageLoaded ? 'block' : 'none' }}
                  onLoad={() => setImageLoaded(true)} // Define imageLoaded como true quando a imagem é carregada
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '70%',
                    transform: 'translate(-50%, -50%)',

                  }}
                >



                  {imageLoaded && (
                    <>

                      <Box sx={{ display: 'flex',justifyContent:'flex-end'}}>
                        <img src="images/prontoatendimento/logopa.png" width='100%' height='100%' />
                      </Box>

                      <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>A qualquer hora, do dia e da noite, pode contar com nosso atendimento de emergência<span style={{ fontWeight: 'bolder'}}><br/>Ligue (92) 2126-0650</span>
                      </Typography>
                    </>
                  )}
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
              <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%'
              }}>
                {!imageLoaded && ( // Renderiza o Skeleton se a imagem não estiver carregada
                  <Box sx={{ height: '600px' }}>
                    <Skeleton variant="rectangular" sx={{ bgcolor: '#E1FF7B' }} animation='wave' width="100%" height="100%" />
                  </Box>

                )}
                <img
                  src="images/prontoatendimento/foto_mobile1.png"
                  style={{ width: '100%', height: '100%', display: imageLoaded ? 'block' : 'none' }}
                  onLoad={() => setImageLoaded(true)} // Define imageLoaded como true quando a imagem é carregada
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '89%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80%'
                  }}
                >

                  <Box sx={{ width: '100%', height: '100px' }}>
                    <img src="images/prontoatendimento/logopa.png" width='100%' height='100%' />
                  </Box>



                </Box>
              </Box>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}
      </Swiper>
      <Box sx={{ height: { xs: '800px', md: '420px' }, background: 'linear-gradient(to bottom, #A60069 50%, #f1f1f1 50%)' }}>
        <Container>
          <Box>
            <Typography sx={{ pt: 6, color: '#fff', textAlign: 'center', fontSize: '28px', fontStyle: 'italic' }}>Se seu cartão de crédito venceu, foi furtado ou roubado, <span style={{ fontWeight: 'bold' }}>altere os dados para um novo cartão</span></Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 8 }}>
            <Box sx={{ backgroundImage: 'url("/images/pagamentoscartoes/link1.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: { xs: '100%', md: '260px' } }}>

              <Box sx={{ p: 3 }}>
                <Typography sx={{ fontStyle: 'italic', fontSize: '20px', width: '210px', color: '#fff' }}>Beneficiário Uniodonto, para ter acesso ao Pronto Atendimento 24 horas, basta apresentar seu Cartão Digital e documento oficial com foto na recepção</Typography>
              </Box>

            </Box>
            <Box sx={{ backgroundImage: 'url("/images/pagamentoscartoes/link2.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '100%', height: { xs: '100%', md: '260px' } }}>

              <Box sx={{ p: 3 }}>
                <Typography sx={{ fontStyle: 'italic', fontSize: '20px', width: '210px', color: '#fff' }}>Não sabe como chegar?
                  Clique aqui para acessar nossa localização através do Google Maps</Typography>
              </Box>

            </Box>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '28px', color: '#363636', my: 5, fontStyle: 'italic', textAlign: 'center' }}>Acesse nosso Pronto Atendimento<span style={{ fontWeight: 'bolder' }}> através da entrada do
              Hospital Beneficente Português pela Rua 24 de Maio - Centro</span></Typography>
          </Box>
        </Container>
        <Faqpa/>
        <Footer />
      </Box>
    </>
  )
}