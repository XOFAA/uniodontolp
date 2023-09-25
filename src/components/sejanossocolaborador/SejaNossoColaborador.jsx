import React from 'react';
import {Box,Button,Container, Typography,TextField,MenuItem, Link } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const SejaNossoColaborador =()=>{
    const numParcerias = 6;
  const parcerias = Array.from({ length: numParcerias }, (_, index) => `/images/nossosbeneficios/link${index + 1}.png`);
  const Setores = [
    {
      value: 'Atendimento',
    },
    {
      value: 'Vendas',
    
    },
    {
      value: 'Saúde odontológica',
    
    },
    {
      value: 'Recursos Humanos',
    
    }, {
      value: 'Tecnologia da Informação(TI)',
    
    },
  ];
    return(
        <>
        <Box  className="CarouselParcerias"  sx={{height:'100%'}}>
            <Box sx={{display:'flex',bgcolor:'#A60069',p:4}}>
             

            <Container>

            <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
            <Typography sx={{fontStyle:'italic',fontSize:'28px',color:'#fff'}}>Junte-se a nós e faça a diferença!</Typography>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',fontWeight:'bolder',color:'#fff'}}>A Uniodonto Manaus espera por você!</Typography>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',color:'#fff',my:3}}>Estamos em busca de novos talentos para se juntarem a nós. Se você é apaixonado pelo que faz, valoriza um ambiente de trabalho colaborativo e deseja fazer a diferença, seja nosso Colaborador! Preencha o formulário abaixo e venha fazer parte de nosso time dedicado e comprometido com as pessoas.</Typography>
            </Box>
            </Container>
            </Box>
        <Container>
            <Typography sx={{ fontStyle: 'italic', textAlign: 'center', fontSize: '28px',color:'#222222',pt:5}}>
            Nossos  <span style={{ fontWeight: 'bold',fontSize:'28px',color:'#222222' }}> Benefícios</span> 
            </Typography>
        <Box>
  
        <Swiper
            
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
           spaceBetween={10}
           
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
             breakpoints={{
                0: {
                  slidesPerView: 1,
                 
                },
                400:{
                  slidesPerView: 1,
                },
                600:{
                  slidesPerView: 3,
                },
                900: {
                  slidesPerView: 4,
                 
                },
                1200: {
                  slidesPerView: 5,
                  
                },
                1536:{
                  slidesPerView: 5,
                }
              }}    
             navigation
              loop={true}
             
           >
          
           

          {parcerias.map((parceria, index) => (
        <SwiperSlide key={index}>
          <Box>
            <img src={parceria} alt={`Parceria ${index + 1}`} />
          </Box>
        </SwiperSlide>
      ))}

           </Swiper>
           </Box>

    
           <Box sx={{display:'flex',flexDirection:'column',mt:5,boxShadow:5,p:5,borderRadius:'10px',mb:5}}>
            <Box sx={{display:'flex'}}>
              <Box sx={{display:'flex',flexDirection:'column',textAlign:{xs:'center',md:'start'}}}>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Participe</span> do Banco de Talentos</Typography> 
            <Typography sx={{color:'#363636',fontSize:'20px',fontStyle:'italic'}}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação pelo recursos humanos.</Typography>
            
              </Box>
              <Link href='https://linklist.bio/vagasuniomao' target='_blank' sx={{textDecoration:'none'}}>
            
            <Button variant='contained' sx={{display:{xs:'none',md:'flex'},textTransform:'none',height:'124px',width:'370px',borderRadius: '10px', bgcolor: '#A60069',mr:5}}>
           <img src='images/nossosbeneficios/icon1.png' style={{marginLeft:'30px'}}/>
            <Typography sx={{fontSize:'22px',fontStyle:'italic',textAlign:'center'}}>Conheça vagas <span style={{fontWeight:'bolder',fontSize:'27px'}}>Disponíveis</span></Typography>
           </Button>
           </Link>
            </Box>
         
          
        <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:3}}>
        <TextField
        label='Nome Completo'
        required
        
        />
        
        <TextField
        label='Contato de Telefone/Celular/Whatsapp'
        required
        />
        
        <TextField
        label='E-mail do solicitante'
        required
        />

        <TextField
        label='Selecione sua formação acadêmica'
        required
        />
        
        <TextField
        label='Caso tenha especialização acadêmica, favor fazer um resumo'
        required
        />
        
      
           <TextField
          id="outlined-select-currency"
          select
          label="'Selecione a área de atuação que deseja ou tem interesse em ingressar (atendimento, vendas, saúde odontológica, recursos humanos, TI etc)"
          required
          helperText="Selecione a sua área de atuação"
        >
          {Setores.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
        <TextField
        label='Caso queira, pode deixar um resumo sobre você. Iremos gostar!'
      
        />
        <TextField
        label='Inclua em anexo seu currículo para verificação (jpg, jpeg, png, pdf, doc e docx)'
        required
        type='file'
          InputLabelProps={{shrink:true}}
        />
          </Box>
       <Box sx={{mt:3}}>
        <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'15px'}}><span style={{fontWeight:'bolder'}}>LGPD:</span> Ao enviar este formulário, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
       </Box>
       <Box sx={{display:'flex',justifyContent:'center',mt:5}}>
        <Button variant='contained'sx={{width:'256px',height:'48px'}}>Enviar Currículo</Button>
       </Box>
        </Box>

     
    
           </Container>
            </Box>
            
 </>
 
    )
}