import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import { NavBar } from "../../components/navbar/NavBar"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from "@emotion/react"
import { ObjetivosEsg } from "../../components/objetivosesg/ObjetivosEsg";
import { Ods } from "../../components/ods/Ods";
import { Footer } from "../../components/footer/Footer";

export const Esg = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppWithPreloader>
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

                                <img
                                    src="images/esg/foto1.png"
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
                                        <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069', fontWeight: 'bold' }}>Sustentabilidade e Responsabilidade </Typography>

                                        <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>Estamos comprometidos com a sustentabilidade e responsabilidade corporativa por meio da abordagem ESG (Ambiental, Social e Governança), onde nossa missão é conduzir negócios de maneira ética e sustentável</Typography>
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
                                src="images/esg/foto_mobile1.png"
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
                                <Typography sx={{ fontStyle: 'italic', fontSize: '7vw', textAlign: 'center', color: '#A60069', width: '100%', fontWeight: 'bold' }}>Sustentabilidade e Responsabilidade</Typography>
                            </Box>
                        </SwiperSlide>
                        {/* Add more slides as needed */}
                    </>
                )}
            </Swiper>

            <Box sx={{ bgcolor: '#A60069', py: 5 }}>
                <Container>

                    <Typography sx={{ fontSize: '28px', color: '#fff', fontStyle: 'italic', textAlign: 'center' }}>Quando <span style={{ fontWeight: 'bolder' }}>cooperamos juntos,</span> buscamos por uma sociedade cada dia mais sustentável
                        <span style={{ fontWeight: 'bolder' }}>O modelo cooperativo da Uniodonto Manaus norteia as ações de impacto ESG</span></Typography>
                    <Typography sx={{ fontSize: '20px', color: '#fff', fontStyle: 'italic', textAlign: 'center', mt: 5 }}>
                        Acreditamos que, ao integrar esses princípios em nossas operações, podemos criar valor sustentável para todos os nossos stakeholders.
                    </Typography>
                </Container>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', py: 5 }}>
                <Container>


                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069' }}>
                        Agenda 2030: <span style={{ fontWeight: 'bolder' }}>Os Objetivos de Desenvolvimento Sustentável</span>
                    </Typography>
                    <Typography sx={{ color: '#363636', fontSize: '20px', mt: 3 }}>Estamos sempre atentos às mudanças globais, por isso, incorporamos os ODS como orientadores da nossa estratégia. </Typography>
                    <Typography sx={{ color: '#363636', fontSize: '20px', mt: 3 }}>Conheça cada um dos 17 Objetivos de Desenvolvimento Sustentável (ODS), definidos pela Organização das Nações Unidas (ONU) até 2030, no qual o Brasil é signatário e encoraja instituições governamentais, empresas e pessoas a incorporarem e atingirem os mesmos:</Typography>
                    <ObjetivosEsg />
                </Container>

            </Box>





            <Box sx={{ bgcolor: '#A60069', py: 5 }}>
                <Container>

                    <Typography sx={{ textAlign: 'center', color: '#fff', fontSize: '28px', fontStyle: 'italic' }}>Os <span style={{ fontWeight: 'bolder' }}>ODS alinhados e perseguidos</span> por nossa cooperativa</Typography>
                    <Ods />
                </Container>

            </Box>

            <Container sx={{ py: 5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', fontWeight: 'bolder' }}>Ambiental (E)</Typography>
                        <Typography sx={{ color: '#363636', fontSize: '20px', fontStyle: 'italic', mt: 3 }}>A Uniodonto Manaus está empenhada em reduzir nosso impacto ambiental. Implementamos tecnologias sustentáveis em nossas operações, reduzimos o consumo de papeis com a digitalização de serviços. de forma a <span style={{ fontWeight: 'bolder' }}>trabalhar constantemente</span> para que nossas operações sejam eficientes.</Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', fontWeight: 'bolder' }}>Social (S)</Typography>
                        <Typography sx={{ color: '#363636', fontSize: '20px', fontStyle: 'italic', mt: 3 }}>Promovemos a diversidade e inclusão em nosso local de trabalho, mantendo um ambiente onde cada cooperado, colaborador, parceiro e beneficiário se sinta valorizado. Além disso, investimos em programas sociais locais, apoiando comunidades e iniciativas educacionais. Nosso compromisso com a segurança no trabalho é refletido na prática de <span style={{ fontWeight: 'bolder' }}>Acidente Zero</span> em nossas operações.</Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', fontWeight: 'bolder' }}>Governança (G)</Typography>
                        <Typography sx={{ color: '#363636', fontSize: '20px', fontStyle: 'italic', mt: 3 }}>Operamos com os mais altos padrões éticos e de governança. Nossa estrutura de governança é <span style={{ fontWeight: 'bolder' }}>transparente, e mantemos políticas rigorosas de conformidade</span>. Participamos ativamente em iniciativas de governança corporativa, contribuindo para o aprimoramento das práticas do setor.</Typography>
                    </Box>


                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                            <Box sx={{ width: { xs: '100%', md: '540px' }, height: '254px' }}>
                                <img src="images/esg/drthomas.png" style={{ width: '100%', height: '100%' }} />
                            </Box>
                            <Box sx={{ width: { xs: '100%', md: '540px' }, height: '254px' }}>
                                <img src="images/esg/capacitar.png" style={{ width: '100%', height: '100%' }} />
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Container>
            <Footer />
        </AppWithPreloader>
    )
}