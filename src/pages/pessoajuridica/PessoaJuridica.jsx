import React, { useState } from 'react';
import { Alert, Box, Button, Checkbox, CircularProgress, Container, Link, Snackbar, TextField, Typography, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import Api from '../../config/Api';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import ReactInputMask from 'react-input-mask';
import { motion } from "framer-motion";


export const PessoaJuridica = () => {
    const [consultorVisita, setConsultorVisita] = useState('sim');
    const [coberturaOdonto, setCoberturaOdonto] = useState('não');
    const [razaoSocial, setRazaoSocial] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [solicitante, setSolicitante] = useState('')
    const [cargoSolicitante, setCargoSolicitante] = useState('')
    const [emailSolicitante, setEmailSolicitante] = useState('')
    const [celular, setCelular] = useState('')
    const [qtdVidas, setQtdVidas] = useState('')
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [hcaptchaKey, setHcaptchaKey] = useState(new Date().getTime().toString());
    const [envioSucesso, setEnvioSucesso] = useState(false)
    const [isLoading, setIsLoading] = useState(false);

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleCheckboxVisita = (option) => {
        setConsultorVisita(option)

    };
    const handleCheckboxCobertura = (option) => {
        setCoberturaOdonto(option)

    };
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    const handleSubmit = (e) => {

        setIsLoading(true);
        e.preventDefault();
        if (!recaptchaValue) {

            console.error("Por favor, resolva o reCAPTCHA antes de enviar o formulário.");
            return;
        }

        Api.post('/enviar-email-pj', {
            RazaoSocial: razaoSocial,
            Cnpj: cnpj,
            NomeCompleto: solicitante,
            CargoSolicitante: cargoSolicitante,
            EmailSolicitante: emailSolicitante,
            Celular: celular,
            QtdVidas: qtdVidas,
            Visita: consultorVisita,
            Cobertura: coberturaOdonto,
            recaptchaToken: recaptchaValue,
        })
            .then(function (response) {
                setSnackbarMessage('Formulário enviado com sucesso!')
                setRazaoSocial('');
                setCnpj('');
                setSolicitante('');
                setCargoSolicitante('');
                setEmailSolicitante('');
                setCelular('');
                setQtdVidas('');
                setSnackbarMessage('Formulário enviado com sucesso!')
                setSnackbarOpen(true);
                console.log(response)
                setRecaptchaValue(null)
                setEnvioSucesso(true)
                setHcaptchaKey(new Date().getTime().toString());
            })
            .catch(function (error) {
                setSnackbarMessage('Falha interna, tente novamente mais tarde')
                setSnackbarOpen(true)
                setEnvioSucesso(false);
                setRecaptchaValue(null)
                setHcaptchaKey(new Date().getTime().toString());

            }).finally(() => {
                setIsLoading(false)
            })
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


                <Box component={'form'} onSubmit={handleSubmit} sx={{ bgcolor: '#fff', borderRadius: 3, display: 'flex', flexDirection: 'column', boxShadow: 2, p: 5, mt: { xs: 90, md: 2 } }}>


                    <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography sx={{ fontSize: { xs: '22px', md: '28px' }, fontStyle: 'italic', color: '#A60069', textAlign: 'center' }}>De MEI a grandes empresas, <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>temos o plano ideal para você</span></Typography>
                        <Typography sx={{ fontSize: { xs: '14px', md: '20px' }, fontStyle: 'italic', color: '#323232', textAlign: 'center' }}>Solicite uma proposta, preenchendo o formulário abaixo ou clique no botão para falar com um consultor</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', md: '16px' }, fontStyle: 'italic', color: '#323232', textAlign: 'center' }}>Nossos consultores ficam disponíveis 7h30 às 18h (horário Manaus), exceto sábados, domingos e feriados nacionais (sem expediente).</Typography>


                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, textAlign: { xs: 'center', md: 'initial' }, mt: 10 }}>
                        <Box>
                            <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069', textAlign: { xs: 'center', md: 'start' } }}><span style={{ fontWeight: 'bold' }}>Solicite</span> uma Proposta</Typography>
                            <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#363636', textAlign: { xs: 'center', md: 'start' } }}>Os planos para empresas e negócios são voltados na modalidade Pessoa Jurídica e estão disponíveis para a partir de 2 vidas.</Typography>
                        </Box>
                        <Box>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                            >
                                <Link href='https://linklist.bio/vendasuniomao' target='_blank' variant='contained' sx={{ textDecoration:'none',cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, height: { xs: '70px', md: '110px' }, width: '350px', borderRadius: '10px', bgcolor: '#107E75' }}>

                                    <img src='images/pessoajuridica/icon-wpp.png' style={{ width: '46px', height: '48px' }} />

                                    <Typography sx={{ fontSize: '22px', fontStyle: 'italic', color: '#fff' }}>  Fale com um<br /><span style={{ fontWeight: 'bolder' }}>CONSULTOR</span></Typography>
                                </Link>
                            </motion.div>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
                        <TextField label="Razão social da empresa"
                            required
                            type='text'
                            value={razaoSocial}
                            onChange={(e) => setRazaoSocial(e.target.value)}
                        />
                        <ReactInputMask
                            mask="99.999.999/9999-99"
                            value={cnpj}
                            required
                            onChange={(e) => setCnpj(e.target.value)}

                        >
                            {() => <TextField label="CNPJ" />}
                        </ReactInputMask>
                        <TextField label="Nome completo do solicitante"
                            required
                            type='text'
                            value={solicitante}
                            onChange={(e) => setSolicitante(e.target.value)}
                        />
                        <TextField label="Cargo do solicitante"
                            required
                            type='text'
                            value={cargoSolicitante}
                            onChange={(e) => setCargoSolicitante(e.target.value)}
                        />
                        <TextField label="E-mail do solicitante"
                            required
                            type='email'
                            value={emailSolicitante}
                            onChange={(e) => setEmailSolicitante(e.target.value)}
                        />
                        <ReactInputMask
                            mask="(99) 9999-99999"
                            value={celular}
                            required
                            onChange={(e) => setCelular(e.target.value)}

                        >
                            {() => <TextField label="Celular/WhatsApp do solicitante *" />}
                        </ReactInputMask>

                        <TextField label="Quantidade de vidas (beneficiários)"
                            required
                            type='text'
                            value={qtdVidas}
                            onChange={(e) => setQtdVidas(e.target.value)}
                        />
                        <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>Deseja receber uma visita presencial nossa em sua empresa?</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox


                                checked={consultorVisita === 'sim'}
                                onChange={() => handleCheckboxVisita('sim')}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Sim
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox

                                checked={consultorVisita === 'não'}
                                onChange={() => handleCheckboxVisita('não')}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Não
                            </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                            Já possui cobertura odontológica?
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox


                                checked={coberturaOdonto === 'sim'}
                                onChange={() => handleCheckboxCobertura('sim')}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Sim
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox

                                checked={coberturaOdonto === 'não'}
                                onChange={() => handleCheckboxCobertura('não')}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Não
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>


                        <Typography sx={{ fontSize: '15px', fontStyle: 'italic', color: '#363636' }}>Para maiores informações referente às condições comerciais, envie e-mail para <Link href="mailto:gerencia.comercial@unidontomao.com.br">gerencia.comercial@unidontomao.com.br</Link></Typography>
                        <Typography sx={{ fontSize: '15px', fontStyle: 'italic', color: '#363636' }}><span style={{ fontWeight: 'bold' }}>LGPD:</span> Ao enviar esta proposta, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <HCaptcha sitekey="99f91ef4-ac33-4816-a78b-0397f8d6a036" onVerify={(token) => handleRecaptchaChange(token)} key={hcaptchaKey} />

                        {recaptchaValue ? (
                            <Button
                                variant='contained'
                                type='submit'
                                sx={{ borderRadius: '5px', width: '260px', height: '50px', position: 'relative' }}
                                disabled={isLoading} // Desativa o botão quando estiver em processo de envio
                            >
                                {isLoading && (
                                    <CircularProgress
                                        size={24}
                                        sx={{
                                            bgcolor: '#A60069',
                                            color: '#fff',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            marginTop: '-12px',
                                            marginLeft: '-12px',
                                        }}
                                    />
                                )}
                                {!isLoading ? 'Enviar Proposta' : 'Enviando...'}
                            </Button>
                        ) : (
                            <Alert severity="error">Por favor, resolva o CAPTCHA antes de enviar o formulário.</Alert>
                        )}

                    </Box>
                </Box>
                {envioSucesso ? <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{snackbarMessage}</Typography>
                    </Alert>
                </Snackbar> : (
                    <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{snackbarMessage}</Typography>
                        </Alert>
                    </Snackbar>
                )}

            </Container>
            <Parcerias />
            <Faqpj />
            <Footer />

        </AppWithPreloader>

    );
};