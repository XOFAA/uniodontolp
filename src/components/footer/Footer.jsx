import { Box, Button, Container, Grid, IconButton, Link, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
export const Footer =()=>{
    return(
<>

       <Box sx={{height:{xs:'100%',md:'250px'},bgcolor:'#A60069',mt:10,mb:3}}>
        <Container>
        <Grid container spacing={3}>

        <Grid item xs={12} md={3} >
        <Box sx={{pt:2}}>
        <Box sx={{ paddingRight: 5, py: 1 }}>
            <Box sx={{width:'200px',height:'50px'}}  component={'div'}  >
            <img src='LogoUniodonto.png' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
          </Box>

          <Box sx={{mt:{xs:0,md:3}}}>
            <Box sx={{display:'flex',gap:1}}>
          <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#fff'}}>Central de <br/> Relacionamento <WhatsAppIcon sx={{ml:1,fontSize:'30px',color:'#fff'}}/></Typography>
        
          </Box>
          <Typography sx={{fontSize:'26px',fontWeight:'bolder',color:'#E1FF7B'}}>(92) 2126-0600</Typography>
          </Box>
        </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Box sx={{pt:2}}>
        <Box sx={{ paddingRight: 5, py: 1,display:'flex',gap:3}}>
            <Box sx={{width:'60px',height:'50px'}}  component={'div'}  >
            <img src='Botão ANS.png' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            <Box sx={{width:'110px',height:'20px',mt:2}}  component={'div'}  >
            <img src='Código ANS.PNG' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
          </Box>

          <Box sx={{mt:{xs:0,md:3}}}>
            <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#fff'}}>Serviço de Atendimento ao Beneficiário  <WhatsAppIcon sx={{ml:1,fontSize:'30px',color:'#fff'}}/></Typography>
         
       
          </Box>
          <Typography sx={{fontSize:'26px',fontWeight:'bolder',color:'#E1FF7B'}}>(92) 2126-0604</Typography>
          </Box>
        </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{pt:2}}>
      

        <Box sx={{mt:{xs:0,md:3}}}>
            <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#fff',mt:{xs:0,md:8}}}>Ouvidoria<br/> Uniodonto Manaus  <WhatsAppIcon sx={{ml:1,fontSize:'30px',color:'#fff'}}/></Typography>
         
       
          </Box>
          <Typography sx={{fontSize:'26px',fontWeight:'bolder',color:'#E1FF7B'}}>(92) 2126-0604</Typography>
          </Box>
        </Box>
        </Grid>
        <Grid item md={3}>
        <Box sx={{pt:2}}>
        <Box sx={{display:'flex',gap:1}}>
           <FacebookIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <InstagramIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <LinkedInIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <YouTubeIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <TelegramIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <WhatsAppIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
          </Box>

          <Box sx={{mt:{xs:0,md:3}}}>
            <Box sx={{display:'flex'}}>
          <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#fff'}}>Canais de atendimento online e telefônico<WhatsAppIcon sx={{ml:1,fontSize:'30px',color:'#fff'}}/></Typography>
         
       
          </Box>
          <Button variant="contained" sx={{mt:3,bgcolor:'#E1FF7B',color:"#363636",fontWeight:'bolder',width:'200px',height:'40px',borderRadius:'20px',fontSize:'24px'}}>Acesse aqui</Button>
          </Box>
        </Box>
        </Grid>
        
        </Grid>
        </Container>

       </Box>

       <Box sx={{bgcolor:'#363636',height:{md:'450px',xs:'100%'}}}>
        <Container>
        <Grid container spacing={3}>

        <Grid item xs={12} md={3} >
        <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#E1FF7B'}}>Para Você</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Segunda via do Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Clube de Vantagens
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Renegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Rol de Cobertura
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Pagamento Cartões
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Informe de Rendimentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Pronto Atendimento 24h
                </Link>
              </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#E1FF7B'}}>Para Empresas</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Rol de Cobertura
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                  Segunda via de Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Renegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Solicite uma proposta
                </Link>
            
              </Box>
              <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#E1FF7B',mt:2}}>Para Vendedores e Representantes</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
               Portal de Vendas
                </Link>
                </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#E1FF7B'}}>Para Cooperados</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Aprovação Online
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                  Relacionamento com Cooperado
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Portal de Treinamentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Seja nosso Cooperado
                </Link>
              </Box>
              <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#E1FF7B',mt:2}}>Para Vendedores e Representantes</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
              Para Colaboradores
                </Link>
                </Box>
        </Grid>
        <Grid item xs={12} md={3}>
        <Typography sx={{fontSize:'18px',fontWeight:'bolder',color:'#E1FF7B'}}>Para Cooperados</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Instituicional
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                Diretoria Executiva
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Demonstrativo Financeiro
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff',fontStyle:'italic' ,fontSize:'16px'}}>
                 Unidades de Atendimento
                </Link>
                
              </Box>
        </Grid>
        </Grid>
        </Container>
       </Box>

       <Box sx={{bgcolor:'#363636',height:{md:'400px',xs:'100%'}}}>
        <Container>
        <Box sx={{display:'flex',gap:2,justifyContent:'end'}}>
            <Box sx={{width:'200px',height:'100px',display:'flex',alignItems:'center'}}  component={'div'}  >
            <img src='Logo ANS.PNG' alt="Logo" width={'196px'} height={'40px'}/>
            </Box>
            
            <Box sx={{width:'200px',height:'100px'}}  component={'div'}  >
            <img src='AM.PNG' alt="Logo" width={'132px'} height={'69px'}/>
            </Box>
          </Box>
 <Box sx={{ width: '100%', height: '1px', backgroundColor: '#fff' }} component={'div'} />
 
        <Grid container spacing={1}>

        <Grid item xs={12} md={6}>

        <Box sx={{width:'150px',height:'120px',display:'flex',mt:6}}  component={'div'}  >
          
            <img src='Logo Coop.png' alt="Logo" width={'100%'} height={'100%'}/>
            
            </Box>
        </Grid>
          
        <Grid item xs={12} md={6}>
       
       

          <Box sx={{display:'flex',flexDirection:'column',alignItems:'end',mt:3}}>
            <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff'}}>Uniodonto Manaus Cooperativa Odontológica Ltda</Typography>
            <Typography sx={{fontSize:'16px',fontStyle:'italic',color:'#fff'}}>CNPJ 23.031.479/0001-29</Typography>
            <Typography sx={{fontSize:'15px',fontStyle:'italic',color:'#fff'}}>Sede Administrativa: Av. Leonardo Malcher, 598, Centro - Manaus/AM - CEP 69010-170</Typography>
            <Typography sx={{fontSize:'16px',fontWeight:'bolder',color:'#fff',mt:3}}>Responsável técnico: Dra. Michele P. Lemos - CRO/AM 3183</Typography>
          </Box>
          
          <Box sx={{display:'flex',gap:5,mt:5}}>
          <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight:"bold",fontStyle:"italic" ,fontSize:'12px'}}>
                Termos de Uso e Política de Privacidade
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight:"bold",fontStyle:"italic" ,fontSize:'12px'}}>
                Segurança no Uso da Internet 
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight:"bold",fontStyle:"italic" ,fontSize:'12px'}}>
                LGPD
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight:"bold",fontStyle:"italic" ,fontSize:'12px'}}>
                Sitemap
                </Link>

          </Box>
        </Grid>
        </Grid>
        </Container>
       </Box>
       </>
    )
}