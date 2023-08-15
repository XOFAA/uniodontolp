import * as React from 'react';
import { Box, Container, Drawer, Grid, Link, Typography } from '@mui/material';

export const DrawerServicos = ({ onOpenDrawer, onCloseDrawer }) => {
  return (
    <Drawer
      anchor="top"
      open={onOpenDrawer}
      onClose={onCloseDrawer}
      PaperProps={{
        style: {
          top: '64px', // Altura do AppBar (ajuste conforme a altura do seu AppBar)
        },
      }}
    >
      <Container>
        <Box sx={{ height: '400px', padding: '20px' }}>
          <Grid container spacing={2}>
            {/* Coluna 1 */}
            <Grid item xs={12} sm={3}>
              <Typography sx={{fontSize:'18px'}}>Para  <span style={{ fontWeight: 'bold' }}>Você</span></Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Segunda via do Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                 Clube de Vantagens
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                 Renegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none',color: '#373737' }}>
                 Rol de Cobertura
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Pagamento Cartões
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Informe de Rendimentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Pronto Atendimento 24h
                </Link>
              </Box>
            </Grid>

            {/* Coluna 2 */}
            <Grid item xs={12} sm={3}>
              <Typography fontSize={'18px'}>Para sua  <span style={{ fontWeight: 'bold' }}>Empresa</span></Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                 Rol de Cobertura
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                  Segunda via de Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                 Renegociar Débitos
                </Link>
                <Link href="/pessoajuridica" sx={{ textDecoration: 'none',color: '#373737' }}>
                 Solicite uma proposta
                </Link>
            
              </Box>
            </Grid>

            {/* Coluna 3 */}
            <Grid item xs={12} sm={3}>
              <Typography fontSize={'18px'}>Para <span style={{ fontWeight: 'bold' }}>Cooperados</span></Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Aprovação Online
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                  Relacionamento com Cooperado
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Portal de Treinamentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none',color: '#373737' }}>
                 Seja nosso Cooperado
                </Link>
                <Typography fontSize={'18px'} sx={{mt:2}}>Para  <span style={{ fontWeight: 'bold' }}>Vendedores</span></Typography>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                 Portal de Vendas
                </Link>
              </Box>
            </Grid>

            {/* Coluna 4 */}
            <Grid item xs={12} sm={3}>
              <Typography fontSize={'18px'}>Sobre <span style={{ fontWeight: 'bold' }}>Uniodonto Manaus</span></Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2,mt:2,fontSize:'18px'}}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Instituicional
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                Diretoria Executiva
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737' }}>
                 Demonstrativo Financeiro
                </Link>
                <Link href="#" sx={{ textDecoration: 'none',color: '#373737' }}>
                 Unidades de Atendimento
                </Link>
                
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Drawer>
  );
};
