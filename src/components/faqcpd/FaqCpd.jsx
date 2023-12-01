import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const FaqCpd = () => {
    return (
        <Box sx={{ my: 5 }}>
            <Container>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', my: 5 }}><span style={{ fontWeight: 'bold' }}>Alguns </span> tipos de fraudes na internet</Typography>
                </Box>


                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Golpe do boleto falso</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Descrição: Criminosos criam boletos bancários fraudulentos, muitas vezes alterando os dados do beneficiário ou do valor, para enganar vítimas a realizar pagamentos em contas controladas por eles.
                            Como ocorre: Os boletos falsos podem ser enviados por e-mail, incluídos em sites comprometidos ou até mesmo substituídos fisicamente em correspondências.
                            Dicas de Prevenção: Verificar cuidadosamente os dados do boleto, comparando com informações originais; utilizar meios seguros para obter boletos, como sites oficiais da empresa; e manter sistemas antivírus atualizados para detectar possíveis ameaças online.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Golpe da cental de relacionamento falsa</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Descrição: Chamadas ou mensagens que afirmam ser de uma empresa legítima, buscando acesso a computadores ou informações.
                            Identificação: Confirmar a legitimidade da ligação diretamente com os canais de contato oficiais da empresa antes de fornecer informações ou acesso remoto.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Phishing</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Definição: Phishing é uma forma de fraude online onde os criminosos tentam obter informações confidenciais, como senhas e detalhes de cartões de crédito, disfarçando-se como fontes confiáveis.
                            Exemplos: E-mails de "bancos" solicitando atualizações de senha; sites falsos imitando serviços conhecidos.
                            Dicas de Prevenção: Verificar o remetente do e-mail, não clicar em links suspeitos e verificar a autenticidade dos sites.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Ataques de engenharia social</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Definição: Manipulação psicológica para enganar as pessoas a revelarem informações confidenciais.
                            Exemplos: Falsos telefonemas de suporte técnico, solicitações de informações pessoais por telefone.
                            Prevenção: Desconfiar de comunicações não solicitadas, verificar a identidade do solicitante.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Malware</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Tipos: Vírus, que se replicam; trojans, que se disfarçam de software legítimo; ransomware, que criptografa dados.
                            Propagação: Via downloads infectados, anexos de e-mail ou sites comprometidos.
                            Proteção: Usar antivírus, manter o software atualizado e evitar downloads de fontes não confiáveis.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Fraudes em compras online</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Golpes: Sites falsos que coletam informações de pagamento sem entregar produtos.
                            Verificação: Verificar a autenticidade do site, ler revisões de clientes e usar métodos de pagamento seguros.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Ataques a perfis de redes sociais</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Riscos: Perfis falsos que tentam se passar por conhecidos para obter informações pessoais.
                            Segurança: Configurar configurações de privacidade, ser seletivo ao aceitar solicitações de amizade e relatar contas suspeitas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Segurança em dispositivos móveis</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Riscos: Aplicativos maliciosos que podem roubar dados; perda ou roubo de dispositivos.
                            Proteção: Usar apenas lojas de aplicativos confiáveis, configurar senhas ou biometria, e habilitar rastreamento de dispositivo em caso de perda ou roubo.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Fraudes em transações financeiras</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Proteção: Manter informações financeiras seguras, usando conexões seguras e monitorando regularmente transações.
                            Verificação: Certificar-se de que os sites de transações são seguros (https), verificar extratos bancários regularmente.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Segurança em E-mails Corporativos
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Importância: Garantir a confidencialidade das comunicações empresariais e prevenir ataques direcionados.
                            Medidas: Implementar políticas de segurança, treinar funcionários para reconhecer ameaças e usar criptografia quando necessário.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Roubo de Identidade
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                            Como ocorre: Os criminosos obtêm dados pessoais, como números de Seguro Social, para cometer fraudes.
                            Consequências: Prejuízos financeiros, comprometimento da reputação e possíveis problemas legais.
                            Medidas Preventivas: Usar senhas complexas, proteger informações pessoais e monitorar atividades financeiras.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Container>
        </Box>
    )
}