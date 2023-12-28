import { Box, Container, Divider, Link, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import { Footer } from "../../components/footer/Footer"
import { FormOuvidoria } from "../../components/formouvidoria/FormOuvidoria"
import { SwiperCpd } from "../../components/swipercpd/SwiperCpd"
import { FaqCpd } from "../../components/faqcpd/FaqCpd"

export const Cpd = () => {
    return (

        <AppWithPreloader>


            <NavBar/>

            <Box sx={{ mt: 20 }}>

                <Container>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: {xs:5,md:3}, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>Centro de Proteção de Dados</Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>O Centro de Proteção de Dados da Uniodonto Manaus é um reforço de nosso compromisso com a segurança dos seus dados, privacidade e práticas seguras na internet. Explore para entender como coletamos, usamos e protegemos suas informações, garantindo seus direitos e uma experiência confiável, bem como se manter seguro no uso da internet. Sua privacidade é nossa prioridade.</Typography>
                        
                    </Box>
                </Container>
                <Box sx={{ bgcolor: '#A60069', p: 5, mt: 5 }}>
                    <Container>
                        <Typography sx={{ textAlign: 'center', fontSize: '28px', color: '#fff', fontStyle: 'italic' }}><span style={{ fontWeight: 'bold' }}>Acessos </span> importantes</Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between',flexDirection:{xs:'column',md:'row'},gap:{xs:3,md:0}, alignItems: 'center', mt: 5 }}>
                           <Link sx={{textDecoration:'none'}} href="/lgpd" target="_blank">

                            <Box sx={{ borderRadius: '10px', bgcolor: '#E1FF7B', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Informações LGPD</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Preencha o formulário abaixo com as informações necessárias.</Typography>
                            </Box>
                            </Link>
                            <Link sx={{textDecoration:'none'}} href="https://uniodontoservices.com.br/LGPD/canal-atendimento-lgpd?codigo=37" target="_blank">
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#FF627F', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Central de Atendimento LGPD</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Nosso time analisará sua solicitação com cuidado.</Typography>
                            </Box>
                            </Link>
                            <Link sx={{textDecoration:'none'}} href="https://uniodontoservices.com.br/LGPD/politica_de_cookie?codigo=37" target="_blank">
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#50DDFE', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Política de Cookies</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Iniciaremos uma investigação completa, se necessário, para entender a situação.</Typography>
                            </Box>
                            </Link>
                            <Link sx={{textDecoration:'none'}} href="https://uniodontoservices.com.br/LGPD/politica_de_privacidade?codigo=37" target="_blank">

                                   <Box sx={{ borderRadius: '10px', bgcolor: '#FF99A7', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Política de Privacidade</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Você receberá uma resposta dentro do prazo estabelecido.</Typography>
                            </Box>
                            </Link>
                            <Link sx={{textDecoration:'none'}} href="/compliance" target="_blank">
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#CC9DFF', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Canal de Denúncia Compliance</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Faremos o possível para resolver sua preocupação e, se aplicável, implementar melhorias em nossos processos.</Typography>
                            </Box>
                            </Link>
                        </Box>
                    </Container>
                </Box>
                <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',my:5}}>
                <Typography sx={{fontSize:'28px',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Conteúdos</span> úteis para sua segurança na internet</Typography>
                
                </Box>
                <Container>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                <Link sx={{fontSize:'21px',fontWeight:'bold',color:'#363636',textDecoration:'none'}}>Internet Segura</Link>
                <Divider orientation="vertical" flexItem/>
                <Link sx={{fontSize:'21px',fontWeight:'bold',color:'#363636',textDecoration:'none'}}>Antispam</Link>
                <Divider orientation="vertical" flexItem/>
                <Link sx={{fontSize:'21px',fontWeight:'bold',color:'#363636',textDecoration:'none'}}> Cidadão na Rede</Link>
                <Divider orientation="vertical" flexItem />
                <Link sx={{fontSize:'21px',fontWeight:'bold',color:'#363636',textDecoration:'none'}}>Cartilha de Segurança para Internet</Link>
                </Box>
                <FaqCpd/>
                </Container>
            
                <Footer />
            </Box>

        </AppWithPreloader>



    )
}