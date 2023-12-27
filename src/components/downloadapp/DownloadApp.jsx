import { Box, Container, Link, Typography } from "@mui/material"

export const DownloadApp =()=>{
    return(
      
   

       
         <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 1, md: 2 }, alignItems: 'center' }}>
            <Typography sx={{ textAlign: 'center', fontSize: { xs: '22px', md: '20px' }, fontStyle: 'italic', color: '#363636' }}><span style={{ fontWeight: 'bold' }}>Baixe</span> o app Uniodonto Manaus</Typography>

            <Link href="https://onelink.to/appuniomao" sx={{height:'50px'}}>
          
                <img src="images/downloadapp/botaogoogleplay.png" width={'100%'} height={'100%'} />
           
            </Link>
            <Link href="https://onelink.to/appuniomao" sx={{height:'50px'}}>
        
                <img src="images/downloadapp/botaoappstore.png" width={'100%'} height={'100%'} />
           
            </Link>
          </Box>
       
    )
}