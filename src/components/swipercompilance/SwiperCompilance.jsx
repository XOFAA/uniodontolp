import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';





import { Box, Typography } from '@mui/material';
export const SwiperCompilance =()=>{
    return(
        <Box sx={{p:5}}>
        <Swiper
        
        grabCursor
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
          
            },
            768: {
              slidesPerView: 2,
              spaceBetween: -5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: -80,
            },
            1440: {
                slidesPerView: 3,
                spaceBetween: -80,
              },
          }}
      
          className="mySwiper"
        >
          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Responsabilidade:</span> Assumimos a responsabilidade pelo que fazemos, assegurando que nossas operações sejam conduzidas de maneira responsável e de acordo com todas as normas.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Ética:</span> Agimos com integridade e ética em todas as nossas interações, garantindo que nossos membros e parceiros de negócios possam confiar em nós plenamente.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Sustentabilidade:</span> Consideramos a sustentabilidade em todas as nossas decisões, buscando um impacto positivo em nossa comunidade e no meio ambiente.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Compromisso:</span> Mantemos nosso compromisso com a excelência e a qualidade, aplicando melhoria contínua de nossos serviços.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Respeito:</span> Respeitamos todas as pessoas, suas opiniões e suas necessidades, promovendo um ambiente inclusivo e diversificado.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}> Cooperação:</span> Trabalhamos em time e colaboramos para alcançar nossos objetivos comuns, fortalecendo nossa capacidade de enfrentar desafios.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Transparência:</span> Mantemos uma cultura de transparência, fornecendo informações claras e acessíveis sobre nossas operações e práticas.</Typography>
                    </Box> 
          </SwiperSlide>
          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Integridade:</span> Agimos com integridade inabalável, seguindo estritamente as regras e regulamentos, mesmo quando ninguém está olhando.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Atitude de Inovação:</span> Buscamos constantemente maneiras eficientes e mais eficazes de fazer as coisas, mantendo-nos à frente das mudanças no setor odontológico.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Competência:</span> Investimos na formação e no desenvolvimento de nossos cooperados e colaboradores para garantir que tenhamos a experiência e o conhecimento necessários para operar com excelência.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Credibilidade:</span> Construímos a confiança de nossos membros e parceiros de negócios por meio de nossa consistência e dedicação à qualidade.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Equidade:</span> Promovemos a equidade em todas as nossas práticas, assegurando que todos sejam tratados com justiça e igualdade</Typography>
                    </Box> 
          </SwiperSlide>


        </Swiper>
        </Box>
    );
  }
