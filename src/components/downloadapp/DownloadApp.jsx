import { Box, Container, Link, Typography } from "@mui/material"

export const DownloadApp =()=>{
    return(
        <Container>
        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:{xs:1,md:5},alignItems:'center',justifyContent:'center',mt:4}}>
        <Typography sx={{fontSize:{xs:'22px',md:'29px'},fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Baixe</span> o app Uniodonto Manaus</Typography>

        <Link href="/">
        <Box>
            <img src="images/downloadapp/botaogoogleplay.png"/>
        </Box>
        </Link>
        <Link href="/">
        <Box>
            <img src="images/downloadapp/botaoappstore.png"/>
        </Box>
        </Link>
        </Box>
        </Container>
    )
}