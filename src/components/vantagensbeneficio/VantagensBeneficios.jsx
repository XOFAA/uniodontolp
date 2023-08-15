import { Box, Container, Typography } from "@mui/material"

export const VantagensBeneficio = () => {
  return (
    <>
 
    <Box sx={{
      
      height:{xs:'100%'},
      background: 'linear-gradient(to bottom, #E1FF7B 50%, #fff 50%)',
    }}>
     <Container>
        <Typography sx={{textAlign:'center',fontSize:'28px',fontStyle:'italic',pt:5}}><span style={{fontWeight:'bold',fontStyle:'italic'}}>Vantagens e Benefícios</span> que oferecemos à sua disposição</Typography>
    <Box sx={{display:'flex',gap:3,mt:5,flexDirection:{xs:'column',md:'row'},alignItems:{xs:'center'}}}>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link1.png" width={'100%'} height={'100%'}/>
    </Box>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link2.png" width={'100%'} height={'100%'}/>
    </Box>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link3.png" width={'100%'} height={'100%'}/>
    </Box>
    <Box sx={{width:'260px',height:'260px'}}>
      <img src="/images/vantagesebeneficio/link4.png" width={'100%'} height={'100%'}/>
    </Box>
    </Box>
     </Container>
    </Box>
    </>
  )
}
