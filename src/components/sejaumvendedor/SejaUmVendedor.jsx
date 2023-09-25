import React from 'react';
import {Box,Button,Container, Typography,TextField,MenuItem } from '@mui/material';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export const SejaUmVendedor =()=>{
    const numParcerias = 6;
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
        <Box   sx={{height:'100%'}}>
            <Box sx={{display:'flex',bgcolor:'#A60069',p:4}}>
             

            <Container>

            <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
            <Typography sx={{fontStyle:'italic',fontSize:'28px',color:'#fff'}}>Junte-se a nós e faça a diferença!</Typography>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',fontWeight:'bolder',color:'#fff'}}>A Uniodonto Manaus espera por você!</Typography>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',color:'#fff',my:3}}>Estamos à procura de profissionais ambiciosos e apaixonados por vendas para fazerem parte de nosso time. 
Se você tem habilidades em vendas, é movido por desafios e deseja uma carreira dinâmica e recompensadora, venha ser um Consultor de Vendas conosco para ajudar nossos clientes a encontrar as soluções de que precisam!</Typography>
            </Box>
            </Container>
            </Box>
        <Container>
    

    
           <Box sx={{display:'flex',flexDirection:'column',mt:10,boxShadow:5,p:5,borderRadius:'10px',mb:5}}>
            <Box sx={{display:'flex'}}>
              <Box sx={{display:'flex',flexDirection:'column',textAlign:{xs:'center',md:'start'}}}>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Seja</span> nosso Consultor de Vendas</Typography> 
            <Typography sx={{color:'#363636',fontSize:'20px',fontStyle:'italic'}}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação por parte da gerência comercial</Typography>
            
              </Box>
         
            </Box>
         
          
        <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:3}}>
        <TextField
        label='Razão Social'
        required
        
        />
        
        <TextField
        label='Nome Fantasia'
        required
        />
        
        <TextField
        label='CNPJ'
        required
        />

        <TextField
        label='Endereço'
        required
        />
        
        <TextField
        label='Bairro'
        required
        />
        
        <TextField
        label='Cidade'
        required  
        />
         <TextField
        label='Estado'
        required  
        />
             <TextField
        label='Nome do solicitante para contato'
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
        label='Por favor, resuma sobre as especialidades de seu serviço'
        required  
        />
         <TextField
        label='Quais são os serviços prestados na especilidade?'
        required  
        />
        

        <TextField
        label='Ou se preferir, você pode incluir algum arquivo, como ceritificados e outros documentos (jpg, jpeg, png, pdf, doc e docx)'
        required
        type='file'
          InputLabelProps={{shrink:true}}
        />
          </Box>
       <Box sx={{mt:3}}>
        <Typography>Para maiores informações a respeito do procedimento de credenciamento, envie e-mail para gerencia.comercial@unidontomao.com.br.</Typography>
        <Typography sx={{mt:5,color:'#363636',fontStyle:'italic',fontSize:'15px'}}><span style={{fontWeight:'bolder'}}>LGPD:</span> Ao enviar este formulário, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
       </Box>
       <Box sx={{display:'flex',justifyContent:'center',mt:5}}>
       <Button variant='contained' sx={{width:'256px',height:'48px'}}>Enviar Proposta</Button>
       </Box>
        </Box>

     
    
           </Container>
            </Box>
            
 </>
 
    )
}