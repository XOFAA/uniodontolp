
import { Box, Button, Container, Typography } from '@mui/material';
import { VantagensBeneficio } from '../../components/vantagensbeneficio/VantagensBeneficios';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const ServidorPublico=()=>{
    return(
        <>
       
        <VantagensBeneficio/>
        <Container>
        <Box sx={{display:'flex',mt:5}}>
           <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069',textAlign:'center'}}><span style={{fontWeight:'bold'}}>Para saber mais informações</span>, fale com um consultor ou clique no botão ao lado</Typography> 
       
           <Button variant='contained' sx={{p:4,width:'350px',borderRadius: '10px', bgcolor: '#107E75'}}>
         
           <img src='images/pessoajuridica/icon-wpp.png'/>
           
            <Typography sx={{fontSize:'22px',fontStyle:'italic'}}>  Fale com um <span style={{fontWeight:'bolder'}}>CONSULTOR</span></Typography>
           </Button>
         
       
        </Box>
        </Container>
        </>
    )
}