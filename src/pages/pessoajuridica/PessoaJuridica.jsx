import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, Link, TextField, Typography, useMediaQuery } from '@mui/material';


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
import AppWithPreloader from '../../components/appwithpreloader/AppWithPreloader';


export const PessoaJuridica = () => {
    const [consultorVisita, setConsultorVisita] = useState(null);
    const [coberturaOdonto, setCoberturaOdonto] = useState(null);
    const handleCheckboxVisita = (option) => {
        setConsultorVisita(option);

    };
    const handleCheckboxCobertura = (option) => {
        setCoberturaOdonto(option);

    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                                    <img src="images/pessoajuridica/foto1.png" style={{ width: '100%', height: '100%' }} />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '70%',
                                            transform: 'translate(-50%, -50%)',

                                        }}
                                    >

                                        <Typography sx={{ fontStyle: 'italic', fontSize: '2.6vw', textAlign: 'end', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Planos</span> sob medida para empresa</Typography>


                                        <Typography sx={{ fontStyle: 'italic', fontSize: '1.3vw', textAlign: 'end', color: '#A60069' }}>Aqui, você encontra o plano odontológico ideal para você, sua família e seus colaboradores, com qualidade, solidez e confiança que temos há 35 anos.</Typography>
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
                                <Box sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%'
                                }}>
                                    <img src="images/pessoajuridica/foto_mobile1.png" style={{ width: '100%', height: '100%' }} />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '90%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '60%'
                                        }}
                                    >

                                        <Typography sx={{ fontStyle: 'italic', fontSize: '7vw', textAlign: 'center', color: '#A60069', width: '100%' }}><span style={{ fontWeight: 'bold' }}>Planos</span> sob medida para empresa</Typography>



                                    </Box>
                                </Box>
                            </SwiperSlide>
                            {/* Add more slides as needed */}
                        </>
                    )}
                </Swiper>
                <Box sx={{ height: '420px', background: 'linear-gradient(to bottom, #A60069 50%, #f1f1f1 50%)' }}>
                    <Container>
                        <Box>
                            <Typography sx={{ pt: 6, fontSize: '28px', fontStyle: 'italic', textAlign: 'center', color: '#fff' }}><span style={{ fontWeight: 'bold' }}>Vantagens e Benefícios</span> que oferecemos à sua disposição</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mt: 8 }}>
                            <Box sx={{ backgroundImage: 'url("/images/pessoajuridica/link1.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Planos de acordo com o perfil da empresa ou negócio, com acesso a ampla rede de dentistas presente em todo o Brasil, com cerca de 22 mil dentistas cooperados</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ backgroundImage: 'url("/images/pessoajuridica/link2.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Prontuário online de procedimentos, com todo o histórico de tratamentos finalizados disponível na internet e app Uniodonto Manaus</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ backgroundImage: 'url("/images/pessoajuridica/link3.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Oferecemos garantia no serviço prestado pelos dentistas, com auditoria online e segurança de um tratamento perfeito</Typography>
                                </Box>

                            </Box>
                            <Box sx={{ backgroundImage: 'url("/images/pessoajuridica/link4.svg")', backgroundSize: 'cover', borderRadius: '10px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', width: { xs: '100%', md: '420px' }, height: { xs: '100%', md: '260px', sm: '260px' } }}>

                                <Box sx={{ p: 2 }}>
                                    <Typography sx={{ fontStyle: 'italic', fontSize: { xs: '16px', sm: '24px', md: '16px' }, width: { xs: '142px', sm: '350px', md: '142px' }, color: '#fff' }}>Controle a gestão do benefício no Portal Empresas e suporte online, enquanto seus colaboradores utilizam o app Uniodonto Manaus</Typography>
                                </Box>

                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>



       

    




            <Container>


                <Box sx={{ bgcolor:'#fff',borderRadius:3,display: 'flex', flexDirection: 'column', boxShadow: 2, p: 5, mt: { xs: 90, md: 2 } }}>
                    

                <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography sx={{ fontSize: {xs:'22px',md:'28px'}, fontStyle: 'italic', color: '#A60069', textAlign: 'center' }}>De MEI a grandes empresas, <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>temos o plano ideal para você</span></Typography>
                    <Typography sx={{ fontSize: {xs:'14px',md:'28px'}, fontStyle: 'italic', color: '#323232', textAlign: 'center' }}>Solicite uma proposta, preenchendo o formulário abaixo ou clique no botão para falar com um consultor</Typography>
                    <Typography sx={{ fontSize: {xs:'14px',md:'28px'}, fontStyle: 'italic', color: '#323232', textAlign: 'center' }}>Nossos consultores ficam disponíveis 7h30 às 18h (horário Manaus), exceto sábados, domingos e feriados nacionais (sem expediente).</Typography>


                </Box>
                    <Box sx={{ display: 'flex', gap: 2, textAlign: { xs: 'center', md: 'initial' },mt:10}}>
                        <Box>
                            <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069' ,textAlign:{xs:'center',md:'start'}}}><span style={{ fontWeight: 'bold' }}>Solicite</span> uma Proposta</Typography>
                            <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#363636',textAlign:{xs:'center',md:'start'}}}>Os planos para empresas e negócios são voltados na modalidade Pessoa Jurídica e estão disponíveis para a partir de 2 vidas.</Typography>
                        </Box>
                        <Box>
                            <Button variant='contained' sx={{ borderRadius: '10px', width: '370px', height: '111px', bgcolor: '#107E75', display: { xs: 'none', md: 'flex' }, gap: 1 }}><img src='images/pessoajuridica/icon-wpp.png' />Fale com um<br />Consultor</Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
                        <TextField label="Razão social da empresa"
                            required
                            type='text'
                        />
                        <TextField label="CNPJ"
                            required
                            type='text'
                        />
                        <TextField label="Nome completo do solicitante"
                            required
                            type='text'
                        />
                        <TextField label="Cargo do solicitante"
                            required
                            type='text'
                        />
                        <TextField label="E-mail do solicitante"
                            required
                            type='text'
                        />
                        <TextField label="Celular/WhatsApp do solicitante"
                            required
                            type='text'
                        />
                        <TextField label="Quantidade de vidas (beneficiários)"
                            required
                            type='text'
                        />
                        <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>Deseja receber uma visita presencial nossa em sua empresa?</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox
                                checked={consultorVisita === true}
                                onChange={() => handleCheckboxVisita(true)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Sim
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox
                                checked={consultorVisita === false}
                                onChange={() => handleCheckboxVisita(false)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Não
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>Já possui cobertura odontológica?</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox
                                checked={coberturaOdonto === true}
                                onChange={() => handleCheckboxCobertura(true)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Sim
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox
                                checked={coberturaOdonto === false}
                                onChange={() => handleCheckboxCobertura(false)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Não
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>Ou se preferir, você pode incluir o arquivo com a relação de todos os beneficiários (jpg, jpeg, png, pdf, doc e docx)</Typography>
                        <TextField
                            fullWidth
                            type='file'
                        />
                        <Typography sx={{ fontSize: '15px', fontStyle: 'italic', color: '#363636' }}>Para maiores informações referente às condições comerciais, envie e-mail para <Link href="mailto:gerencia.comercial@unidontomao.com.br">gerencia.comercial@unidontomao.com.br</Link></Typography>
                        <Typography sx={{ fontSize: '15px', fontStyle: 'italic', color: '#363636' }}><span style={{ fontWeight: 'bold' }}>LGPD:</span> Ao enviar esta proposta, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                        <Button variant='contained' sx={{ borderRadius: '5px', width: '260px', height: '50px' }}>Enviar Proposta</Button>
                    </Box>
                </Box>

            </Container>
            <Parcerias />
            <Faqpj />
            <Footer />
              
            </AppWithPreloader>

    );
};