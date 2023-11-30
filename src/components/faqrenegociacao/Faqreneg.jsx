import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Faqreneg=()=>{
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
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quem pode realizar a negociação dos débitos do plano?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            A negociação de débitos do plano pode ser realizada pelos titulares e pelos responsáveis financeiros pelo plano, ou, no caso de pessoa jurídica, pelo representante legal do contrato. Estamos disponíveis para ajudá-lo a regularizar sua situação financeira de maneira adequada.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais são os meios de pagamento disponíveis na negociação?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Na negociação, você pode efetuar o pagamento à vista através de transferência bancária ou via PIX, caso o atendimento seja online. Para negociações presenciais, oferecemos a opção de pagamento via cartão de crédito. Estamos à disposição para facilitar o processo de pagamento da forma que for mais conveniente para você.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Eu consigo obter desconto dos juros na negociação?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Dependendo do número de débitos e da forma de pagamento, pode haver abatimento de juros na negociação. Estamos dispostos a considerar suas circunstâncias individuais ao negociar seus débitos.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Após fazer o pagamento dos débitos negociados, o que preciso fazer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Após efetuar o pagamento, se tiver sido realizado por canais online, você deve encaminhar o comprovante de pagamento durante o atendimento ou conforme orientação do atendente. Assim que localizarmos o pagamento em nosso sistema, seu plano será desbloqueado para uso. Estamos aqui para agilizar esse processo e garantir que você possa desfrutar dos benefícios do seu plano.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Em quanto tempo poderei voltar a utilizar o plano após quitação dos débitos?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Você pode usar seu plano novamente assim que os débitos forem quitados e o pagamento for processado. Normalmente, o tempo necessário para a reativação pode variar, mas muitas vezes é realizado de forma rápida, no mesmo dia, por exemplo. Recomenda-se entrar em contato com a gente para verificar o status da renegociação e para garantir que seu plano seja reativado o mais breve possível.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Como posso negociar os débitos de plano para Pessoa Jurídica?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Para negociar débitos de plano para Pessoa Jurídica, você pode entrar em contato com nosso Time de Faturamento. A renegociação pode ser feita diretamente no canal de atendimento no qual a empresa tem relacionamento conosco. Também é possível contatar-nos por e-mail em faturamento@uniodontomao.com.br. Estamos à disposição para auxiliar na negociação e solucionar qualquer questão relacionada aos débitos da Pessoa Jurídica.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais os canais de comunicação que tenho com a Uniodonto Manaus?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
            Você pode se comunicar com a Uniodonto Manaus através do webchat e dos canais informados na página de Canais de Atendimento deste site. Estamos à disposição para atender às suas necessidades de forma conveniente.
            </Typography>
        </AccordionDetails>
    </Accordion>
        </Container>
    </Box>
    )
}