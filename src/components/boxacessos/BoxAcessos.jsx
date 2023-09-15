
import { Box, Button, Container, Link, Typography, duration, useMediaQuery } from "@mui/material"
import { motion } from "framer-motion";
export const BoxAcessos = () => {


  return (
    <Container sx={{ mt: { xs: 20, md: 4 } }} >
      <Typography sx={{ fontSize: '28px', fontStyle: 'italic', textAlign: 'center', color: "#363636" }}><span style={{ fontWeight: 'bold' }}>Já é Uniodonto?</span> Acesse seu portal</Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', mt: 3, gap: { xs: 2, md: 4 } }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <Link href="http://onelink.to/uniodontomao" target="_blank">
            <Box sx={{ width: "100%",height:{xs:'150px',md:'100%'} }}>
              <img
                src="images/botoesacessos/link1.svg"
                alt="Link 5"
                width={"100%"}
                height={"100%"}
              />
            </Box>
          </Link>
        </motion.div>

      
          <motion.div
            whileHover={{ scale: 1.1 }}
          >
            <Link target="_blank" >
            <Box sx={{ width: "100%",height:{xs:'150px',md:'100%'} }}>
                <img src="images/botoesacessos/link2.svg" alt="Link 5" width={'100%'} height={'100%'} />
              </Box>
            </Link>
          </motion.div>
     

        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx" target="_blank">
          <Box sx={{ width: "100%",height:{xs:'150px',md:'100%'} }}>
              <img src="images/botoesacessos/link3.svg" alt="Link 5" width={'100%'} height={'100%'} />
            </Box>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <Link href="/" target="_blank">
          <Box sx={{ width: "100%",height:{xs:'150px',md:'100%'} }}>
              <img src="images/botoesacessos/link4.svg" alt="Link 5" width={'100%'} height={'100%'} />
            </Box>
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
        >
          <Link href="/" target="_blank">
          <Box sx={{ width: "100%",height:{xs:'150px',md:'100%'} }}>
              <img src="images/botoesacessos/link5.svg" alt="Link 5" width={'100%'} height={'100%'} />
            </Box>
          </Link>

        </motion.div>
      </Box>
    </Container>
  )
}
