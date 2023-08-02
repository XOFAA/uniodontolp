import { NavBar } from "../../../components/navbar/NavBar"
import { Box, Typography, Container, Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const Atendimento = () => {
    return (
        <>
            <NavBar />  <Container>
                <Box sx={{ mt: { xs: 10, md: 20 } }}>
                    <Typography sx={{ fontWeight: 'bolder', fontSize: '36px', color: '#A60069' }}>Atendimento</Typography>
                    <Typography fontSize={'28px'}>Veja os canais de atendimento e horários para resolver todas suas dúvidas sobre nossos produtos e serviços.</Typography>
                    <Typography fontSize={'18px'} sx={{ mt: 5 }}>Para a segurança de todos, estamos com horário de funcionamento reduzido na Sede Administrativa. <br />
                        Nosso funcionamento é de 8h às 16h, exceto sábados, domingos e feriados nacionais (sem expediente).</Typography>

                    <Box sx={{ mt: 10, bgcolor: "#F1F1F1" }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                sx={{ bgcolor: '#F1F1F1' }}
                            >
                                <Typography fontSize={'28px'}>Para Você</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginTop: '0px' }}>
                                <Typography sx={{ fontSize: '28px', fontWeight: 'bolder' }}>Online</Typography>
                                <Typography sx={{ fontSize: '22px', mt: 1 }}>  Temos todos os meios para você falar com a gente sem sair de casa.</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bolder', mt: 2 }}>  Atendimento via Chatbot Cristal</Typography>
                                <Typography sx={{ fontSize: '18px' }}>Nossa chatbot Cristal está disponível para você resolver problemas rápidos a qualquer hora do dia e da noite.</Typography>


                                <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                    <Button variant="contained" sx={{ marginY: 3, bgcolor: '#229ED9', fontWeight: 'bolder' }}>Fale com a Cristal</Button>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>Atendimento via WhatsApp</Typography>
                                    <WhatsAppIcon />
                                </Box>
                                <Typography sx={{ fontSize: '18px', mt: 2 }}>Estamos também no WhatsApp para atender nos mais diversos assuntos que você precisar solucionar.</Typography>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: { md: 'row', xs: 'column' }, alignItems: { xs: 'center', md: 'start' }, my: 2 }}>
                                   <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>FAÇA SEU PLANO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RELACIONAMENTO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RENEGOCIAÇÃO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>SAB</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>OUVIDORIA</Button>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 'bolder' }}>Atendimento via E-Mail</Typography>
                                    <Typography sx={{ fontSize: '18px' }}>Nossos consultores disponibilizam também e-mails para que você possa encaminhar sua dúvida ou outras demandas referentes ao seu plano.</Typography>
                                    <Typography component="div">
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Relacionamento:</span> relacionamento@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Vendas:</span> vendas@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Cobrança e Renegociação:</span> contato@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Serviço de Atendimento ao Beneficiário:</span> sab@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Ouvidoria:</span> ouvidoria@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Fale Conosco:</span> faleconosco@uniodontomao.com.br
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bolder', mt: 5 }}>Telefone</Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 'italic' }}>Caso precise, temos telefone de contato para que você possa falar conosco:</Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>Vendas:</span> (92) 2126-0603</Typography>
                                    <Typography> <span style={{ fontWeight: 'bolder' }}>Faturamento:</span> (92) 2126-0630</Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>Serviço de Atendimento ao Beneficiário/Ouvidoria:</span> (92) 2126-0604</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"

                            >
                                <Typography fontSize={'28px'}>Para Empresas</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginTop: '0px' }}>
                                <Typography sx={{ fontSize: '28px', fontWeight: 'bolder' }}>Online</Typography>
                                <Typography sx={{ fontSize: '22px', mt: 1 }}>  Temos todos os meios para você falar com a gente sem sair de casa.</Typography>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bolder', mt: 2 }}>  Atendimento via Chatbot Cristal</Typography>
                                <Typography sx={{ fontSize: '18px' }}>Nossa chatbot Cristal está disponível para você resolver problemas rápidos a qualquer hora do dia e da noite.</Typography>


                                <Box sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                    <Button variant="contained" sx={{ marginY: 3, bgcolor: '#229ED9', fontWeight: 'bolder' }}>Fale com a Cristal</Button>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 'bolder' }}>Atendimento via WhatsApp</Typography>
                                    <WhatsAppIcon />
                                </Box>
                                <Typography sx={{ fontSize: '18px', mt: 2 }}>Estamos também no WhatsApp para atender nos mais diversos assuntos que você precisar solucionar.</Typography>
                                <Box sx={{ display: 'flex', gap: 4, flexDirection: { md: 'row', xs: 'column' }, alignItems: { xs: 'center', md: 'start' }, my: 2 }}>
                                <Button variant="contained" sx={{ width: '200px', height: '50px', bgcolor: '#107E75', fontWeight: 'bolder' }}>PLANO PARA EMPRESA</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>RELACIONAMENTO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>FATURAMENTO</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>SAB</Button>
                                    <Button variant="contained" sx={{ width: '200px', height: '40px', bgcolor: '#107E75', fontWeight: 'bolder' }}>OUVIDORIA</Button>

                                  
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                                    <Typography sx={{ fontSize: '22px', fontWeight: 'bolder' }}>Atendimento via E-Mail</Typography>
                                    <Typography sx={{ fontSize: '18px' }}>Nossos consultores disponibilizam também e-mails para que você possa encaminhar sua dúvida ou outras demandas referentes ao seu plano.</Typography>
                                    <Typography component="div">
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Relacionamento:</span> relacionamento@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Vendas:</span> vendas@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Cobrança e Renegociação:</span> contato@uniodontomao.com.br
                                        </Typography>
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Serviço de Atendimento ao Beneficiário:</span> sab@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Ouvidoria:</span> ouvidoria@uniodontomao.com.br
                                        </Typography>
                                        {/* Email address wrapped in a separate Typography component */}
                                        <Typography sx={{ fontSize: '18px' }}>
                                            <span style={{ fontWeight: 'bolder' }}>Fale Conosco:</span> faleconosco@uniodontomao.com.br
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Typography sx={{ fontSize: '22px', fontWeight: 'bolder', mt: 5 }}>Telefone</Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography sx={{ fontSize: '18px', fontWeight: 'italic' }}>Caso precise, temos telefone de contato para que você possa falar conosco:</Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>Vendas:</span> (92) 2126-0603</Typography>
                                    <Typography> <span style={{ fontWeight: 'bolder' }}>Faturamento:</span> (92) 2126-0630</Typography>
                                    <Typography><span style={{ fontWeight: 'bolder' }}>Serviço de Atendimento ao Beneficiário/Ouvidoria:</span> (92) 2126-0604</Typography>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"

                            >
                                <Typography fontSize={'28px'}>Para Cooperados</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ marginTop: '0px' }}>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                </Box>
            </Container>

        </>
    )
}