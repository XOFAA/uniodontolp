import { NavBar } from "../../components/navbar/NavBar"
import { Box, Typography, Container, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Footer } from "../../components/footer/Footer";
import { CarouselAcessoRapido } from "../../components/carousel/CarouselAcessoRapido";
import TawkToChatbot from "../../config/TawkToChatbot";
export const Atendimento = () => {
    return (
        <>
            <NavBar />
            <TawkToChatbot/>
            <Box sx={{mt:15}}>
            <CarouselAcessoRapido/>
            </Box>
          <Box sx={{bgcolor:'#fff',pb:10}}>
            
    
            <Container>
                <Box sx={{mt:5}}>
                <Typography sx={{textAlign:'center',fontWeight: 'bold',fontStyle:'italic', fontSize: '28px', color: '#A60069' }}>Atendimento</Typography>
                    <Typography sx={{color:'#363636',fontSize:'20px',fontStyle:'italic',textAlign:'center',mt:3}}>Veja os canais de atendimento e horários para resolver todas suas dúvidas sobre nossos produtos e serviços.</Typography>
                    <Typography  sx={{color:'#363636',mt: 2,fontSize:'16px',fontStyle:'italic',textAlign:'center'}}>Nosso funcionamento é de 7h30 às 18h (horário Manaus), exceto sábados, domingos e feriados nacionais (sem expediente).</Typography>
                </Box>
                <Box sx={{ boxShadow:2,borderRadius:'10px',mt: { xs: 10, md: 10}}}>
               
              
                    
                    <Box>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ bgcolor: '#F1F1F1'}}
                            >
                            <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#363636'}}>Para <span style={{fontStyle:'italic',fontWeight:'bold'}}>Você</span> (beneficiário pessoa física)</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginTop: '0px',p:5}}>
                                <Typography sx={{ fontSize: '28px', fontWeight: 'bold',fontStyle:'italic',color:'#363636' }}>Online</Typography>
                                <Typography sx={{ fontSize: '20px', mt: 1,color:'#363636',fontStyle:'italic' }}>Temos todos os meios para você falar com a gente onde quer que esteja.</Typography>
                                <Typography sx={{ fontSize: '20px', fontStyle:'italic',fontWeight:'bold', mt: 2,color:'#363636' }}>Atendimento via WebChat</Typography>
                                <Typography sx={{ fontSize: '16px',fontStyle:'italic',color:'#363636'}}>Nossa WebChat está disponível para você resolver problemas rápidos a qualquer hora do dia e da noite.</Typography>


                                <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                    <Button variant="contained" sx={{my:3,height:'46px',width:'217px',fontWeight: 'bold',fontStyle:'italic' }}>Acesse o WebChat</Button>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636'}}>Atendimento via WhatsApp</Typography>
                            
                                </Box>
                                <Typography sx={{fontSize: '16px',fontStyle:'italic',color:'#363636', mt: 2 }}>Estamos também no WhatsApp para atender nos mais diversos assuntos que você precisar solucionar.</Typography>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: { md: 'row', xs: 'column' }, alignItems: { xs: 'center', md: 'start' }, my: 2 }}>
                                   <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>FAÇA SEU PLANO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RELACIONAMENTO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RENEGOCIAÇÃO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>SAB</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>OUVIDORIA</Button>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636' }}>Atendimento via E-Mail</Typography>
                                    <Typography sx={{ fontSize: '16px', mt: 1,color:'#363636',fontStyle:'italic' }}>Nossos consultores disponibilizam também e-mails para que você possa encaminhar sua dúvida ou outras demandas referentes ao seu plano.</Typography>
                                    <Typography component="div">
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Relacionamento:</span> relacionamento@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Vendas:</span> vendas@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic'}}>Cobrança e Renegociação:</span> contato@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{fontWeight: 'bold',fontStyle:'italic' }}>Serviço de Atendimento ao Beneficiário:</span> sab@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Ouvidoria:</span> ouvidoria@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Fale Conosco:</span> faleconosco@uniodontomao.com.br
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636', mt: 5 }}>Telefone</Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography sx={{ fontSize: '20px',fontStyle:'italic',color:'#363636' }}>Entre em contato com a gente pelos telefones para tirar dúvidas e realizar serviços.</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Relacionamento:</span> (92) 2126-0629</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Vendas:</span> (92) 2126-0603</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Cobrança e Renegociação:</span> (92) 2126-0625</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Serviço de Atendimento ao Beneficiário/Ouvidoria:</span> (92) 2126-0604</Typography>
                                   
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Ouvidoria:</span> (92) 2126-0604</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Fale Conosco:</span> (92) 2126-0604</Typography>
                                  
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"

                            >
                            <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#363636'}}>Para  <span style={{fontStyle:'italic',fontWeight:'bold'}}>Empresas</span> (pessoa jurídica e RH)</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginTop: '0px',p:5}}>
                            <Typography sx={{ fontSize: '28px', fontWeight: 'bold',fontStyle:'italic',color:'#363636' }}>Online</Typography>
                                <Typography sx={{ fontSize: '20px', mt: 1,color:'#363636',fontStyle:'italic' }}>Temos todos os meios para você falar com a gente onde quer que esteja.</Typography>
                                <Typography sx={{ fontSize: '20px', fontStyle:'italic',fontWeight:'bold', mt: 2,color:'#363636' }}>Atendimento via WebChat</Typography>
                                <Typography sx={{ fontSize: '16px',fontStyle:'italic',color:'#363636'}}>Nossa WebChat está disponível para você resolver problemas rápidos a qualquer hora do dia e da noite.</Typography>


                                <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                    <Button variant="contained" sx={{my:3,height:'46px',width:'217px',fontWeight: 'bold',fontStyle:'italic' }}>Acesse o WebChat</Button>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636'}}>Atendimento via WhatsApp</Typography>
                            
                                </Box>
                                <Typography sx={{fontSize: '16px',fontStyle:'italic',color:'#363636', mt: 2 }}>Estamos também no WhatsApp para atender nos mais diversos assuntos que você precisar solucionar.</Typography>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: { md: 'row', xs: 'column' }, alignItems: { xs: 'center', md: 'start' }, my: 2 }}>
                                   <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>FAÇA SEU PLANO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RELACIONAMENTO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RENEGOCIAÇÃO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>SAB</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>OUVIDORIA</Button>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636' }}>Atendimento via E-Mail</Typography>
                                    <Typography sx={{ fontSize: '16px', mt: 1,color:'#363636',fontStyle:'italic' }}>Nossos consultores disponibilizam também e-mails para que você possa encaminhar sua dúvida ou outras demandas referentes ao seu plano.</Typography>
                                    <Typography component="div">
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Relacionamento:</span> relacionamento@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Vendas:</span> vendas@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic'}}>Cobrança e Renegociação:</span> contato@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{fontWeight: 'bold',fontStyle:'italic' }}>Serviço de Atendimento ao Beneficiário:</span> sab@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Ouvidoria:</span> ouvidoria@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Fale Conosco:</span> faleconosco@uniodontomao.com.br
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636', mt: 5 }}>Telefone</Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography sx={{ fontSize: '20px',fontStyle:'italic',color:'#363636' }}>Entre em contato com a gente pelos telefones para tirar dúvidas e realizar serviços.</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Relacionamento:</span> (92) 2126-0629</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Vendas:</span> (92) 2126-0603</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Faturamento:</span> (92) 2126-0630</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Ouvidoria:</span> (92) 2126-0604</Typography>
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>Fale Conosco:</span> (92) 2126-0604</Typography>
                                  
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"

                            >
                      <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#363636'}}>Para  <span style={{fontStyle:'italic',fontWeight:'bold'}}>Cooperados</span> (dentistas)</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginTop: '0px',p:5}}>
                            <Typography sx={{ fontSize: '28px', fontWeight: 'bold',fontStyle:'italic',color:'#363636' }}>Online</Typography>
                                <Typography sx={{ fontSize: '20px', mt: 1,color:'#363636',fontStyle:'italic' }}>Temos todos os meios para você falar com a gente onde quer que esteja.</Typography>
                                <Typography sx={{ fontSize: '20px', fontStyle:'italic',fontWeight:'bold', mt: 2,color:'#363636' }}>Atendimento via WebChat</Typography>
                                <Typography sx={{ fontSize: '16px',fontStyle:'italic',color:'#363636'}}>Nossa WebChat está disponível para você resolver problemas rápidos a qualquer hora do dia e da noite.</Typography>


                                <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                    <Button variant="contained" sx={{my:3,height:'46px',width:'217px',fontWeight: 'bold',fontStyle:'italic' }}>Acesse o WebChat</Button>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636'}}>Atendimento via WhatsApp</Typography>
                            
                                </Box>
                                <Typography sx={{fontSize: '16px',fontStyle:'italic',color:'#363636', mt: 2 }}>Estamos também no WhatsApp para atender nos mais diversos assuntos que você precisar solucionar.</Typography>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: { md: 'row', xs: 'column' }, alignItems: { xs: 'center', md: 'start' }, my: 2 }}>
                                   <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>DAC/Intercâmbio</Button>
                                   
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636' }}>Atendimento via E-Mail</Typography>
                                    <Typography sx={{ fontSize: '16px', mt: 1,color:'#363636',fontStyle:'italic' }}>Nossos consultores disponibilizam também e-mails para que você possa encaminhar sua dúvida ou outras demandas referentes ao seu plano.</Typography>
                                    <Typography component="div">
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Departamento de Atenção ao Cooperado:</span> dac@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic' }}>Produção:</span> producao@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '16px',color:'#363636',fontStyle:'italic' }}>
                                            <span style={{ fontWeight: 'bold',fontStyle:'italic'}}>Intercâmbio:</span> intercâmbio@uniodontomao.com.br
                                        </Typography>
                                    
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold',fontStyle:'italic',color:'#363636', mt: 5 }}>Telefone</Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography sx={{ fontSize: '20px',fontStyle:'italic',color:'#363636' }}>Entre em contato com a gente pelos telefones para tirar dúvidas e realizar serviços.</Typography>
                                    
               
                                    <Typography sx={{fontSize: '16px',color:'#363636',fontStyle:'italic'}}><span style={{ fontWeight: 'bold',fontStyle:'italic'  }}>DAC/Intercâmbio:</span> (92) 2126-0608</Typography>
                                  
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>
            </Box>
            <Footer/>
        </>
    )
}