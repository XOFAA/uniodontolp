import { Box, Container, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import { Faqdoc } from "../../components/faqdoc/Faqdoc"
import { Footer } from "../../components/footer/Footer"

export const DocumentosImportantes =()=>{
    return(
        <Box>

     
        <Container sx={{mt:20}}>
        <NavBar/>

        <Box sx={{textAlign:'center'}}>

    <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069'}}>Documentos <span style={{fontWeight:'bolder'}}>Importantes</span></Typography>
       <Typography sx={{color:'#363636',fontSize:'20px',mt:2,fontStyle:'italic'}}>Nesta página, disponibilizamos todos os documentos importantes para download no formato PDF, vinculados aos nossos serviços, caso necessite.</Typography>
      
       </Box>
       <Faqdoc/>
       </Container>
       <Footer/>
       </Box>
    )
}