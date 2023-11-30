import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';





import { Box, Typography } from '@mui/material';
export const SwiperCooperativismo =()=>{
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
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Adesão Voluntária e Livre:</span> As pessoas escolhem aderir à cooperativa de forma voluntária, sem discriminação, e têm liberdade para participar.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Gestão Democrática pelos Membros:</span> As cooperativas são geridas de maneira democrática, onde cada membro tem direito a voto nas decisões importantes, seguindo o princípio "um membro, um voto".</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Participação Econômica dos Membros:</span> Os membros contribuem financeiramente para a cooperativa e participam dos resultados econômicos de acordo com sua contribuição.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Autonomia e Independência:</span> As cooperativas são entidades independentes, autônomas e autossuficientes, mantendo sua liberdade de decisão e aprimorando a cooperação entre si.</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Educação, Formação e Informação:</span> As cooperativas promovem a educação contínua de seus membros, funcionários e comunidade, compartilhando conhecimento sobre o cooperativismo e temas relevantes</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Intercooperação</span> Cooperativas trabalham juntas, fortalecendo o movimento cooperativista por meio da colaboração e da criação de redes de apoio mútuo</Typography>
                    </Box> 
          </SwiperSlide>

          <SwiperSlide>
          <Box sx={{width:{xs:'auto',sm:'260px'},height:'420px',bgcolor:'#fff',borderRadius:'10px',boxShadow:3,p:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Typography sx={{fontSize:'20px',fontStyle:'italic',color:'#363636'}}><span style={{fontWeight:'bold'}}>Preocupação com a Comunidade:</span> As cooperativas atuam para o desenvolvimento sustentável de suas comunidades, aplicando princípios éticos e contribuindo para o bem-estar geral.</Typography>
                    </Box> 
          </SwiperSlide>
         


        </Swiper>
        </Box>
    );
  }
