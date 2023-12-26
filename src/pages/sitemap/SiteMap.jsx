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
       <Typography sx={{color:'#363636',fontSize:'20px',mt:2,fontStyle:'italic'}}>Utilize o sitemap para entender como organizamos as informações, garantindo uma experiência confiável, segura e organizada. Este recurso é projetado para assegurar a acessibilidade de todos que navegam em nosso site.</Typography>
      
       </Box>
       <Faqsitemap/>
       </Container>
       <Footer/>
       </Box>
   
  
    )
}