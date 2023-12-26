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
          width: '100%'
        },
      }}
    >







      <Container maxWidth="xl">
        <NavBar draweropen={true} drawerclose={onCloseDrawer} />
        <Box sx={{ padding: '20px', mt: { md: 15, lg: 18 }, mb: 15 }}>
          <Grid container spacing={2}>
            {/* Coluna 1 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Você</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Link href="https://onelink.to/appuniomao" target="_blank" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Beneficiário
                </Link>

                <Link href="https://seguro.fisistemas.com.br/EncontreSeuDentista/pesquisa;s=311391
" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Encontre um Dentista
                </Link>
                <Link href="http://cloud4.fisistemas.com.br/manaus/itau/
" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Segunda via de Boleto
                </Link>
                <Link href="renegociacao" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>
                <Link href="https://tiss.uniodontomanaus.com.br/solucoesextras/irpf/InformacaoDados.aspx
" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Informe de Rendimentos
                </Link>
                <Link href="/trocacartao" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Trocar Cartão
                </Link>
                <Link sx={{ textDecoration: 'none', color: '#999999', fontSize: '16px' }}>
                  Clube de Vantagens
                </Link>
                <Link href="/prontoatendimento" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Pronto Atendimento 24h
                </Link>

              </Box>
            </Grid>

            {/* Coluna 2 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Empresas</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Empresas
                </Link>
                <Link href="/pessoajuridica" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Solicite uma Proposta
                </Link>

                <Link href='/renegociacao' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>

                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069', mt: 5 }}>Para Consultores</Typography>
                <Link href='https://seuplanoonline.fisistemas.com.br/vendedor' target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', mt: 3 }}>
                  Acesso Consultores
                </Link>


              </Box>
            </Grid>

            {/* Coluna 3 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Cooperados</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Singular/Paginas/Login.aspx" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Cooperados
                </Link>



                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Outros Links</Typography>
                </Box>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Link href="https://www.uniodonto.coop.br/uniodonto-mais-proxima/" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    Outras Uniodontos
                  </Link>
                  <Link href="http://www.procon.am.gov.br/" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    PROCON/AM
                  </Link>
                  <Link href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    Código de Defesa do Consumidor
                  </Link>
                  <Link href="https://capacita.coop.br/" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    CapacitaCoop
                  </Link>
                  <Link href="/documentos" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    Documentos Importantes
                  </Link>
                </Box>
              </Box>
            </Grid>

            {/* Coluna 4 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Sobre Uniodonto Manaus</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, fontSize: '18px' }}>
                <Link href="/institucional" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Instituicional
                </Link>
                <Link href="https://uniodontoservices.com.br/demonstrativos?ans=37#" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  IDSS
                </Link>
                <Link href="https://uniodontoservices.com.br/demonstrativos?ans=37#" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Demonstrativo Financeiro
                </Link>
                <Link href="/compliance" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Compliance
                </Link>
                <Link href="/ouvidoria" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Ouvidoria
                </Link>
                <Link href="/cooperativismo" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Cooperativismo
                </Link>
                <Link href="/esg" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  ESG
                </Link>

                <Link href="https://uniodontomanaus.substack.com" target='_target' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Newsletter
                </Link>
                <Link href="/facaparte" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Faça Parte de Nosso Time
                </Link>

              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 8 }}>
                <DownloadApp />
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box sx={{ display: 'flex', gap: 5, mt: 10, alignItems: 'center', justifyContent: 'end' }}>
                <Link href="/cpd" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px', }}>
                  Centro de Proteção de Dados
                </Link>
                <Link href="/lgpd" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px' }}>
                  LGPD
                </Link>
                <Link href="/sitemap" sx={{ color: '#A60069', fontWeight: 'bold', fontStyle: 'italic', fontSize: '16px' }}>
                  Sitemap
                </Link>
              </Box>
            </Grid>

          </Grid>



        </Box>


      </Container>
      <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, bgcolor: '#E1FF7B', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', height: { lg: '70px', md: '80px' } }}>
        <Box sx={{ display: 'flex', gap: 20 }}>
          <Typography sx={{ color: '#363636', fontSize: '24px', fontStyle: 'italic', }}>
            <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Você </span>ainda não tem um plano odontológico?
          </Typography>
          <Link href='/pessoafisica'>
            <Button variant='contained' sx={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', borderRadius: '5px', width: '291px', height: '42px', marginLeft: 'auto' }}>
              Conheça Nossos Planos
            </Button>
          </Link>
        </Box>
      </Box>
    </Drawer>
  );
};
