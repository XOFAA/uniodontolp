import React, { useState } from 'react';
import { Box, Button, Container, Skeleton, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from '@emotion/react';
import { NavBar } from '../../components/navbar/NavBar';
import TawkToChatbot from '../../config/TawkToChatbot';
import { Faqsp } from '../../components/faqsp/Faqsp';
import { Footer } from '../../components/footer/Footer';
import AppWithPreloader from '../../components/appwithpreloader/AppWithPreloader';

export const ServidorPublico=()=>{
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [imageLoaded, setImageLoaded] = useState(false);
    return(
        <AppWithPreloader>

   
       <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'}/>
       <TawkToChatbot/>
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
           
              <img
                src="images/servidorpublico/foto1.png"
                style={{ width: '100%', height: '100%' }}
              />
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
            <Box  sx={{
            position: 'relative',
            width: '100%',
            height:'100%'
          }}> 
             <img
                src="images/servidorpublico/foto1_mobile.png"
                style={{ width: '100%', height: '100%' }}
              />
              <Box
            sx={{
              position: 'absolute',
              top: '90%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
                width:'60%'
            }}
          >
            <Typography sx={{fontStyle:'italic', fontSize:'7vw',textAlign:'center',color:'#A60069',width:'100%'}}><span style={{fontWeight:'bold'}}>Planos</span> para servidor público</Typography>
          </Box>
              </Box>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}
      </Swiper>
    </Box>
  
    <Box sx={{ height: '420px', background: 'linear-gradient(to bottom, #A60069 50%, #f1f1f1 50%)' }}>
                    <Container>
                        <Box>
                            <Typography sx={{ pt: 6, fontSize: '28px', fontStyle: 'italic', textAlign: 'center', color: '#fff' }}><span style={{ fontWeight: 'bold' }}>Vantagens e Benefícios</span> que oferecemos à sua disposição</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 8 }}>
                            <Box sx={{ backgroundImage: 'url("/images/servidorpublico/link1.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Acesso a mais de 200 dentistas localizados em todas as regiões de Manaus, com especialidades desde tratamentos simples até cirurgias mais complexas</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ backgroundImage: 'url("/images/servidorpublico/link2.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Prontuário online de procedimentos, com todo o histórico de tratamentos finalizados disponível na internet e app Uniodonto Manaus</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ backgroundImage: 'url("/images/servidorpublico/link3.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Oferecemos garantia no serviço prestado pelos dentistas, com auditoria online e segurança de um tratamento perfeito</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ backgroundImage: 'url("/images/servidorpublico/link4.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Desconto das mensalidades é realizado diretamente na folha de pagamento do servidor, necessitando haver margem para o mesmo</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Container>
                </Box>
       
        <Container>
        <Box sx={{display:'flex',mt:5}}>
           <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069',textAlign:'center'}}><span style={{fontWeight:'bold'}}>Para saber mais informações</span>, fale com um consultor ou clique no botão ao lado</Typography> 
       
           <Button variant='contained' sx={{p:4,width:'350px',borderRadius: '10px', bgcolor: '#107E75'}}>
         
           <img src='images/pessoajuridica/icon-wpp.png'/>
           
            <Typography sx={{fontSize:'22px',fontStyle:'italic'}}>  Fale com um <span style={{fontWeight:'bolder'}}>CONSULTOR</span></Typography>
           </Button>
         
       
        </Box>
        <Faqsp/>
        </Container>
        <Footer/>
        </AppWithPreloader>
       
    )
}