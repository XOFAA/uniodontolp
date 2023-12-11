import { Box, Container, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import { Faqsitemap } from "../../components/faqsitemap/Faqsitemap"
import { Footer } from "../../components/footer/Footer"

export const SiteMap =()=>{
    return(
        <Box>
        <Container sx={{mt:20}}>
        <NavBar/>

        <Box sx={{textAlign:'center'}}>

    <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069',fontWeight:'bolder'}}>Sitemap</Typography>
       <Typography sx={{color:'#363636',fontSize:'20px',mt:2,fontStyle:'italic'}}>O Centro de Proteção de Dados da Uniodonto Manaus é um reforço de nosso compromisso com a segurança dos seus dados, privacidade e práticas seguras na internet. Explore para entender como coletamos, usamos e protegemos suas informações, garantindo seus direitos e uma experiência confiável, bem como se manter seguro no uso da internet. Sua privacidade é nossa prioridade.</Typography>
      
       </Box>
       <Faqsitemap/>
       </Container>
       <Footer/>
       </Box>
   
  
    )
}