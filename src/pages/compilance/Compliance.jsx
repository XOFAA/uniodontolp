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
import { SwiperCompilance } from "../../components/swipercompilance/SwiperCompilance";


export const Compliance = () => {
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
                                        src="images/compilance/foto1.png"
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
                                            <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069', fontWeight: 'bold' }}>Compliance, Ética e Transparência</Typography>

                                            <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>A Uniodonto Manaus adota a ética e o compliance como pilares em nossas relações internas e externas, de forma que nossas operações sejam transparentes, responsáveis e estejam nos elevados padrões legais exigidos.</Typography>
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
                                    src="images/compilance/foto_mobile1.png"
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
                                    <Typography sx={{ fontStyle: 'italic', fontSize: '7vw', textAlign: 'center', color: '#A60069', width: '100%', fontWeight: 'bold' }}>Compliance, Ética e Transparência</Typography>
                                </Box>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </>
                    )}
                </Swiper>
            </Box>
            <Box sx={{ bgcolor: '#A60069' }}>
                <Container sx={{ pt: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', gap: 2 }}>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff' }}>Nossos 12 Valores:<br /><span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
                            A Base do Nosso Compromisso com a Ética e a Gestão de Riscos</span></Typography>
                        <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#fff' }}>Esses valores não são apenas palavras; são a base sólida sobre a qual construímos nossas políticas de compliance e nossa abordagem para a gestão de riscos. Ao alinhar nossas ações com esses valores, reforçamos nosso compromisso de oferecer serviços odontológicos de alta qualidade de forma ética, responsável e confiável para todos os nossos membros. Acreditamos que, juntos, podemos moldar um futuro mais saudável e ético.</Typography>
                    </Box>
                    <SwiperCompilance />
                </Container>
            </Box>

            <Container>
                <Box sx={{py:5}}>

         
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 2, py: 5 }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>O Compliance</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Compliance, em palavras simples, significa <span style={{ fontWeight: 'bolder' }}>fazer as coisas da maneira certa e de acordo com as regras</span>. Na nossa cooperativa de planos odontológicos, isso envolve seguir as leis, regulamentos e regras internas para garantir que todas as nossas atividades sejam éticas, transparentes e legais.</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Imagine o compliance como um guia que nos ajuda a agir de forma honesta e responsável em tudo o que fazemos. Isso inclui tratar nossos cooperados, colaboradores, beneficiários, clientes e parceiros de negócios com justiça, proteger informações confidenciais e garantir que nossos serviços sejam de alta qualidade.</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Em resumo, o compliance é como um conjunto de regras que nos ajuda a ser uma cooperativa confiável e ética, mantendo a confiança das pessoas que atendemos e trabalhando dentro das normas da lei.</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 2, py: 5 }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>Política Corporativa de Gestão de Riscos</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Aqui, apresentaremos nossa política corporativa de gestão de riscos, destacando como identificamos, avaliamos e mitigamos os riscos em nossas operações.</Typography>
                </Box>

                <Box sx={{height:'650px'}}>
                <iframe title="PDF Preview" src="https://drive.google.com/file/d/1e1_Jp0lFH8ftvWi79RbTiW_0TXkbxRpw/preview"  width="100%" height="100%" style={{ border: 'none' }} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 2, py: 5 }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>Sistema de Gerenciamento de Riscos</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Nesta seção, detalharemos o sistema que utilizamos para gerenciar proativamente os riscos em nossa cooperativa, incluindo processos, ferramentas e responsabilidades.</Typography>
                </Box>

                
                <Box sx={{height:'650px'}}>
                <iframe title="PDF Preview" src="https://drive.google.com/file/d/10GUE0AmBAQrP_mGPsoljXBItsc5G6V4m/preview"  width="100%" height="100%" style={{ border: 'none' }} />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 2, py: 5 }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>Canais de Denúncia e Ouvidoria</Typography>
                    <Typography  sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Ao clicar em uma das opções abaixo, você terá mais detalhes sobre nosso Canal de Denúncia e a Ouvidoria</Typography>
                    <Typography sx={{ fontSize: '20px', color: '#363636', fontStyle: 'italic' }}>Saberá como nossa cooperativa facilita a denúncia de comportamentos antiéticos ou irregularidades, bem como como operamos nossa ouvidoria para garantir um ambiente seguro e confidencial para todos que necessitarem dos serviços.</Typography>
                </Box>

                <Box sx={{display:'flex',gap:{xs:5,md:0},justifyContent:'space-between',flexDirection:{xs:'column',md:'row'}}}>
                <Link href='https://uniodontoservices.com.br/LGPD/canal-de-denuncia?codigo=37' target='_blank' sx={{textDecoration:'none'}}>
                <Box sx={{bgcolor:'#5DE4F7',width:{xs:'100%',md:'540px'},height:{xs:'200px',md:'150px'},borderRadius:'10px',p:2}}>
                    <Typography sx={{color:'#363636',fontSize:'28px',fontWeight:'bolder',fontStyle:'italic'}}>Canal de Denúncia</Typography>  
                    <Typography sx={{color:'#363636',fontSize:'22px',fontStyle:'italic',lineHeight:'25.6px'}}>Clique aqui para conhecer esta ferramenta sigilosa e imparcial disponível a quem necessitar</Typography>            
                </Box>
                </Link>
                <Link href='/ouvidoria' target='_blank' sx={{textDecoration:'none'}}>
                <Box sx={{bgcolor:'#A60069',width:{xs:'100%',md:'540px'},height:{xs:'200px',md:'150px'},borderRadius:'10px',p:2}}>
                    <Typography sx={{color:'#fff',fontSize:'28px',fontWeight:'bolder',fontStyle:'italic'}}>Ouvidoria Uniodonto Manaus</Typography>  
                    <Typography sx={{color:'#fff',fontSize:'22px',fontStyle:'italic',lineHeight:'25.6px'}}>Nosso time analisará sua solicitação<br/> com cuidado.</Typography>            
                </Box>
                </Link>
                </Box>
                </Box>
            </Container>

            <Footer />
        </AppWithPreloader>
    )
}