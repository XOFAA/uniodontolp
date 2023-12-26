import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Link, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Faqsitemap = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Container>


                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', my: 1 }}>De <span style={{ fontWeight: 'bolder' }}>A a Z</span> para você</Typography>
                </Box>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>A</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                            <span style={{ fontWeight: 'bold' }}>Atendimento </span><Link href="/atendimento" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/atendimento</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>B</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>C</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Centro de Proteção de Dados </span><Link href="/atendimento" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/cpd
                                </Link>
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Clube de Vantagens </span><Link href="/clube" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/clube
                                </Link>
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Compliance </span><Link href="/compliance" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/compliance
                                </Link>
                            </Typography>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>D</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Documentos Importantes </span><Link href="/documentos" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/documentos
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>E</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>ESG </span><Link href="/esg" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/esg
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>F</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Faça Parte de Nosso Time </span><Link href="/esg" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/facaparte
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>G</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>H</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>I</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Institucional </span><Link href="/esg" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/institucional
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>J</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>H</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>K</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>L</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>LGPD </span><Link href="/lgpd" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/lgpd
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>m</Typography>
                    </AccordionSummary>
                   
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>n</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>O</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Ouvidoria </span><Link href="/ouvidoria" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/ouvidoria
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>P</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Planos Pessoa Física </span><Link href="/pessoafisica" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/pessoafisica
                                </Link>
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Planos Pessoa Jurídica </span><Link href="/pessoajuridica" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/pessoajuridica
                                </Link>
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Planos Sevidor Público </span><Link href="/servidorpublico" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/servidorpublico
                                </Link>
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Pronto Atendimento </span><Link href="/prontoatendimento" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/prontoatendimento
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Q</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       
                    </AccordionDetails>
                </Accordion>


                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>R</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Renegociação </span><Link href="/renegociacao" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/renegoicacao
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>S</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>T</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{ fontSize: '20px', fontStyle: 'italic', color: '#363636' }}>
                                <span style={{ fontWeight: 'bold' }}>Troca de Cartão de Crédito </span><Link href="/trocacartao" sx={{ textDecoration: 'none' }}>https://uniodontomanaus.com.br/trocacartao
                                </Link>
                            </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>U</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>V</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>W</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>X</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Y</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                     
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Z</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        
                    </AccordionDetails>
                </Accordion>

            </Container>
        </Box>
    )
}