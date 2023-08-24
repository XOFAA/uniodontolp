import { Box, Button, Container, Typography } from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
export const VejaOsPlanos =()=>{
    return(
        <Container>
        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'center',alignItems:'center',gap:3,height:{xs:'100%',md:'200px'},bgcolor:'#fff',boxShadow:2,my:5,p:5,borderRadius:'10px'}}>

        <Box>
        <BusinessIcon sx={{fontSize:'80px',color:'#363636'}}/>
        </Box>
        <Box sx={{textAlign:'center',width:{xs:'100%',md:'500px'}}}>
        <Typography sx={{color:'#222222',fontSize:'28px',fontStyle:'italic',textAlign:{md:'start',xs:'center'}}}><span style={{fontWeight:'bold'}}>Planos </span>
         para sua empresa
        </Typography>
        <Typography sx={{fontSize:'18px',fontStyle:'italic',textAlign:{md:'start',xs:'center'}}}>Tenha um plano que garanta sorrisos saudáveis aos colaboradores da sua empresa, seja MEI a grandes empresas, partir de apenas 2 vidas, oferecemos cuidados excepcionais.</Typography>
        </Box>
        <Box>
        <Button variant="contained" sx={{height:'51px',width:'257px',fontSize:'18px',color:'#363636',fontStyle:'italic',fontWeight:'bold',bgcolor:'#60EBFF',textTransform:'none'}}>Solicite uma Proposta</Button>
        </Box>
        </Box>
        </Container>
    )
}