import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Container, FormControl, InputLabel, Link, MenuItem, Select, Skeleton, TextField, Typography, useMediaQuery } from '@mui/material';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@emotion/react';
import { NavBar } from '../../components/navbar/NavBar';
import { Parcerias } from '../../components/parcerias/Parcerias';
import TawkToChatbot from '../../config/TawkToChatbot';
import { Faqpj } from '../../components/faqpj/Faqpj';
import { Footer } from '../../components/footer/Footer';
import { CarrouselPlanos } from '../../components/carrouselplanos/CarrouselPlanos';
import AppWithPreloader from '../../components/appwithpreloader/AppWithPreloader';


export const PessoaFisica = () => {



  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [selecao, setSelecao] = useState(1); // Valor inicial: "Somente eu" (1 pessoa)

  const handleChange = (event) => {
    const valorSelecionado = event.target.value;
    setSelecao(valorSelecionado);
    console.log(`Seleção: ${valorSelecionado} pessoas`);
  };

  return (
    <AppWithPreloader>

   
      <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'} />
      <TawkToChatbot />
      <Box sx={{ position: 'relative', bgcolor: '#f1f1f1' }}>
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
                src="images/pessoafisica/foto1.png"
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
            
          

          
              <>
             
              <Typography sx={{fontStyle:'italic', fontSize:'2.6vw',textAlign:'end',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Planos</span> para você e sua família</Typography>
       
              <Typography sx={{fontStyle:'italic',fontSize:'1.3vw',textAlign:'end',color:'#A60069'}}>A Uniodonto Manaus tem planos odontológicos que atendam adequadamente às suas necessidades e de seus familiares, levando serviços de qualidade e ampla coberura.</Typography>
              </>
     
            
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
          
             <img
                src="images/pessoafisica/foto_mobile1.png"
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
          
            <Typography sx={{fontStyle:'italic', fontSize:'7vw',textAlign:'center',color:'#A60069',width:'100%'}}><span style={{fontWeight:'bold'}}>Planos</span>  para você e sua família</Typography>
       
         
           
          </Box>
            </SwiperSlide>
              {/* Add more slides as needed */}
            </>
          )}
        </Swiper>

      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',mt:5,textAlign:{xs:'center',md:'none'}}}>
        <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold' }}>Confira nossos planos para você e sua familia</Typography>

        <Box sx={{ display: 'flex',alignItems:'center',flexDirection:{xs:'column',md:'row'} }}>
          <Typography sx={{color:'#363636',fontSize:'22px',fontWeight:'bolder'}}>Quero um plano para</Typography>
          <FormControl sx={{ m: 1, minWidth: 140 }} size="medium">
            <Select value={selecao} onChange={handleChange}>
              <MenuItem value={1}>Somente eu</MenuItem>
              {/* Gere os itens de menu para 2 a 10 pessoas dinamicamente */}
              {Array.from({ length: 9 }, (_, index) => (
                <MenuItem key={index + 2} value={index + 2}>
                  {index + 2} pessoas
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

      </Box>

      <CarrouselPlanos qtdpessoas={selecao} />
    
      <Faqpj />
      <Footer />
      </AppWithPreloader>

  );
};

