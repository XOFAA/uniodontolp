import { Box, Container, Link, Typography } from "@mui/material"
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader"
import { NavBar } from "../../components/navbar/NavBar"
import { Faqlgpd } from "../../components/faqlgpd/Faqlgpd"
import { Footer } from "../../components/footer/Footer"

export const Lgpd = () => {

    return (

        <AppWithPreloader>
            <NavBar />

            <Box sx={{ mt: 20 }}>



                <Container>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bold', color: '#A60069' }}>Lei Geral de Proteção de Dados</Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic', mt: 3 }}>A Lei Geral de Proteção de Dados (LGPD) define diretrizes para o tratamento de dados pessoais, tanto em meios físicos quanto digitais,</Typography>
                        <Typography sx={{ fontSize: '20px', fontStyle: 'italic', fontWeight: 'bold' }}>visando à proteção dos direitos de liberdade e privacidade das pessoas físicas.</Typography>

                    </Box>


                </Container>
                <Box sx={{ bgcolor: '#A60069',mt:5}}>
                    <Container>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 5, md: 3 }, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                            <Typography sx={{color:'#fff',fontSize: '20px', fontStyle: 'italic', py:5}}>Comprometidos com a confiança e privacidade dos nossos beneficiários, cooperados, clientes e parceiros, a Uniodonto Manaus disponibiliza canais de atendimento para atender às solicitações da Lei Geral de Proteção de Dados.
                                Além disso, fornecemos informações detalhadas em nossa Diretiva de Privacidade, para que você compreenda como seus dados são utilizados e compartilhados.</Typography>
                        </Box>
                    </Container>

                </Box>
                <Faqlgpd/>
                <Footer/>
            </Box>
        </AppWithPreloader>

    )
}