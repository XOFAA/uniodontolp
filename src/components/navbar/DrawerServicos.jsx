import * as React from 'react';
import { Box, Button, Container, Drawer, Grid, Link, Typography } from '@mui/material';
import { DownloadApp } from '../downloadapp/DownloadApp';
import { NavBar } from './NavBar';

export const DrawerServicos = ({ onOpenDrawer, onCloseDrawer }) => {
  return (
    <Drawer
    
      anchor="top"
      open={onOpenDrawer}
      onClose={onCloseDrawer}
      transitionDuration={300} 
      PaperProps={{
        style: {
          height: '100%',
          width:'100%'
        },
      }}
    >
    
   
  
     
    
  
   
      <Container maxWidth="xl">
      <NavBar draweropen={true} drawerclose={onCloseDrawer}/>
        <Box sx={{ padding: '20px',mt:{md:15,lg:18},mb:15 }}>
          <Grid container spacing={2}>
            {/* Coluna 1 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Você</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Beneficiário
                </Link>
               
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Encontre um Dentista
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Segunda via de Boleto
                </Link>
                <Link href="renegociacao" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Informe de Rendimentos
                </Link>
                <Link href="/trocacartao" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                 Trocar Cartão
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Clube de Vantagens
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Pronto Atendimento 24h
                </Link>
               
              </Box>
            </Grid>

            {/* Coluna 2 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Empresas</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt:2  }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Empresas
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Solicite uma Proposta
                </Link>
             
                <Link href='/renegociacao' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>
              
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069', mt: 5 }}>Para Consultores</Typography>
                <Link sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', mt: 3 }}>
                  Acesso Consultores
                </Link>
              
               
              </Box>
            </Grid>

            {/* Coluna 3 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Cooperados</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Cooperados
                </Link>
          
               

                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Outros Links</Typography>
                </Box>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    Outras Uniodontos
                  </Link>
                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    PROCON/AM
                  </Link>
                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    Código de Defesa do Consumidor
                  </Link>
                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    CapacitaCoop
                  </Link>
                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Documentos Importantes
                </Link>
                </Box>
              </Box>
            </Grid>

            {/* Coluna 4 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Sobre Uniodonto Manaus</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px' }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Instituicional
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Diretorias e Conselhos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  IDSS
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Demonstrativo Financeiro
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Unidades de Atendimento
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Compliance
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Ouvidoria
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Cooperativismo
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  ESG
                </Link>
             
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Blog da Uniodonto Manaus
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Faça Parte de Nosso Time
                </Link>

              </Box>
            </Grid>
            <Grid item sm={6}>
          <Box sx={{ display: 'flex',alignItems:'center',mt:8}}>
            <DownloadApp/>
          </Box>
          </Grid>
            <Grid item sm={6}>
          <Box sx={{ display: 'flex', gap: 5, mt: 10, alignItems: 'center',justifyContent:'end'}}>
            <Link href="#" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px',  }}>
              Diretiva de Privacidade
            </Link>
            <Link href="#" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px' }}>
              Segurança no Uso da Internet
            </Link>
            <Link href="#" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px' }}>
              LGPD
            </Link>
            <Link href="#" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px' }}>
              Sitemap
            </Link>
          </Box>
          </Grid>
       
          </Grid>
          
       

        </Box>
    

      </Container>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: '#E1FF7B', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: {lg:'70px',md:'80px'} }}>
        <Box sx={{ display: 'flex', gap: 20 }}>
          <Typography sx={{ color: '#363636', fontSize: '24px', fontStyle: 'italic', }}>
            <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Você </span>ainda não tem um plano odontológico?
          </Typography>
          <Button variant='contained' sx={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', borderRadius: '5px', width: '291px', height: '42px', marginLeft: 'auto' }}>
            Conheça Nossos Planos
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};
