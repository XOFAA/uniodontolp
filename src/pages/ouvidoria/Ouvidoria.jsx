import { Box, Container, Link, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import { Footer } from "../../components/footer/Footer"
import { FormOuvidoria } from "../../components/formouvidoria/FormOuvidoria"

export const Ouvidoria = () => {
    return (

        <AppWithPreloader>


            <NavBar/>

            <Box sx={{ mt: 20 }}>

                <Container>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: {xs:5,md:3}, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>Ouvidoria</Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}><span style={{ fontWeight: 'bolder' }}>Bem-vindo à nossa Ouvidoria!</span> Aqui na Uniodonto Manaus, estamos dedicados a proporcionar a melhor experiência aos nossos clientes, valorizando suas opiniões e feedback. Sua voz é essencial, e nossa Ouvidoria está pronta para ouvir e resolver suas preocupações, sempre em busca de aprimorar nosso atendimento.</Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Para garantir a melhor assistência, lembre-se de que a Ouvidoria é uma instância de segunda instância. <span style={{ fontWeight: 'bolder' }}>Recomendamos que, caso necessário, entre primeiro em contato com nosso Serviço de Atenção ao Beneficiário (SAB) e obtenha um número de protocolo</span></Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Você pode acionar a Ouvidoria com Protocolo do SAB em mãos, através do formulário abaixo ou pelo e-mail: <Link href="mailto:ouvidoria@uniodontomao.com.br">ouvidoria@uniodontomao.com.br.</Link> </Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic' }}>Estamos aqui para ouvir e melhorar continuamente. Sua experiência importa para nós!</Typography>
                    </Box>
                </Container>
                <Box sx={{ bgcolor: '#A60069', p: 5, mt: 5 }}>
                    <Container>
                        <Typography sx={{ textAlign: 'center', fontSize: '28px', color: '#fff', fontStyle: 'italic' }}><span style={{ fontWeight: 'bold' }}>Como</span> funciona?</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between',flexDirection:{xs:'column',md:'row'},gap:{xs:3,md:0}, alignItems: 'center', mt: 5 }}>
                            <Box sx={{ borderRadius: '10px', bgcolor: '#E1FF7B', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Registro da Solicitação</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Preencha o formulário abaixo com as informações necessárias.</Typography>
                            </Box>
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#FF627F', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Análise</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Nosso time analisará sua solicitação com cuidado</Typography>
                            </Box>
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#50DDFE', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Investigação</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>niciaremos uma investigação completa, se necessário, para entender a situação.</Typography>
                            </Box>
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#FF99A7', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Resposta e resolução</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Você receberá uma resposta dentro do prazo estabelecido..</Typography>
                            </Box>
                                   <Box sx={{ borderRadius: '10px', bgcolor: '#CC9DFF', width: {xs:'300px',md:'200px'}, height:{xs:'170px',md:'250px'}, p: 2 }}>
                                <Typography sx={{ mt: 2, fontSize: '26px', lineHeight: '25.6px', fontStyle: 'italic', fontWeight: 'bolder', color: '#363636' }}>Resolução</Typography>
                                <Typography sx={{ mt: 1, fontSize: '16px', fontStyle: 'italic', color: '#363636' }}>Faremos o possível para resolver sua preocupação e, se aplicável, implementar melhorias em nossos processos.</Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <FormOuvidoria />
                <Footer />
            </Box>

        </AppWithPreloader>



    )
}