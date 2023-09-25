import React from 'react';
import {Box,Button,Container, Typography,TextField} from '@mui/material';

export const SejaUmCooperado =()=>{
    

    return(
        <>
        <Box  className="CarouselParcerias"  sx={{height:'100%'}}>
            <Box sx={{display:'flex',bgcolor:'#A60069',p:4}}>
             

            <Container>

            <Box sx={{display:'flex',flexDirection:'column',textAlign:'center'}}>
            <Typography sx={{fontStyle:'italic',fontSize:'28px',color:'#fff'}}>Junte-se a nós e faça a diferença!</Typography>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',fontWeight:'bolder',color:'#fff'}}>A Uniodonto Manaus espera por você!</Typography>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',color:'#fff',my:3}}>Estamos à procura de talentosos cirurgiões-dentistas para se estarem com a gente. Se você é apaixonado pela odontologia, valoriza a colaboração entre profissionais e deseja fazer a diferença na saúde bucal das pessoas, 
            junte-se ao nosso time comprometido em proporcionar cuidados odontológicos de alta qualidade!</Typography>
            </Box>
            </Container>
            </Box>
        <Container>
    

    
           <Box sx={{display:'flex',flexDirection:'column',mt:10,boxShadow:5,p:5,borderRadius:'10px',mb:5}}>
            <Box sx={{display:'flex'}}>
              <Box sx={{display:'flex',flexDirection:'column',textAlign:{xs:'center',md:'start'}}}>
            <Typography sx={{fontSize:'28px',fontStyle:'italic',color:'#A60069'}}><span style={{fontWeight:'bold'}}>Seja</span> nosso Dentista Cooperado</Typography> 
            <Typography sx={{color:'#363636',fontSize:'20px',fontStyle:'italic'}}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação por parte dos conselhos diretivos</Typography>
            
              </Box>
         
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
        label='Locais de atendimento (se tiver mais de um local, separar)'
        required
        />
        
        <TextField
        label='Por favor, informe a instituição de graduação na qual se formou'
        required
        />
        
        <TextField
        label='Por favor, informe o ano de conclusão de sua graduação'
        required  
        />
         <TextField
        label='Caso tenha especialização acadêmica, favor fazer um resumo.'
        required  
        />
             <TextField
        label='Caso tenha especialização odontológica, favor fazer um resumo.'
        required  
        />
          <TextField
        label='Queremos saber um pouco das suas áreas de atuação na odontologia, fazendo um breve resumo'
        required  
        />
        <TextField
        label='Por favor, informe seu número de registro no CRO'
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
        <Typography sx={{color:'#363636',fontStyle:'italic',fontSize:'15px'}}><span style={{fontWeight:'bolder'}}>LGPD:</span> Ao enviar este formulário, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
       </Box>
       <Box sx={{display:'flex',justifyContent:'center',mt:5}}>
        <Button variant='contained' sx={{width:'256px',height:'48px'}}>Enviar Currículo</Button>
       </Box>
        </Box>

     
    
           </Container>
            </Box>
            
 </>
 
    )
}