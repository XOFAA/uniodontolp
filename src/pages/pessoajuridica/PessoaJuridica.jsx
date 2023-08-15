import React, { useState } from 'react';
import { Box, Button, Checkbox, Container, Link, TextField, Typography, useMediaQuery } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useTheme } from '@emotion/react';
import { NavBar } from '../../components/navbar/NavBar';
import { Parcerias } from '../../components/parcerias/Parcerias';
import { VantagensBeneficio } from '../../components/vantagensbeneficio/VantagensBeneficios';
import { CheckBox } from '@mui/icons-material';

export const PessoaJuridica = () => {
    const [consultorVisita, setConsultorVisita] = useState(null);

    const handleCheckboxChange = (option) => {
        setConsultorVisita(option);
       
    };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Box sx={{ mt: 8, bgcolor: '#f1f1f1' }}>
                <NavBar />
                <Swiper
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >
                    {/* Desktop Images */}
                    {!isMobile && (
                        <>
                            <SwiperSlide><img src="images/pessoajuridica/foto1.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>

                        </>
                    )}

                    {/* Mobile Images */}
                    {isMobile && (
                        <>


                            <SwiperSlide><img src="images/topslide/mobile_foto2.png" style={{ width: '100%', height: '100%' }} /></SwiperSlide>

                        </>
                    )}
                </Swiper>
            </Box>
            <Container>
                <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069', textAlign: 'center' }}>Enquanto você se dedica em sua empresa ou negócio, <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>nós cuidamos dos sorrisos e da saúde bucal de seus colaboradores</span></Typography>
                    <Typography sx={{ fontStyle: 'italic', fontSize: '20px', textAlign: 'center', color: '#363636' }}>A Uniodonto Manaus oferece benefícios e serviços personalizados, garantindo o bem-estar dos seus colaboradores, além de proporcionar gestão e contratação dos nossos planos sem burocracia e sob medida para o tamanho de sua empresa ou negócio.</Typography>
                    <Typography sx={{ fontStyle: 'italic', fontSize: '20px', textAlign: 'center', color: '#363636' }}>Além de cobertura completa, conte com a maior rede de atendimento em odontologia do Brasil, aprovação online de procedimentos, planos com atendimento local e/ou nacional, além de muitos outros benefícios. Aqui, sua empresa ou negócio tem atendimento personalizado e seus colaboradores e familiares contarão com tratamentos de qualidade.
                    </Typography>
                    <Typography sx={{ fontStyle: 'italic', fontSize: '20px', textAlign: 'center', color: '#363636', fontWeight: 'bold' }}>
                        Faça sua proposta de adesão ou fale com um consultor para que você tenha um plano odontológico adequado ao seu tipo de negócio e necessidade de seus colaboradores.{' '}
                        <span style={{ color: '#A60069', fontWeight: 'bold', fontSize: '20px', fontStyle: 'italic' }}>Aqui, o seu sorriso é único.</span>
                    </Typography>
                    <Box sx={{ textAlign: 'center' }}>
                        <Button variant='contained' sx={{ width: '220px', height: '50px', borderRadius: '5px' }}>Solicite uma Proposta</Button>
                    </Box>
                </Box>
            </Container>
            <Parcerias />
            <VantagensBeneficio />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069', my: 3 }}>De MEI a grandes empresas, <span style={{ fontWeight: 'bold' }}>temos o plano ideal para você</span></Typography>
                <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#363636' }}>Solicite uma proposta, preenchendo o formulário abaixo ou clique no botão para falar com um consultor</Typography>
                <Typography sx={{ fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Nossos consultores ficam disponíveis 7h30 às 18h (horário Manaus), exceto sábados, domingos e feriados nacionais (sem expediente).</Typography>
            </Box>

            <Container>


                <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: 2, p: 5 }}>
                    <Box sx={{ display: 'flex', gap: 2, textAlign: { xs: 'center', md: 'initial' } }}>
                        <Box>
                            <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Solicite</span> uma Proposta</Typography>
                            <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#363636' }}>Os planos para empresas e negócios são voltados na modalidade Pessoa Jurídica e estão disponíveis para a partir de 3 vidas.</Typography>
                        </Box>
                        <Box>
                            <Button variant='contained' sx={{ borderRadius: '10px', width: '370px', height: '111px', bgcolor: '#107E75', display: { xs: 'none', md: 'flex' }, gap: 1 }}><img src='images/pessoajuridica/icon-wpp.png' />Fale com um<br />Consultor</Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
                        <TextField label="Nome da empresa"
                            required
                            type='text'
                        />
                        <TextField label="CNPJ"
                            required
                            type='text'
                        />
                        <TextField label="Nome do responsável legal"
                            required
                            type='text'
                        />
                        <TextField label="CPF do responsável legal"
                            required
                            type='text'
                        />
                        <TextField label="E-mail do responsável legal"
                            required
                            type='text'
                        />
                        <TextField label="Celular/WhatsApp do responsável legal"
                            required
                            type='text'
                        />
                        <TextField label="Quantidade de vidas (beneficiários)"
                            required
                            type='text'
                        />
                        <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>Deseja que um consultor faça uma visita?</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox
                                checked={consultorVisita === true}
                                onChange={() => handleCheckboxChange(true)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Sim
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Checkbox
                                checked={consultorVisita === false}
                                onChange={() => handleCheckboxChange(false)}
                                inputProps={{ 'aria-label': 'controlled' }}
                            />
                            <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#363636' }}>
                                Não
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                        <Typography sx={{fontSize:'14px',fontStyle:'italic',color:'#363636'}}>Ou se preferir, você pode incluir o arquivo com a relação de todos os beneficiários (jpg, jpeg, png, pdf, doc e docx)</Typography>
                        <TextField
                        fullWidth
                        type='file'
                        />
                        <Typography sx={{fontSize:'15px',fontStyle:'italic',color:'#363636'}}>Para maiores informações referente às condições comerciais, envie e-mail para <Link>gerencia.comercial@unidontomao.com.br</Link>, ou <Link>clique aqui</Link> para falar diretamente com um consultor disponível.</Typography>
                        <Typography sx={{fontSize:'15px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>LGPD:</span> Ao enviar esta proposta, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
                    </Box>
                    <Box sx={{display:'flex',justifyContent:'center',mt:3}}>
                    <Button variant='contained' sx={{borderRadius:'5px',width:'260px',height:'50px'}}>Enviar Proposta</Button>
                    </Box>
                </Box>

            </Container>
        </>

    );
};