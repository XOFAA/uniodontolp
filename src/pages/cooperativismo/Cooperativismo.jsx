import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import { Box, Container, Link, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from "@emotion/react";
import { NavBar } from "../../components/navbar/NavBar";
import { Footer } from "../../components/footer/Footer";
import { SwiperCooperativismo } from "../../components/swipercooperativismo/SwiperCooperativismo";


export const Cooperativismo = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppWithPreloader>

            <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'} />
            <Box sx={{ bgcolor: '#f1f1f1' }}>
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
                                        src="images/cooperativismo/foto1.png"
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
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069', fontWeight: 'bold' }}>Cooperativismo</Typography>

                                            <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>O cooperativismo é uma forma de organização em que profissionais se unem de maneira colaborativa, compartilhando recursos e benefícios para fortalecer suas práticas</Typography>
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
                                    src="images/cooperativismo/foto_mobile1.png"
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
                                    <Typography sx={{ fontStyle: 'italic', fontSize: '7vw', textAlign: 'center', color: '#A60069', width: '100%', fontWeight: 'bold' }}>Cooperativismo</Typography>
                                </Box>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </>
                    )}
                </Swiper>
            </Box>
            <Container>
            <Box sx={{display:'flex',flexDirection:'column',textAlign:'center',py:5}}>
                <Typography sx={{fontSize:'28px',color:'#A60069',fontStyle:'italic'}}>O modelo de negócios da Uniodonto Manaus é baseado no cooperativismo.
                    <span style={{fontWeight:'bold'}}><br/>Isso se deve ao fato de que os dentistas que o atendem são, na verdade,<br/>
                    os próprios donos da cooperativa.</span></Typography>
                    
                    <Typography sx={{fontSize:'20px',fontStyle:'italic'}}>Essa característica singular garante um cuidado excepcional, pois cada profissional tem não apenas a expertise técnica, mas também um interesse genuíno em oferecer o melhor para você. Afinal, ser o dono significa ter um compromisso pessoal com a qualidade e satisfação, tornando a sua experiência odontológica mais personalizada, atenciosa e centrada no paciente. </Typography>
                    <Typography sx={{mt:3,fontSize:'20px',fontStyle:'italic'}}>Na Uniodonto Manaus, cada sorriso é tratado com o mesmo cuidado e dedicação que se espera de quem é dono do próprio negócio.</Typography>
            </Box>
            </Container>
            <Box sx={{ bgcolor: '#A60069' }}>
                <Container sx={{ pt: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', gap: 2 }}>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff',fontWeight:'bolder'}}>Os 7 Princípcios do Cooperativismo</Typography>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#fff' }}>Os sete princípios do cooperativismo são diretrizes fundamentais que orientam o funcionamento e a filosofia das cooperativas em todo o mundo. São eles:</Typography>
                    </Box>
                    <SwiperCooperativismo />
                </Container>
            </Box>

            <Container>
            <Box sx={{display:'flex',flexDirection:{xs:'column'},alignItems:'center',textAlign:'center',py:5}}>
                <Typography sx={{fontSize:'28px',color:'#A60069',fontStyle:'italic',fontWeight:'bold'}}>É Cirurgião-Dentista e gostou de nosso modelo de negócio cooperavisita?</Typography>
                
                <Link href="/facaparte">
          <Box sx={{ mt:4,width: "100%",height:{xs:'150px',md:'100px'} }}>
              <img src="images/botoesacessos/link5.svg" alt="Link 5" width={'100%'} height={'100%'} />
            </Box>
          </Link>
            </Box>
            </Container>

            <Footer />
        </AppWithPreloader>
    )
}