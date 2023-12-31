import { Box, Button, Card, CardContent, Container, IconButton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../carrouselplanos/CarrouselPlanos.css'

import { useEffect, useRef, useState } from "react";

export const CarrouselPlanos = ({ qtdpessoas }) => {

  const procedimentos = [
    "Consultas e diagnósticos",
    "Urgências odontológicas",
    "Limpeza e aplicação de flúor",
    "Radiografias unitárias",
    "Odontologia para crianças",
    "Odontologia para pacientes com necessidades especiais",
    "Prevenção em saúde bucal",
    "Restaurações",
    "Raspagem",
    "Tratamento endodôntico (canal)",
    "Retratamento endodôntico",
    "Cirurgias odontológicas",
    "Extração de siso",
    "Prótese unitária",
    "Aparelho ortodôntico metálico fixo",
    "Aparelho ortodôntico removível",
    "Documentaçção ortodôntica básica",
    "Manutenção de aparelho",
    "Placa de contenção",
    "Clareamento de dente não vitalizado",
    "Clareamento dentário caseiro",
    "Clareamento dentário de consultório"

  ];

  const planos = [
    {
      nome: 'Plano Cristal',
      imagem: 'images/carrouselplanos/plano_cristal.png',
      cobertura: 'Cobertura Municipal',
      indicação: 'Indicado para tratamento preventivo e corretivo',
      qtdcobertura: '178 procedimentos cobertos',
      valor: ((qtdpessoas >= 3 ? 59 : qtdpessoas === 2 ? 64 : 69) * qtdpessoas).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      link:"https://seuplanoonline.fisistemas.com.br/contratar.php?plan=309",
      icones: {
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Urgências odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Limpeza e aplicação de flúor": <CheckIcon sx={{ color: "green" }} />,
        "Radiografias unitárias": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para crianças": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para pacientes com necessidades especiais": <CheckIcon sx={{ color: "green" }} />,
        "Prevenção em saúde bucal": <CheckIcon sx={{ color: "green" }} />,
        "Restaurações": <CheckIcon sx={{ color: "green" }} />,
        "Raspagem": <CheckIcon sx={{ color: "green" }} />,
        "Tratamento endodôntico (canal)": <CheckIcon sx={{ color: "green" }} />,
        "Retratamento endodôntico": <CheckIcon sx={{ color: "green" }} />,
        "Cirurgias odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Extração de siso": <CheckIcon sx={{ color: "green" }} />,
        "Prótese unitária": <CheckIcon sx={{ color: "green" }} />,
        "Aparelho ortodôntico metálico fixo": <ClearIcon sx={{ color: "red" }} />,
        "Aparelho ortodôntico removível": <ClearIcon sx={{ color: "red" }} />,
        "Documentaçção ortodôntica básica": <ClearIcon sx={{ color: "red" }} />,
        "Manutenção de aparelho": <ClearIcon sx={{ color: "red" }} />,
        "Placa de contenção": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento de dente não vitalizado": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário caseiro": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário de consultório": <ClearIcon sx={{ color: "red" }} />,
      },
    },
    {
      nome: 'Plano granada',
      imagem: 'images/carrouselplanos/plano_granada.png',
      cobertura: 'Cobertura Nacional',
      indicação: 'Indicado para quem deseja obter aparelho ortodôntico metálico fixo',
      qtdcobertura: '178 procedimentos cobertos',
      valor: ((qtdpessoas >= 3 ? 72 : qtdpessoas === 2 ? 79 : 85) * qtdpessoas).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      icones: {
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Urgências odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Limpeza e aplicação de flúor": <CheckIcon sx={{ color: "green" }} />,
        "Radiografias unitárias": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para crianças": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para pacientes com necessidades especiais": <CheckIcon sx={{ color: "green" }} />,
        "Prevenção em saúde bucal": <CheckIcon sx={{ color: "green" }} />,
        "Restaurações": <CheckIcon sx={{ color: "green" }} />,
        "Raspagem": <CheckIcon sx={{ color: "green" }} />,
        "Tratamento endodôntico (canal)": <CheckIcon sx={{ color: "green" }} />,
        "Retratamento endodôntico": <CheckIcon sx={{ color: "green" }} />,
        "Cirurgias odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Extração de siso": <CheckIcon sx={{ color: "green" }} />,
        "Prótese unitária": <CheckIcon sx={{ color: "green" }} />,
        "Aparelho ortodôntico metálico fixo": <ClearIcon sx={{ color: "red" }} />,
        "Aparelho ortodôntico removível": <ClearIcon sx={{ color: "red" }} />,
        "Documentaçção ortodôntica básica": <CheckIcon sx={{ color: "green" }} />,
        "Manutenção de aparelho": <ClearIcon sx={{ color: "red" }} />,
        "Placa de contenção": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento de dente não vitalizado": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário caseiro": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário de consultório": <ClearIcon sx={{ color: "red" }} />,
      },
    },

    {
      nome: 'Plano ametista',
      imagem: 'images/carrouselplanos/plano_ametista.png',
      cobertura: 'Cobertura Municipal',
      indicação: 'Indicado para prevenção continuada com menor intervalo de tempo; crianças com necessidade de acompanhamento regular; adultos com problemas periodontais',
      qtdcobertura: '180 procedimentos cobertos',
      valor: ((qtdpessoas >= 3 ? 93 : qtdpessoas === 2 ? 98 : 104) * qtdpessoas).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      link:'https://seuplanoonline.fisistemas.com.br/contratar.php?plan=312',
      icones: {
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Urgências odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Limpeza e aplicação de flúor": <CheckIcon sx={{ color: "green" }} />,
        "Radiografias unitárias": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para crianças": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para pacientes com necessidades especiais": <CheckIcon sx={{ color: "green" }} />,
        "Prevenção em saúde bucal": <CheckIcon sx={{ color: "green" }} />,
        "Restaurações": <CheckIcon sx={{ color: "green" }} />,
        "Raspagem": <CheckIcon sx={{ color: "green" }} />,
        "Tratamento endodôntico (canal)": <CheckIcon sx={{ color: "green" }} />,
        "Retratamento endodôntico": <CheckIcon sx={{ color: "green" }} />,
        "Cirurgias odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Extração de siso": <CheckIcon sx={{ color: "green" }} />,
        "Prótese unitária": <CheckIcon sx={{ color: "green" }} />,
        "Aparelho ortodôntico metálico fixo": <ClearIcon sx={{ color: "red" }} />,
        "Aparelho ortodôntico removível": <ClearIcon sx={{ color: "red" }} />,
        "Documentaçção ortodôntica básica": <ClearIcon sx={{ color: "red" }} />,
        "Manutenção de aparelho": <ClearIcon sx={{ color: "red" }} />,
        "Placa de contenção": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento de dente não vitalizado": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário caseiro": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário de consultório": <ClearIcon sx={{ color: "red" }} />,
      },
    },
    {
      nome: 'Plano Quartzo',
      imagem: 'images/carrouselplanos/plano_quartzo.png',
      cobertura: 'Cobertura Municipal',
      indicação: 'Indicado para realização de tratamentos ortodônticos',
      qtdcobertura: '182 procedimentos cobertos',
      valor: ((qtdpessoas >= 3 ? 122.90 : qtdpessoas === 2 ? 125.90 : 129.90) * qtdpessoas).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      link:'https://seuplanoonline.fisistemas.com.br/contratar.php?plan=378',
      icones: {
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Urgências odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Limpeza e aplicação de flúor": <CheckIcon sx={{ color: "green" }} />,
        "Radiografias unitárias": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para crianças": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para pacientes com necessidades especiais": <CheckIcon sx={{ color: "green" }} />,
        "Prevenção em saúde bucal": <CheckIcon sx={{ color: "green" }} />,
        "Restaurações": <CheckIcon sx={{ color: "green" }} />,
        "Raspagem": <CheckIcon sx={{ color: "green" }} />,
        "Tratamento endodôntico (canal)": <CheckIcon sx={{ color: "green" }} />,
        "Retratamento endodôntico": <CheckIcon sx={{ color: "green" }} />,
        "Cirurgias odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Extração de siso": <CheckIcon sx={{ color: "green" }} />,
        "Prótese unitária": <CheckIcon sx={{ color: "green" }} />,
        "Aparelho ortodôntico metálico fixo": <CheckIcon sx={{ color: "green" }} />,
        "Aparelho ortodôntico removível": <CheckIcon sx={{ color: "green" }} />,
        "Documentaçção ortodôntica básica": <CheckIcon sx={{ color: "green" }} />,
        "Manutenção de aparelho": <CheckIcon sx={{ color: "green" }} />,
        "Placa de contenção": <CheckIcon sx={{ color: "green" }} />,
        "Clareamento de dente não vitalizado": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário caseiro": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento dentário de consultório": <ClearIcon sx={{ color: "red" }} />,
      },
    },
    {
      nome: 'Plano safira',
      imagem: 'images/carrouselplanos/plano_safira.png',
      cobertura: 'Cobertura Municipal',
      indicação: 'Indicado para cuidado com a saúde bucal e para clareamento dos dentes',
      qtdcobertura: '180 procedimentos cobertos',
      valor: ((qtdpessoas >= 3 ? 150 : qtdpessoas === 2 ? 154.90 : 159.90) * qtdpessoas).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
      icones: {
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Urgências odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Consultas e diagnósticos": <CheckIcon sx={{ color: "green" }} />,
        "Limpeza e aplicação de flúor": <CheckIcon sx={{ color: "green" }} />,
        "Radiografias unitárias": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para crianças": <CheckIcon sx={{ color: "green" }} />,
        "Odontologia para pacientes com necessidades especiais": <CheckIcon sx={{ color: "green" }} />,
        "Prevenção em saúde bucal": <CheckIcon sx={{ color: "green" }} />,
        "Restaurações": <CheckIcon sx={{ color: "green" }} />,
        "Raspagem": <CheckIcon sx={{ color: "green" }} />,
        "Tratamento endodôntico (canal)": <CheckIcon sx={{ color: "green" }} />,
        "Retratamento endodôntico": <CheckIcon sx={{ color: "green" }} />,
        "Cirurgias odontológicas": <CheckIcon sx={{ color: "green" }} />,
        "Extração de siso": <CheckIcon sx={{ color: "green" }} />,
        "Prótese unitária": <CheckIcon sx={{ color: "green" }} />,
        "Aparelho ortodôntico metálico fixo": <ClearIcon sx={{ color: "red" }} />,
        "Aparelho ortodôntico removível": <ClearIcon sx={{ color: "red" }} />,
        "Documentaçção ortodôntica básica": <ClearIcon sx={{ color: "red" }} />,
        "Manutenção de aparelho": <ClearIcon sx={{ color: "red" }} />,
        "Placa de contenção": <ClearIcon sx={{ color: "red" }} />,
        "Clareamento de dente não vitalizado": <CheckIcon sx={{ color: "green" }} />,
        "Clareamento dentário caseiro": <CheckIcon sx={{ color: "green" }} />,
        "Clareamento dentário de consultório": <CheckIcon sx={{ color: "green" }} />,
      },
      
    },
   
      





  ]



  return (
    <>
      <Container>

        <Box className="CarrouselPlanos" sx={{ bgcolor: '#f1f1f1' }}>
    
          <Swiper

            modules={[Navigation, Pagination]}
            grabCursor
          
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween:80

              },
              375:{
                slidesPerView: 1,
                spaceBetween:40
              },
              425:{
                slidesPerView: 1,
                spaceBetween:10
              },
              600: {
                slidesPerView: 2,
                spaceBetween:-50
              },
              900: {
                slidesPerView: 3,
           
                spaceBetween:-50

              },


            }}

         
           







          >


            {planos.map((plan, index) => (
              <SwiperSlide key={index}>

                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                <Box
                    alt="Planos"
                    sx={{

                      width: '260px',
                      height: '131px',
                      position:'sticky',
                      top:{xs:65,md:67,lg:120},
                      transition: '0.3s ease-in-out'
                    }}
                  >


                    <img src={plan.imagem} height={'100%'} width={'100%'} style={{ borderRadius: 10 }} />

                  </Box>
                  <Card sx={{ width: '260px', cursor: 'pointer',borderRadius:2 }}>

                    <CardContent>

                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'start' }}>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '12px' }}>valor total/mês</Typography>
                        <Typography sx={{ color: '#363636', fontSize: '12px', fontStyle: 'italic' }}>
                          R$ <span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '27px', color: '#A60069' }}>
                            {plan.valor}
                          </span>
                        </Typography>
                        <Typography sx={{ mt: 3, textAlign: 'center', fontSize: '14px', fontStyle: 'italic', color: '#363636', fontWeight: 'bolder', height: '130px' }}>{plan.indicação}</Typography>
                        <Typography sx={{ textAlign: 'center', fontSize: '15px', fontStyle: 'italic', color: '#363636' }}>{plan.cobertura}</Typography>
                        <Typography sx={{ mt: 2, textAlign: 'center', fontSize: '15px', color: '#A60069', fontWeight: 'bolder' }}>{plan.qtdcobertura}</Typography>

                        {procedimentos.map((procedimento) => (
                          <Box sx={{ display: "flex", width: "100%", gap: 0.5, justifyContent: "start", alignItems: "start", mt: 3 }}>
                            {plan.icones[procedimento]}
                            <Typography sx={{ fontSize: "15px", fontStyle: "italic", color: "#363636" }}>{procedimento}</Typography>
                          </Box>
                        ))}

                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                        <Button href={plan.link} target="_blank" disabled={plan.link ? false:true} variant="contained" sx={{ width: '100%', height: '50px' }}> {plan.link ? 'Contrate Agora' : 'Em Breve'}</Button>
                      </Box>


                    </CardContent>
                  </Card>
                </Box>
              </SwiperSlide>
            ))}

          </Swiper>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 10 }}>
            <img src="images/carrouselplanos/tabela_planos.png" />

          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, mt: 3 }}>
            <motion.div
              whileHover={{ scale: 1.1 }}


            >
              <Button href="/pessoajuridica" sx={{
                bgcolor: '#60EBFF', '&:hover': {
                  bgcolor: '#A60069', color: '#fff'
                }, color: '#363636', fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', textTransform: 'none', width: '460px', height: '45px'
              }}>Possui empresa?</Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}


            >
              <Button href="/servidorpublico" sx={{
                bgcolor: '#E1FF7B', '&:hover': {
                  bgcolor: '#A60069', color: '#fff'
                }, color: '#363636', fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', textTransform: 'none', width: '556px', height: '45px'
              }}>Servidor da Prefeitura de Manaus ou Governo do Estado?</Button>
            </motion.div>


          </Box>
        </Box>

      </Container>
    </>
  )
}
