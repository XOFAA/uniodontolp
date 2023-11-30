import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Faqsp = () => {
return (
<Box sx={{ my: 5 }}>
    <Container>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography sx={{ color: '#A60069', fontSize: '28px', fontStyle: 'italic', my: 5 }}><span style={{ fontWeight: 'bold' }}>Dúvidas</span> Frequentes</Typography>
        </Box>


    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quem pode contratar o plano?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Nossos planos de saúde estão disponíveis de forma excepcional para os servidores públicos do governo do estado e da prefeitura de Manaus, incluindo funcionários ativos e aposentados. Além disso, oferecemos aos servidores e seus dependentes legais a mesma variedade de planos que disponibilizamos para pessoas físicas, porém, com descontos exclusivos. Os dependentes elegíveis, como cônjuges e filhos, podem aderir aos planos mediante comprovação do vínculo familiar. Essa oferta especial visa proporcionar acesso a cuidados de saúde de qualidade a preços vantajosos para os servidores e suas famílias.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais são os planos disponíveis para servidores públicos da Prefeitura de Manaus e Governo do Amazonas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Atualmente, oferecemos o Plano Cristal, exclusivamente para os servidores públicos do governo do estado e da prefeitura de Manaus. Este plano proporciona uma cobertura essencial em cuidados de saúde, garantindo que os servidores e suas famílias tenham acesso a serviços médicos básicos e fundamentais.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais são os meios de pagamento vigentes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Atualmente, o único meio de pagamento disponível para os servidores públicos do governo do estado e da prefeitura de Manaus é o desconto direto em folha de pagamento, desde que haja margem disponível para essa finalidade. Esta opção de pagamento oferece conveniência aos servidores, permitindo que paguem pelos planos de saúde de forma direta e prática por meio de seus contracheques.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Os planos cobrem dependentes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Sim, nossos planos de Pessoa Física oferecem cobertura para dependentes, incluindo até terceiro grau consanguíneo. No entanto, é importante observar que, para a inclusão de dependentes, é necessário fornecer documentação que comprove o vínculo familiar, como certidões de nascimento, casamento ou outros documentos legais, de acordo com as políticas do plano escolhido. A comprovação é fundamental para garantir a elegibilidade dos dependentes e assegurar uma cobertura adequada aos beneficiários. Para obter orientações detalhadas sobre o processo de inclusão de dependentes, entre em contato com nosso atendimento ao cliente.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quem poderão ser dependentes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Os dependentes elegíveis para inclusão nos planos de Pessoa Física podem incluir:

                Cônjuge: O cônjuge do titular do plano.

                Filhos: Filhos solteiros, menores de 21 anos, ou até 24 anos se estiverem cursando o ensino superior.

                Enteados: Enteados solteiros, menores de 21 anos, ou até 24 anos se estiverem cursando o ensino superior, desde que haja comprovação legal do vínculo.

                Menores sob guarda ou tutela: Menores sob guarda ou tutela do titular, mediante comprovação legal.

                Parentes de terceiro grau consanguíneo: Dependendo das políticas do plano, alguns planos podem permitir a inclusão de parentes de terceiro grau consanguíneo, como primos, sobrinhos, entre outros, mediante comprovação de parentesco.

                É importante ressaltar que as regras de elegibilidade podem variar de acordo com o plano específico escolhido. Verifique as condições do seu plano e entre em contato com nosso atendimento ao cliente para obter informações detalhadas sobre a elegibilidade de dependentes.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Qual o prazo contratual?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                O prazo contratual inicial para os nossos planos é de 12 meses. Após esse período, o contrato é renovado automaticamente. Caso o titular do plano ou o responsável deseje cancelar após o período de 12 meses, isso pode ser feito sem a aplicação de multa contratual. O cancelamento é realizado mediante solicitação do titular ou responsável, proporcionando flexibilidade e facilidade aos nossos clientes.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Caso eu cancele o plano antes do prazo contratual, haverá multa?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Se você decidir cancelar o plano antes do prazo contratual de 12 meses, poderá estar sujeito a uma multa contratual, de acordo com as condições estabelecidas no contrato. É importante verificar as políticas específicas do seu plano e os termos do contrato para entender as implicações financeiras associadas ao cancelamento antecipado. Recomendamos que entre em contato com nosso atendimento ao cliente para obter informações detalhadas sobre as políticas de cancelamento e possíveis multas.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Haverá carência para utilização do plano?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Aqui estão os períodos de carência em ordem crescente de data, com ênfase nas exceções:

                ISENTO: Contratação com pagamento através de cartão de crédito. Não há período de carência para nenhum procedimento.

                24 horas: Para atendimento de procedimentos de urgência.
                90 dias: Para consultas, exames, restaurações, extrações e limpezas.
                120 dias: Tratamento de canal de dente pré-molar e colocação de aparelho ortodôntico.
                180 dias: Para tratamento de canal de dente molar, pequenas cirurgias e procedimentos de prótese.

                É importante destacar que, em algumas situações, poderemos oferecer ações promocionais que isentam de carência para todas as modalidades de pagamento. Fique atento às nossas promoções e oportunidades especiais para aproveitar benefícios adicionais.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Caso não ocorra o desconto da mensalidade no contracheque, o que devo fazer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Se você não observar o desconto da mensalidade em seu contracheque, recomendamos que entre em contato imediatamente com nossos canais de atendimento dedicados à pessoa física. Tenha em mãos seus dados pessoais e o número de matrícula de servidor público, que geralmente está registrado em seu contracheque ou crachá. Nosso time especializado estará pronto para ajudar a solucionar qualquer problema relacionado ao pagamento da mensalidade e garantir que você continue desfrutando dos benefícios do nosso plano.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Caso me afaste, sofrer exoneração, mudar de secretaria ou matrícula, o que devo fazer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Em situações de afastamento, exoneração, mudança de secretaria ou matrícula, é fundamental entrar em contato imediatamente com nosso atendimento. Certifique-se de ter em mãos os seguintes documentos: seu número de matrícula de servidor público, dados pessoais e informações relevantes para sua situação. Esses documentos nos permitirão avaliar sua situação e encontrar a melhor alternativa para você.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Em relação a procedimentos estéticos, como funciona</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                No que diz respeito a procedimentos estéticos, é importante esclarecer que nossa cobertura não se estende a esse tipo de tratamento. Caso um colaborador ou dependente deseje realizar procedimentos estéticos odontológicos, poderá utilizar nossa rede de atendimento, porém, os custos desses procedimentos deverão ser arcados diretamente pelo paciente ao dentista responsável. Nossa cobertura se concentra em procedimentos odontológicos essenciais para a saúde bucal, como prevenção, diagnóstico e tratamento de problemas odontológicos com necessidade clínica, garantindo assim um acesso adequado a cuidados odontológicos básicos.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
        >
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais os canais de comunicação dos beneficiários da empresa com a Uniodonto?</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                Para os beneficiários dos nossos planos, oferecemos diversos canais de comunicação para facilitar o contato com a Uniodonto Manaus, basta acessar a página de Canais de Atendimento, clicando na guia "Para Você (beneficiário pessoa física) ou acionar nosso WebChat, localizado no canto inferior direito.

                Estamos comprometidos em proporcionar um atendimento eficiente e acessível aos nossos beneficiários, garantindo que suas necessidades sejam atendidas da melhor forma possível.
            </Typography>
        </AccordionDetails>
    </Accordion>

    </Container>
</Box>
)
}