import { Box, Button, Container, Typography } from "@mui/material"
import BusinessIcon from '@mui/icons-material/Business';
export const VejaOsPlanos =()=>{
    return(
        <Container>
        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},justifyContent:'space-around',alignItems:'center',gap:2,height:{xs:'100%',md:'200px'},bgcolor:'#fff',boxShadow:2,mt:10,p:5,borderRadius:'10px'}}>

        <Box>
        <BusinessIcon sx={{fontSize:'75px',color:'#363636'}}/>
        </Box>
        <Box sx={{textAlign:'center',width:{xs:'100%',md:'500px'}}}>
        <Typography sx={{fontSize:'28px',fontStyle:'italic',textAlign:{md:'start',xs:'center'}}}>Uniodonto Manaus
        <span style={{fontWeight:'bold',fontStyle:'italic'}}> Empresas</span>&Negócios
        </Typography>
        <Typography sx={{fontSize:'18px',fontStyle:'italic',textAlign:{md:'start',xs:'center'}}}>Temos planos pensados para trazer saúde bucal e satisfação a todos os colaboradores de sua empresa ou negócio.</Typography>
        </Box>
        <Box>
        <Button variant="contained" sx={{height:'51px',width:'257px',fontSize:'18px',color:'#363636',fontStyle:'italic',fontWeight:'bold',bgcolor:'#60EBFF',textTransform:'none'}}>Veja os Planos</Button>
        </Box>
        </Box>
        </Container>
    )
}