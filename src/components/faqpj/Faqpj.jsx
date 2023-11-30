import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const Faqpj=()=>{
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
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quem pode contratar o plano?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                        O plano odontológico da nossa cooperativa está disponível para contratação por empresas e organizações que desejam oferecer benefícios odontológicos aos seus colaboradores (planos pessoa jurídica). No entanto, é importante ressaltar que a solicitação de proposta de adesão e o fornecimento dos dados necessários devem ser realizados por gestores ou pessoas autorizadas pela empresa. Isso garante um processo organizado e eficiente para a contratação do plano empresarial. Se você é um colaborador interessado em ter acesso a um plano odontológico, sugerimos que entre em contato com o setor responsável pela gestão de benefícios da sua empresa para obter mais informações sobre a possibilidade de adesão e os procedimentos necessários.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais são os planos disponíveis para Pessoa Jurídica?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                        Atualmente, temos os seguintes planos disponíveis para Pessoa Jurídica: o Plano Cristal, Plano Ametista, Plano Granada (abrangência nacional), Plano Safira e o Plano Quartzo. Estamos constantemente trabalhando para aprimorar nossos serviços e expandir nossa oferta de planos empresariais. Em breve, planejamos disponibilizar outras opções de planos para atender às diferentes necessidades das empresas. Continue acompanhando nossas atualizações para ficar informado sobre as novidades e opções adicionais que estarão disponíveis em breve para os clientes PJ.
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
                        Para Pessoa Jurídica (PJ), o meio de pagamento vigente atualmente é o boleto bancário. O faturamento dos planos empresariais é realizado exclusivamente por meio dessa forma de pagamento. Estamos sempre buscando maneiras de melhorar a experiência das empresas que contratam nossos serviços, e caso haja alguma atualização ou inclusão de novos métodos de pagamento no futuro, informaremos nossos clientes PJ para que possam escolher a opção mais conveniente para eles
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Posso contatar planos de livre adesão ou compulsório?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                        Oferecemos flexibilidade na contratação de planos odontológicos, permitindo tanto planos de livre adesão quanto planos compulsórios para empresas. No plano de livre adesão, o próprio colaborador opta por aderir ao plano e tem os valores descontados em sua folha de pagamento, enquanto a empresa faz o repasse correspondente. No plano compulsório, a empresa assume o investimento integral no plano odontológico para seus colaboradores, garantindo assim o acesso de toda a equipe aos benefícios odontológicos. Essa flexibilidade permite que as empresas escolham a opção que melhor se adapta às suas políticas de benefícios e às necessidades de seus colaboradores.
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
                        O prazo contratual mínimo para os nossos planos odontológicos é de 24 meses a partir da data de contratação. Após esse período inicial, o contrato é renovado automaticamente e continua em vigor, sem prazo de validade determinado. Isso significa que, após os primeiros 24 meses, o contrato se manterá ativo a menos que uma das partes, seja a empresa contratante ou a cooperativa, solicite a sua rescisão de acordo com as condições estabelecidas no contrato.
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
                        Sim, nossos planos odontológicos oferecem a possibilidade de cobertura para dependentes, que podem incluir até pessoas de terceiro grau consanguíneo. É importante ressaltar que a decisão de incluir ou não dependentes além dos próprios colaboradores é flexível e fica a critério da empresa contratante. A empresa pode optar por ampliar a adesão de acordo com sua política interna e as necessidades de seus colaboradores, proporcionando um benefício abrangente para a equipe e seus familiares, se assim desejar.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Existe planos diferenciados para diretoria e gestores?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                        Sim, oferecemos a opção de planos diferenciados para diretores e gestores de empresas. No entanto, para esses planos especiais, é necessário realizar um contrato separado, com condições de vigência específicas, conforme mencionado anteriormente. Isso permite que a empresa adapte os benefícios odontológicos de acordo com as necessidades de seus líderes e gestores, garantindo um atendimento personalizado e adequado às suas funções e responsabilidades.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>A distribuição de vidas é por elegibilidade?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                        Sim, a distribuição de vidas nos planos pessoa jurídica é realizada com base na elegibilidade dos participantes. Somente colaboradores ou gestores diretamente vinculados à empresa podem aderir aos planos. Além disso, é permitida a inclusão de dependentes de até terceiro grau consanguíneo, mediante comprovação. Essa abordagem garante que apenas pessoas elegíveis, de acordo com os critérios estabelecidos, possam fazer parte dos planos empresariais, proporcionando uma gestão precisa e adequada das coberturas odontológicas.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Em relação a procedimentos estéticos, como funciona?</Typography>
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
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Quais os canais de comunicação da empresa ou RH com a Uniodonto?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>
                        Para os gestores de Recursos Humanos e responsáveis pessoa jurídica, oferecemos diversos canais de comunicação para facilitar o contato com a Uniodonto Manaus, basta acessar a página de Canais de Atendimento, clicando na guia "Para Empreas (pessoa jurídica e RH) ou acionar nosso WebChat, localizado no canto inferior direito.

Estamos comprometidos em proporcionar um atendimento eficiente e acessível aos nossos beneficiários, garantindo que suas necessidades sejam atendidas da melhor forma possível.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
        </Container>
    </Box>
    )
}