import { Box, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion";

export const BotoesPlanos = () => {
    const navigate=useNavigate();

    const DirecionaPlanoJuridica=()=>{
        navigate('/pessoajuridica')
    }
    const DirecionaPlanoFisica=()=>{
        navigate('/pessoafisica')
    }

    return (
        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:{md:5,xs:2},width:{xs:'95vw',md:'100%'}}}>

        <motion.div
         initial={{y:-800}}
         animate={{y:0}}
         transition={{duration:1,type:'spring'}}
         whileHover={{ scale: 1.1 }} 
        >


            <Box sx={{ borderRadius: 5, width: {lg:'540px',md:'400px'}, height: '100px', bgcolor: '#A60069',cursor:'pointer'}} onClick={DirecionaPlanoFisica}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <img src="/images/botoesplanos/usergroup.png"/>
                    <Typography sx={{ color: '#fff', fontStyle: 'italic', fontSize: '26px' }}><span style={{ fontSize: '26px', fontWeight: 'bold' }}>Planos</span> para você e<br />sua família</Typography>
                </Box>

            </Box>
            </motion.div>
            <motion.div
             initial={{y:-800}}
             animate={{y:0}}
             transition={{duration:1,type:'spring'}}
             whileHover={{ scale: 1.1 }} 
            
            >

           
            <Box sx={{ borderRadius: 5, width: {lg:'540px',md:'400px'}, height: '100px', bgcolor: '#A60069',cursor:'pointer'}} onClick={DirecionaPlanoJuridica}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                  <img src="/images/botoesplanos/iconuserbusiness.png"/>
                    <Typography sx={{ color: '#fff', fontStyle: 'italic', fontSize: '26px' }}><span style={{ fontSize: '26px', fontWeight: 'bold' }}>Planos</span> para sua <br/>empresa</Typography>
                </Box>
             
            </Box>
            </motion.div>
        </Box>
    )
}