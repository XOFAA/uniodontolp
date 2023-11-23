import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useTheme } from "@emotion/react";
import { NavBar } from "../../components/navbar/NavBar";
import { NossosValores } from "../../components/nossosvalores/NossosValores";
import { CarrouselDiretores } from "../../components/carrouseldiretores/CarrouselDiretores";
import { CarrouselUnidadesAtendimento } from "../../components/carrouselunidadesatendimento/CarrouselUnidadesAtendimento";
import { Footer } from "../../components/footer/Footer";



export const Institucional = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppWithPreloader>

            <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'} />
            <Box sx={{bgcolor: '#f1f1f1'}}>
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

                                    <img
                                        src="images/institucional/foto1.png"
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
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069' }}>Prazer, nós somos a </Typography>
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069', fontWeight: 'bold' }}>Uniodonto Manaus! ♥</Typography>
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>Nossa história é moldada pela cooperação de um time com mais de 200 cirurgiões-dentistas dedicados, cuidando com carinho de mais de 85 mil beneficiários só em Manaus e região.</Typography>
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
                                    src="images/institucional/foto_mobile1.png"
                                    style={{ width: '100%', height: '100%' }}

                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '90%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '70%'
                                    }}
                                >
                                    <Typography sx={{ fontStyle: 'italic', fontSize: '7vw', textAlign: 'center', color: '#A60069', width: '100%' }}>Prazer, nós somos a <span style={{ fontWeight: 'bold' }}>Uniodonto Manaus! ♥</span></Typography>
                                </Box>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </>
                    )}
                </Swiper>
            </Box>
            <Box sx={{ bgcolor: '#A60069', height: { xs: '100%', md: '255px' } }}>
                <Container sx={{ pt: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', gap: 2 }}>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff' }}>Nós fazemos parte do Sistema Uniodonto,<br /><span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                            a maior rede de atendimento odontológico do mundo!</span></Typography>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#fff' }}>Fundada em 11 de agosto de 1988, através da união de 45 cirurgiões-dentistas, surgiu a Uniodonto Manaus, operadora de planos de saúde odontológicas que atua para atender com carinho, atenção e qualidade todos os nossos beneficiários residentes na região metropolitana de Manaus e outras cidades do Amazonas.</Typography>
                    </Box>
                </Container>


            </Box>
            <Container>

                <Box sx={{ display: 'flex', mt: 5, flexDirection: { xs: 'column', md: 'unset' }, justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ width: ['100%', '48%'], height: '230px', bgcolor: '#A60069', borderRadius: '10px', p: 4, mb: 3 }}>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff' }}>Nossa <span style={{ fontWeight: 'bold' }}>Missão</span></Typography>
                        <Typography sx={{ mt: 2, fontStyle: 'italic', fontSize: '18px', color: '#fff' }}>Atuar com excelência no cuidado em saúde bucal, e garantir o bem estar de seus beneficiários, cooperados e colaboradores.</Typography>
                    </Box>

                    <Box sx={{ width: ['100%', '48%'], height: '230px', bgcolor: '#A60069', borderRadius: '10px', p: 4, mb: 3 }}>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff' }}>Nossa <span style={{ fontWeight: 'bold' }}>Missão</span></Typography>
                        <Typography sx={{ mt: 2, fontStyle: 'italic', fontSize: '18px', color: '#fff', letterSpacing: '-0.56px' }}>Ser referência em assistência odontológica no Estado do Amazonas.</Typography>
                    </Box>
                </Box>
                <NossosValores />
            </Container>

            <Box sx={{ bgcolor: '#A60069' }}>
                <Container sx={{ pt: 5 }}>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                        <Box sx={{ backgroundImage: 'url("/images/pagamentoscartoes/link1.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', sm: '480px', md: '500px' }, height: { xs: '100%', md: '260px' } }}>

                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: '20px', width: '210px', color: '#fff' }}>Aqui, nossos beneficiários são atendidos diretamente pelos donos da Uniodonto!</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/pagamentoscartoes/link2.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', sm: '480px', md: '500px' }, height: { xs: '100%', md: '260px' } }}>

                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: '20px', width: '210px', color: '#fff' }}>Orgulhamos em possuir índice zero de reclamações (NIP) e ter a melhor avaliação da ANS</Typography>
                            </Box>

                        </Box>
                    </Box>
                    <Box>
                        <Typography sx={{ pt: 6, fontSize: '28px', fontStyle: 'italic', textAlign: 'center', color: '#fff' }}><span style={{ fontWeight: 'bold' }}>Vantagens e Benefícios</span> que oferecemos à sua disposição</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 8 }}>
                        <Box sx={{ backgroundImage: 'url("/images/institucional/link7.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                            <Box sx={{ p: 2 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Acesso a mais de 200 dentistas localizados em todas as regiões de Manaus, com especialidades desde tratamentos simples até cirurgias mais complexas</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/institucional/link8.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                            <Box sx={{ p: 2 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Prontuário online de procedimentos, com todo o histórico de tratamentos finalizados disponível na internet e app Uniodonto Manaus</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/institucional/link9.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                            <Box sx={{ p: 2 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Quando precisar, conte com nosso Pronto Atendimento 24 horas, disponível para casos de emergência.</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/institucional/link10.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                            <Box sx={{ p: 2 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Oferecemos garantia no serviço prestado pelos dentistas, com auditoria online e segurança de um tratamento perfeito.</Typography>
                            </Box>

                        </Box>
                    </Box>
               
                </Container>
                <Box sx={{display:'flex',justifyContent:'center',pt:6}}>
                    <Typography sx={{fontSize: '28px', fontStyle: 'italic', textAlign: 'center', color: '#fff'}}><span style={{fontWeight:'bold'}}>Unidades</span>  de Atendimento</Typography>
                    </Box>
                    <CarrouselUnidadesAtendimento/>
                    
                    <Box sx={{display:'flex',justifyContent:'center',pt:6}}>
                    <Typography sx={{fontSize: '28px', fontStyle: 'italic', textAlign: 'center', color: '#fff'}}><span style={{fontWeight:'bold'}}>Governança</span> Corporativa</Typography>
                    </Box>
                    <CarrouselDiretores/>

                    
            </Box>

            <Box sx={{py:3}}>
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                    <Typography sx={{fontWeight:'bold',fontStyle:'italic',fontSize:'28px',color:'#A60069',mt:5}}>Composição dos Conselhos</Typography>
                    <Typography sx={{fontWeight:'bold',fontStyle:'italic',fontSize:'20px',color:'#A60069',mt:3}}>Conselho de Administração</Typography>
                    <Typography sx={{color:'#363636',fontWeight:'bold',fontStyle:'italic',fontSize:'20px'}}>Presidente</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Maria Eliana Cruz de Almeida Pereira – CRO AM 1173</Typography>
                    <Typography sx={{color:'#363636',fontWeight:'bold',fontStyle:'italic',fontSize:'20px',mt:3}}>Presidente</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>André Felipe Mourão Machado - CRO AM 3726</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Amir de Matos Braga - CRO AM 1347</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>José Hugo Seffair - CRO AM 2298</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Perla Azize Assayag - CRO AM 1315</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                 
                    <Typography sx={{fontWeight:'bold',fontStyle:'italic',fontSize:'20px',color:'#A60069',mt:3}}>Conselho Técnico</Typography>
                    <Typography sx={{color:'#363636',fontWeight:'bold',fontStyle:'italic',fontSize:'20px'}}>Membros efetivos</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Celio de Oliveira Carvalho – CRO AM 0836</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Laenilze Maria de Castro Araújo – CRO AM 0811</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Thayza Valle Cortez – CRO AM 2288</Typography>

                    <Typography sx={{color:'#363636',fontWeight:'bold',fontStyle:'italic',fontSize:'20px',mt:3}}>Membros suplentes</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Djana Silva dos Santos e Oliveira – CRO AM 1649</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Karyn de Sousa Moreira – CRO 5847</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Olenka Cavalcante Chauvin – CRO AM 1537</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                 
                    <Typography sx={{fontWeight:'bold',fontStyle:'italic',fontSize:'20px',color:'#A60069',mt:3}}>Conselho Fiscal</Typography>
                    <Typography sx={{color:'#363636',fontWeight:'bold',fontStyle:'italic',fontSize:'20px'}}>Membros efetivos</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Daniele Reis de Araújo Magalhães - CRO AM 1658</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Edilene Carneiro Melo – CRO AM 812</Typography>
                

                    <Typography sx={{color:'#363636',fontWeight:'bold',fontStyle:'italic',fontSize:'20px',mt:3}}>Membros suplentes</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Marilene da Conceição Ferreira Dutra – CRO AM 2658</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Vera Lucia Louzada Ferreira - CRO AM 602</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Vitor Granja Trunkl – CRO AM 2085</Typography>
                    </Box>

                    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',textAlign:'center'}}>
                    <Typography sx={{fontWeight:'bold',fontStyle:'italic',fontSize:'20px',color:'#A60069',mt:3}}>Auditoria</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Anna Ney Borges Louzada – CRO AM 1192</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Maria do Socorro Araújo de Miranda Leão – CRO 0272</Typography>
                    <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'20px'}}>Rildoner Amor Divino Andrade – CRO AM 0523</Typography>
                 </Box>
                 </Box>
            <Footer/>
        </AppWithPreloader>
    )
}