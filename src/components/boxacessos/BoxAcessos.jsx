import { Box, Button, Container, Link, Typography } from "@mui/material"

export const BoxAcessos = () => {
    return (
        <Container sx={{mt:4}} >
            <Typography sx={{fontSize:'28px',fontStyle:'italic',textAlign:'center',color:"#363636"}}><span style={{fontWeight:'bold'}}>Já é Uniodonto?</span> Acesse seu portal</Typography>
            <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}, alignItems:'center',justifyContent: 'space-between', mt: 3 }}>
            <Link href="/">
                    <Box sx={{width:'200px',height:'100px'}}>
                        <img src="images/botoesacessos/link1.svg" alt="Link 5" width={'100%'} height={'100%'} />
                    </Box>
                </Link>
                <Link href="/">
                <Box sx={{width:'200px',height:'100px'}}>
                        <img src="images/botoesacessos/link2.svg" alt="Link 5" width={'100%'} height={'100%'}/>
                    </Box>
                </Link>
                <Link href="/">
                <Box sx={{width:'200px',height:'100px'}}>
                        <img src="images/botoesacessos/link3.svg" alt="Link 5"width={'100%'} height={'100%'} />
                    </Box>
                </Link>
                <Link href="/">
                <Box sx={{width:'200px',height:'100px'}}>
                        <img src="images/botoesacessos/link4.svg" alt="Link 5"width={'100%'} height={'100%'} />
                    </Box>
                </Link>
                <Link href="/">
                <Box sx={{width:'200px',height:'100px'}}>
                        <img src="images/botoesacessos/link5.svg" alt="Link 5" width={'100%'} height={'100%'}/>
                    </Box>
                </Link>
            </Box>
        </Container>
    )
}
