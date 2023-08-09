import { Box, Container, Grid, Link, Typography } from "@mui/material"


export const Importante =()=>{
    return(
        <Container>

            <Box sx={{my:5}}>
        <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222' }}>
        <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#222222' }}>Importante</span> para você
        </Typography>
        </Box>

        <Grid container spacing={2}>

        <Grid item xs={12} md={6} >
        <Box sx={{backgroundImage: 'url("/images/importante/CapacitaCoop.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:{xs:'450px',md:'400px'}}}>
            <Box sx={{p:5}}>
            <Typography sx={{fontSize:'16px',fontStyle:'italic',color:'#fff'}}>Conte com o CapacitaCoop!</Typography>
            <Typography sx={{fontSize:'29px',fontStyle:'italic',fontWeight:'bold',color:'#fff'}}>Curso grátis de Gestão de Produtos e Serviços</Typography>
            <Typography sx={{fontSize:'15px',color:'#fff',fontStyle:'italic',mt:5}}>Utilize técnicas de avaliação de produtos e serviços para definir estratégias mais competitivas!</Typography>
           <Box sx={{mt:8}}> <Link sx={{color:'#fff',fontSize:'15px',fontStyle:'italic',mt:10,textDecorationColor:'#fff'}}>Inscreva-se agora</Link></Box>
            </Box>
     
        </Box>
        </Grid>
        <Grid item xs={12}md={6}>
        <Box sx={{backgroundImage: 'url("/images/importante/Leão.png")',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:{xs:'450px',md:'400px'}}}>
            <Box sx={{p:5}}>
            <Typography sx={{fontSize:'16px',fontStyle:'italic',color:'#fff'}}>Não caia na malha fina!</Typography>
            <Typography sx={{fontSize:'29px',fontStyle:'italic',fontWeight:'bold',color:'#fff'}}>Informe de Rendimentos<br/>disponível para download</Typography>
            <Typography sx={{fontSize:'15px',color:'#fff',fontStyle:'italic',mt:5,width:'244px'}}>Para baixar seu comprovante de rendimentos, selecione o ano e digite o número do CPF do Titular do plano</Typography>
           <Box sx={{mt:8}}> <Link sx={{color:'#fff',fontSize:'15px',fontStyle:'italic',mt:10,textDecorationColor:'#fff'}}>Acesse aqui</Link></Box>
            </Box>
        </Box>
        </Grid>

        </Grid>
        </Container>
    )
}