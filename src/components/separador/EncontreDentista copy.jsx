import { Box, Button, Typography,Link} from "@mui/material";
import { motion } from "framer-motion";
export const EncontreDentista = () => {
  const boxStyle = {
    backgroundImage: 'url("/images/separadorencontreumdentista/separador_encontre_um_dentista.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100px", // Ajuste a altura conforme necessário
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Adicione position: relative à Box para usá-la como referência na posição do elemento de sobreposição
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Você pode ajustar a opacidade aqui

    zIndex: 1,
  };



  return (
    <Box sx={boxStyle}>
      <Box sx={overlayStyle}></Box>
      <Box sx={{
        zIndex: 2,
        fontSize: "50px",
        color: "#fff",
        fontWeight: "bold",
        display: 'flex',
        gap:{xs:1,md:5},
        alignItems:'center',
        flexDirection:{md:'row',xs:'column'}
      }}>
        <Typography sx={{ fontStyle: 'italic', fontSize: {xs:'17px',md:'28px'}}}>
          <span style={{ fontWeight: "bolder", fontSize: {xs:'25px',md:'28px'}}}>Sempre </span>tem um dentista próximo de você
        </Typography>
        <motion.div
             whileHover={{ scale: 1.1 }} 
             
            
            >
              <Link href="https://seguro.fisistemas.com.br/EncontreSeuDentista/pesquisa;s=311391
" target="_blank">
            
        <Button variant='contained' sx={{ bgcolor: '#E1FF7B','&:hover': {
                bgcolor: '#A60069',color:'#fff'},color: '#363636', fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', textTransform: 'none', width:{xs:'100%',md:'320px'}, height: '40px' }}>Encontre um Dentista</Button>
          </Link>
        </motion.div>
      </Box>
    </Box>
  );
};
