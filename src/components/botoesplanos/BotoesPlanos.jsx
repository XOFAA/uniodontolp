import { Box, Typography } from "@mui/material"


export const BotoesPlanos = () => {
    return (
        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:{md:5,xs:2},width:{xs:'100vw',md:'100%'}}}>


            <Box sx={{ borderRadius: 4, width:{lg:'540px',md:'400px',xs:'100%'}, height: '100px', bgcolor: '#A60069' }}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <img src="/images/botoesplanos/usergroup.png"/>
                    <Typography sx={{ color: '#fff', fontStyle: 'italic', fontSize: '26px' }}><span style={{ fontSize: '26px', fontWeight: 'bold' }}>Planos</span> para você e<br />sua família</Typography>
                </Box>

            </Box>

            <Box sx={{ borderRadius: 5, width: {lg:'540px',md:'400px'}, height: '100px', bgcolor: '#A60069' }}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                  <img src="/images/botoesplanos/iconuserbusiness.png"/>
                    <Typography sx={{ color: '#fff', fontStyle: 'italic', fontSize: '26px' }}><span style={{ fontSize: '26px', fontWeight: 'bold' }}>Planos</span> para sua <br/>empresa</Typography>
                </Box>

            </Box>
        </Box>
    )
}