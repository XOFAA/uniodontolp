import { Box, Container, Typography } from "@mui/material"

export const VantagensBeneficio = () => {
  return (
 
    <Box sx={{
      height:'100%',
      background: 'linear-gradient(to bottom, #A60069 50%, #f1f1f1 50%)',
    }}>
     <Container>
        <Typography sx={{textAlign:'center',fontSize:'28px',fontStyle:'italic',pt:5,color:'#fff'}}><span style={{fontWeight:'bold',fontStyle:'italic'}}>Vantagens e Benefícios</span> que oferecemos à sua disposição</Typography>
    <Box sx={{display:'flex',gap:3,mt:5,flexDirection:{xs:'column',md:'row'},alignItems:{xs:'center'}}}>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link1.svg" width={'100%'} height={'100%'}/>
    </Box>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link2.svg" width={'100%'} height={'100%'}/>
    </Box>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link3.svg" width={'100%'} height={'100%'}/>
    </Box>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link4.svg" width={'100%'} height={'100%'}/>
    </Box>
    </Box>
     </Container>
    </Box>

  )
}
