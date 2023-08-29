import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography, useMediaQuery } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import { useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Footer } from "../../components/footer/Footer";
export const Renegociacao = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
                        <Typography sx={{ pt: 6, color: '#ffff', fontSize: '28px', fontStyle: 'italic' }}><span style={{ fontWeight: 'bold' }}>Veja como é fácil consultar seus débitos</span> e voltar a sorrir com a Uniodonto Manaus!</Typography>
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

                


                        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', my: 5 }}><span style={{ fontWeight: 'bold' }}>Dúvidas</span> Frequentes</Typography>
                        </Box>

                        <Box sx={{ pb: 10 }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Accordion 1</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 3</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 4</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 5</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 6</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 7</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 8</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 9</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 10</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Accordion 11</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                        </Box>
                  

                </Container>
                <Footer/>
            </Box>
        </>
    )
}