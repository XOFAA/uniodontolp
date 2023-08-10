import { Box, Container, Grid, Link, Typography } from "@mui/material"
export const NovidadesBlog =()=>{
    return(
        <Container>
            
        <Box sx={{my:5}}>
    <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222' }}>
    <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#222222' }}>Novidades</span> de nossas redes sociais e blog
    </Typography>
    </Box>

    <Grid container spacing={{md:5}}>

    <Grid item xs={12} md={6} >
    <Box sx={{mt:{xs:0,md:3},width:{xs:'100%',md:'100%'},maxHeight:{xs:'200px',md:'250px',sm:'100%'}}}>
       <img src="/images/novidadesblog/link1.png" height={'100%'} width={'100%'}/>
    </Box>
    <Box sx={{mt:{xs:0,md:3},width:{xs:'100%',md:'100%'},maxHeight:{xs:'200px',md:'250px',sm:'100%'}}}>
       <img src="/images/novidadesblog/link2.png" height={'100%'} width={'100%'}/>
    </Box>
    </Grid>
    <Grid item xs={12} md={6} >
    <Box sx={{mt:{xs:0,md:3},width:{xs:'100%',md:'100%'},maxHeight:{xs:'200px',md:'250px',sm:'100%'}}}>
       <img src="/images/novidadesblog/link3.png" height={'100%'} width={'100%'}/>
    </Box>
    <Box sx={{mt:{xs:0,md:3},width:{xs:'100%',md:'100%'},maxHeight:{xs:'200px',md:'250px',sm:'100%'}}}>
       <img src="/images/novidadesblog/link4.png" height={'100%'} width={'100%'}/>
    </Box>
    </Grid>

    </Grid>
    </Container>
    )
}