import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import React, { useEffect, useState } from 'react';
import { Box, Container, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { NavBar } from '../../components/navbar/NavBar';
import TawkToChatbot from '../../config/TawkToChatbot';
import { useTheme } from "@emotion/react";
import { Footer } from "../../components/footer/Footer";
import { SejaNossoColaborador } from "../../components/sejanossocolaborador/SejaNossoColaborador";
import { SejaUmCooperado } from "../../components/sejaUmcooperado/SejaUmCooperado";
import { SejaUmVendedor } from "../../components/sejaumvendedor/SejaUmVendedor";

export const FacaParte = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    useEffect(() => {
        console.log(selectedTab)
    }, [selectedTab])
    const tabComponents = [
        <SejaNossoColaborador />,
        <SejaUmCooperado />,
        <SejaUmVendedor />

    ];
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
                                <Box sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%'
                                }}>

                                    <img
                                        src="images/facaparte/foto1.png"
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
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069' }}>Faça parte do <span style={{ fontWeight: 'bold' }}>Nosso Time!</span></Typography>
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>Como cooperativa, a Uniodonto Manaus tem na sua força vital o profissionalismo e a dedicação de nossos cirurgiões-dentistas cooperados, colaboradores e representantes de vendas para atender bem e oferecer sorrisos únicos</Typography>
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
                                    src="images/facaparte/foto_mobile1.png"
                                    style={{ width: '100%', height: '100%' }}

                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '90%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        width: '60%'
                                    }}
                                >
                                    <Typography sx={{ fontStyle: 'italic', fontSize: '7vw', textAlign: 'center', color: '#A60069', width: '100%' }}><span style={{ fontWeight: 'bold' }}>Faça parte</span> do Nosso Time</Typography>
                                </Box>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </>
                    )}
                </Swiper>
            </Box>
            <Container>
                <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069', textAlign: 'center' }}>A Uniodonto Manaus é uma singular do Sistema Uniodonto,<br />
                        <span style={{ fontWeight: 'bolder' }}>a maior rede de atendimento odontológico do mundo!</span></Typography>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636', textAlign: 'center' }}>Venha fazer parte da Uniodonto Manaus.. Aqui, seguimos os princípios universais do cooperativismo, com o objetivo de proporcionar uma saúde bucal de excelência aos brasileiros, por meio de assistência odontológica de alta qualidade.</Typography>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636', textAlign: 'center' }}>Selecione a opção desejada e preencha o formulário abaixo para a gente conhecer melhor você!</Typography>
                </Box>
            </Container>

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 4 }}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Tabs value={selectedTab} onChange={handleTabChange}

                            variant="scrollable"
                            scrollButtons
                            allowScrollButtonsMobile

                            sx={{


                                '& .MuiTabs-indicator': {
                                    height: '0px'
                                },


                            }}

                        >
                            <Tab
                                label="Seja nosso Colaborador"
                                sx={{
                                    borderTopLeftRadius: '10px',
                                    borderTop: 1,
                                    width: { xs: '300px', md: '380px' },
                                    borderLeft: 1,
                                    borderRight: 1,
                                    '&.Mui-selected': {
                                        color: '#fff',
                                        backgroundColor: '#A60069'
                                    },
                                    color: '#A60069',
                                    borderColor: '#E4E4E4',
                                    textTransform: 'none',
                                    fontSize: '22px',
                                    fontStyle: 'italic',
                                    fontWeight: 'bolder',

                                }}
                            />
                            <Tab
                                label="Seja um Dentista Cooperado"
                                sx={{

                                    width: { xs: '300px', md: '380px' },
                                    py: 2,
                                    borderTop: 1,
                                    borderLeft: 1,
                                    borderRight: 1,
                                    '&.Mui-selected': {
                                        color: '#fff',
                                        backgroundColor: '#A60069'
                                    },
                                    color: '#A60069',
                                    borderColor: '#E4E4E4',
                                    textTransform: 'none',
                                    fontSize: '22px',
                                    fontStyle: 'italic',
                                    fontWeight: 'bolder',

                                }}
                            />



                            <Tab
                                label="Seja um Consultor de Vendas"
                                sx={{
                                    borderTopRightRadius: '10px',
                                    borderTop: 1,
                                    width: { xs: '300px', md: '380px' },
                                    borderLeft: 1,
                                    borderRight: 1,
                                    '&.Mui-selected': {
                                        color: '#fff',
                                        backgroundColor: '#A60069'
                                    },
                                    color: '#A60069',
                                    borderColor: '#E4E4E4',
                                    textTransform: 'none',
                                    fontSize: '22px',
                                    fontStyle: 'italic',
                                    fontWeight: 'bolder',

                                }}
                            />
                        </Tabs>
                    </Box>

                    {tabComponents[selectedTab]}



                </Box>


            </Box>

            <Footer />
        </AppWithPreloader>
    )
}