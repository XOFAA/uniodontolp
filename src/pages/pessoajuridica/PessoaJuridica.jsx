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
        <>
               <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8) , rgba(0, 0, 0, 0.0))'}/>
             <Box sx={{ position: 'relative', bgcolor: '#f1f1f1'}}>
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
            <Box  sx={{
            position: 'relative',
            width: '100%',
            height:'100%'
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
          
            <Typography sx={{fontStyle:'italic', fontSize:'2.6vw',textAlign:'end',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Planos</span> sob medida para empresa</Typography>
       
         
            <Typography sx={{fontStyle:'italic',fontSize:'1.3vw',textAlign:'end',color:'#A60069'}}>Aqui, você encontra o plano odontológico ideal para você, sua família e seus colaboradores, com qualidade, solidez e confiança que temos há 35 anos.</Typography>
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
              <img src="images/topslide/mobile_foto1.png" style={{ width: '100%', height: '100%' }} />
            </SwiperSlide>
            {/* Add more slides as needed */}
          </>
        )}
      </Swiper>
    </Box>
  


            <Container>
             

                <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069', textAlign: 'center' }}>Enquanto você se dedica em sua empresa ou negócio, <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>nós cuidamos dos sorrisos e da saúde bucal de seus colaboradores</span></Typography>
                  
               
                  
                </Box>
            </Container>
         
          
        

            <Container>


                <Box sx={{ display: 'flex', flexDirection: 'column', boxShadow: 2, p: 5,mt:10}}>
                    <Box sx={{ display: 'flex', gap: 2, textAlign: { xs: 'center', md: 'initial' } }}>
                        <Box>
                            <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Solicite</span> uma Proposta</Typography>
                            <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#363636' }}>Os planos para empresas e negócios são voltados na modalidade Pessoa Jurídica e estão disponíveis para a partir de 2 vidas.</Typography>
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
                    <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                        <Typography sx={{fontSize:'14px',fontStyle:'italic',color:'#363636'}}>Ou se preferir, você pode incluir o arquivo com a relação de todos os beneficiários (jpg, jpeg, png, pdf, doc e docx)</Typography>
                        <TextField
                        fullWidth
                        type='file'
                        />
                        <Typography sx={{fontSize:'15px',fontStyle:'italic',color:'#363636'}}>Para maiores informações referente às condições comerciais, envie e-mail para <Link href="mailto:gerencia.comercial@unidontomao.com.br">gerencia.comercial@unidontomao.com.br</Link></Typography>
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