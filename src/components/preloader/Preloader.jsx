import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { motion } from "framer-motion";
const Preloader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',bgcolor:'#000'}}>
   
        <CircularProgress color="primary" size={120} thickness={2} />
        <Box sx={{position:'absolute'}}>
        <motion.div
              animate={

                   { scale: [1, 1.4, 1] }
              }
              transition={{ repeat: Infinity, duration: 1.6 }} 

            >

        <img src="favicon.svg" alt="Favicon" style={{width: '100%', height: '100%' }} />
        </motion.div>
        </Box>
   
    </Box>
  );
};

export default Preloader;
