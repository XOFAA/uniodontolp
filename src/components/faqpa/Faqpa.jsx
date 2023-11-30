import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Faqpa=()=>{
    return(
        <Box sx={{ my:5}}>
            <Container>

            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                            <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', my: 5 }}><span style={{ fontWeight: 'bold' }}>Dúvidas</span> Frequentes</Typography>
                        </Box>

         
                        <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Tenho plano Uniodonto Manaus e posso utilizar o Pronto Atendimento 24 horas em quais casos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Com o plano Uniodonto Manaus, o Pronto Atendimento 24 horas está disponível para casos de dores intermitentes e contínuas que necessitam de cuidados de emergência. Além disso, oferecemos atendimento especializado para pacientes com necessidades especiais. Não hesite em nos contatar em situações de urgência odontológica, estamos aqui para ajudar a aliviar o desconforto e fornecer cuidados de qualidade quando você mais precisa.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Tenho plano Uniodonto de outra região e posso utilizar o Pronto Atendimento?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Sim, você pode utilizar o Pronto Atendimento mesmo com um plano Uniodonto de outra região, caso o seu plano tenha cobertura nacional. Tudo o que você precisa fazer é apresentar um documento oficial com foto e a carteirinha, que pode ser física ou virtual, da Uniodonto de origem. Estamos aqui para garantir que você receba o atendimento de que precisa, independentemente da sua região de origem, contanto que o seu plano ofereça cobertura em nível nacional.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Eu não tenho plano Uniodonto Manaus mas posso utilizar o Pronto Atendimento de forma particular?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Sim, você pode utilizar o Pronto Atendimento de forma particular, mesmo sem ter um plano Uniodonto Manaus. Os valores dos procedimentos serão informados durante o atendimento, proporcionando transparência e flexibilidade para receber os cuidados odontológicos de que você precisa. Estamos aqui para ajudar, independentemente do seu status de plano.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>No Pronto Atendimento 24 horas há serviços voltados a pacientes com necessidades especiais?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Sim, oferecemos serviços voltados a pacientes com necessidades especiais no Pronto Atendimento 24 horas. Para agendar, entre em contato pelo número (92) 2126-0650. Estamos aqui para atender a todas as necessidades de nossos pacientes.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Como posso acessar o Pronto Atendimento 24 horas da Uniodonto Manaus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Você pode acessar o Pronto Atendimento 24 horas pela entrada da Rua 24 de Maio, do Hospital Beneficente Português.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Preciso pagar taxa de estacionamento para acessar o Pronto Atendimento 24 horas da Uniodonto Manaus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Ao utilizar o acesso pela Rua 24 de Maio e informar na guarita que está indo para o nosso Pronto Atendimento, o estacionamento será isento. Estamos à disposição para fornecer assistência odontológica quando você precisar.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Qual o canal de contato que posso ter com o Pronto Atendimento 24 horas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Você pode entrar em contato com o Pronto Atendimento 24 horas através do telefone ou WhatsApp no número (92) 2126-0650. Estamos prontos para ajudá-lo a qualquer momento.
            </Typography>
        </AccordionDetails>
    </Accordion>
   
        </Container>
    </Box>
    )
}