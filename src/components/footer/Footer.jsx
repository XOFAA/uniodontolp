import { Box, Button, Container, Grid, IconButton, Link, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
export const Footer = () => {
  return (
 

      <Box sx={{bgcolor: '#A60069'}}>
        <Container >
          <Box sx={{pt:5}}>

          <Box sx={{display:'flex',flexDirection:{xs:'column',lg:'row'},alignItems:{xs:'center',lg:'unset'},gap:{lg:7.4,xs:5}}}>
          <Box  sx={{width:'240px',height:'60px'}}>
            <img src='/images/logouniodonto/logouniodonto.png' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            <Box  sx={{width:'120px',height:'30px'}}>
            <img src='/images/logosfooter/codigo_ans.svg' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            <Box  sx={{width:'200px',height:'60px'}}>
            <img src='/images/logosfooter/botao_ans.svg' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            <Box  sx={{width:'120px',height:'60px'}}>
            <img src='/images/logosfooter/google_ssl.svg' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            
            <Box sx={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{fontSize:'18px',fontStyle:'italic',color:'#fff',textAlign:{xs:'center',lg:'unset'}}}> <span style={{fontWeight:'bold'}}>Siga</span> a gente!</Typography>
            <Box sx={{display:'flex',gap:1}}>
            <FacebookIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <InstagramIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <LinkedInIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <YouTubeIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <TelegramIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
           <WhatsAppIcon sx={{height:'30px',width:'30px',color:'#fff'}}/>
            </Box>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'space-between',gap:{xs:2},textAlign:{xs:'center',lg:'unset'},alignItems:{xs:'center',lg:'normal'},mt:2,flexDirection:{xs:'column',lg:'row'}}}>
          <Box sx={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold',fontStyle:'italic',color:'#fff',mt:3}}>Central de<br/>Relacionamento</Typography>
            <Typography sx={{fontSize:'22px',color:'#E1FF7B',fontWeight:'bold',fontStyle:'italic'}}>(92) 2126-0600</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column'}}>
           
            <Typography sx={{fontSize:'18px',fontWeight:'bold',fontStyle:'italic',color:'#fff',mt:3}}>Serviço de Atendimento<br/>ao Beneficiário</Typography>
            <Typography sx={{fontSize:'22px',color:'#E1FF7B',fontWeight:'bold',fontStyle:'italic'}}>(92) 2126-0604</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column'}}>

     
        
          
            <Typography sx={{fontSize:'18px',fontWeight:'bold',fontStyle:'italic',color:'#fff',mt:3}}>Ouvidoria<br/>
            Uniodonto Manaus</Typography>
            <Typography sx={{fontSize:'22px',color:'#E1FF7B',fontWeight:'bold',fontStyle:'italic'}}>(92) 2126-0604</Typography>
          </Box>
          <Box sx={{display:'flex',flexDirection:'column'}}>
            <Typography sx={{fontSize:'18px',fontWeight:'bold',color:'#fff',fontStyle:'italic'}}>Canais de atendimento online<br/> e telefônico</Typography>
            <Box sx={{display:'flex',justifyContent:{md:'flex-start',xs:'center'}}}>
          <Button variant="contained" sx={{mt:1,bgcolor:'#E1FF7B',color:"#363636",fontStyle:'italic',fontWeight:'bold',width:'150px',height:'50px',borderRadius:'5px',fontSize:'18px'}}>Acesse aqui</Button>
          </Box>
          </Box>
          </Box>
          </Box>
          <Box sx={{ width: '100%', height: '1px', backgroundColor: '#fff',my:10}} component={'div'} />
          <Grid container spacing={3}>

            <Grid item xs={12} md={3} >
              <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Você</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px', alignItems: { xs: 'center', md: 'normal' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Segunda via do Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Clube de Vantagens
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Rol de Cobertura
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Pagamento Cartões
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Informe de Rendimentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Pronto Atendimento 24h
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Empresas</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px', alignItems: { xs: 'center', md: 'normal' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Rol de Cobertura
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Segunda via de Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Solicite uma proposta
                </Link>

              </Box>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#E1FF7B', mt: 2, textAlign: { xs: 'center', md: 'unset' } }}>Para Vendedores e Representantes</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px', alignItems: { xs: 'center', md: 'normal' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Portal de Vendas
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Cooperados</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px', alignItems: { xs: 'center', md: 'normal' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Aprovação Online
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Relacionamento com Cooperado
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Portal de Treinamentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Seja nosso Cooperado
                </Link>
              </Box>
              <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#E1FF7B', mt: 2, textAlign: { xs: 'center', md: 'unset' } }}>Para Vendedores e Representantes</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px', alignItems: { xs: 'center', md: 'normal' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Para Colaboradores
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bolder', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Cooperados</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px', alignItems: { xs: 'center', md: 'normal' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Instituicional
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Diretoria Executiva
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Demonstrativo Financeiro
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontStyle: 'italic', fontSize: '16px' }}>
                  Unidades de Atendimento
                </Link>

              </Box>
            </Grid>
          </Grid>





          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'end', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center', md: 'unset' } }}>
            <Box sx={{ width: '200px', height: '100px', display: 'flex', alignItems: 'center' }} component={'div'}  >
              <img src='images/logosfooter/logo_ans.png' alt="Logo" width={'196px'} height={'40px'} />
            </Box>

            <Box sx={{ width: '200px', height: '100px', display: 'flex', justifyContent: 'center' }} component={'div'}  >
              <img src='images/logosfooter/am.png' alt="Logo" width={'132px'} height={'69px'} />
            </Box>
          </Box>

 

          <Grid container spacing={1}>

            <Grid item xs={12} md={6}>

              <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'unset' } }}>
                <Box sx={{ width: '150px', height: '120px', mt: 6 }} component={'div'}  >

                  <img src='images/logosfooter/logo_coop.png' alt="Logo" width={'100%'} height={'100%'} />

                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>



              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'end' }, textAlign: { xs: 'center', md: 'unset' }, mt: 3 }}>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#fff' }}>Uniodonto Manaus Cooperativa Odontológica Ltda</Typography>
                <Typography sx={{ fontSize: '16px', fontStyle: 'italic', color: '#fff' }}>CNPJ 23.031.479/0001-29</Typography>
                <Typography sx={{ fontSize: '15px', fontStyle: 'italic', color: '#fff' }}>Sede Administrativa: Av. Leonardo Malcher, 598, Centro - Manaus/AM - CEP 69010-170</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#fff', mt: 3 }}>Responsável Técnico: Dra. Michele P. Lemos - CRO/AM 3183</Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: { xs: 1, md: 5 }, mt: 5, justifyContent: 'center', flexWrap: { xs: 'wrap', md: 'unset' } }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
                  Termos de Uso e Política de Privacidade
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
                  Segurança no Uso da Internet
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
                  LGPD
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
                  Sitemap
                </Link>

              </Box>
            </Grid>
          </Grid>
          </Container>
        </Box>
  )
}