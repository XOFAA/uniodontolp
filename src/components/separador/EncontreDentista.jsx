import { Box, Button, Container, Link, Typography } from "@mui/material";

export const EncontreDentista = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/separadorencontreumdentista/separador_encontre_um_dentista.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: {xs:'160px',md:'96px'},
       display:'flex',
      
      alignItems: 'center',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection:{xs:'column',md:'row'},
            gap: {xs:1,md:5},
            justifyContent:'center',
            textAlign:'center'
           
          }}
        >
           <Typography sx={{ color:'#fff',fontStyle: 'italic', fontSize: {xs:'17px',md:'28px'}}}>
          <span style={{ fontWeight: "bolder", fontSize: {xs:'25px',md:'28px'}}}>Sempre </span>tem um dentista próximo de você
        </Typography>
        <Link href="https://seguro.fisistemas.com.br/EncontreSeuDentista/pesquisa;s=311391
" target="_blank">
            
        <Button variant='contained' sx={{ bgcolor: '#E1FF7B','&:hover': {
                bgcolor: '#A60069',color:'#fff'},color: '#363636', fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', textTransform: 'none', width:{xs:'100%',md:'320px'}, height: '40px' }}>Encontre um Dentista</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};
