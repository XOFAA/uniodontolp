import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, useMediaQuery } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import { useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Footer } from "../../components/footer/Footer";
import TawkToChatbot from "../../config/TawkToChatbot";
import { Faqreneg } from "../../components/faqrenegociacao/Faqreneg";
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader";
export const Renegociacao = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (

        <AppWithPreloader>
            <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'} />
            <TawkToChatbot/>
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
                                <img src="images/topslide/foto1.png" style={{ width: '100%', height: '100%' }} />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '70%',
                                        transform: 'translate(-50%, -50%)',

                                    }}
                                >

                                    <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Quer desenrolar</span><br />dos débitos e ficar zen?</Typography>


                                    <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>Você veio no lugar certo!
                                        Com poucos cliques, você fica em dia com a gente e volta a sorrir com segurança e tranquilidade que você merece!</Typography>
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
                            <img src="images/servidorpublico/foto1.png" style={{ width: '100%', height: '100%' }} />
                        </SwiperSlide>
                        {/* Add more slides as needed */}
                    </>
                )}
            </Swiper>
            <Box sx={{ height: '420px', background: 'linear-gradient(to bottom, #A60069 50%, #f1f1f1 50%)'}}>
                <Container>
                    <Box>
                        <Typography sx={{ pt: 6, color: '#ffff', fontSize: '28px', fontStyle: 'italic',textAlign:'center' }}><span style={{ fontWeight: 'bold' }}>Veja como é fácil consultar seus débitos</span> e voltar a sorrir com a Uniodonto Manaus!</Typography>
                    </Box>

                    <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 8 }}>

                        <Box sx={{ backgroundImage: 'url("/images/renegociacao/link1.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '300px', height: { xs: '100%', md: '260px' } }}>

                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: '16px', width: '142px', color: '#fff', textAlign: 'start' }}>Abra o WebChat, selecione a opção Renegociar Débitos, coloque seus dados para a gente saber quem é você e localizar seus dados</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/renegociacao/link2.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '300px', height: { xs: '100%', md: '260px' } }}>

                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: '16px', width: '142px', color: '#fff', textAlign: 'start' }}>Aguarde um membro de nosso Time de Renegociação atender você. Mas se não quiser esperar, pode fechar que retornaremos o contato</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/renegociacao/link3.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '300px', height: { xs: '100%', md: '260px' } }}>

                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: '16px', width: '142px', color: '#fff', textAlign: 'start' }}>Nosso Time de Renegociação fará o levantamento dos débitos e as formas de pagamento disponíveis quando estiver em contato com você</Typography>
                            </Box>

                        </Box>
                        <Box sx={{ backgroundImage: 'url("/images/renegociacao/link4.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: '300px', height: { xs: '100%', md: '260px' } }}>

                            <Box sx={{ p: 3 }}>
                                <Typography sx={{ fontStyle: 'italic', fontSize: '16px', width: '142px', color: '#fff', textAlign: 'start' }}>Ao acertar a condição de quitação dos débitos, você faz o pagamento e seu plano será desbloqueado para utilização novamente</Typography>
                            </Box>

                        </Box>
                    </Box>

                


                  
                      
                  

                </Container>
                <Faqreneg/>
                <Footer/>
            </Box>
            </AppWithPreloader>
    )
}