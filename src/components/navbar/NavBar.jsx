import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Accordion, AccordionDetails, AccordionSummary, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DrawerServicos } from './DrawerServicos';
import { DrawerServicosMobile } from './DrawerServicosMobile';




export const NavBar = () => {

  const pages = [
    {
      page: 'Serviços',
    },
    {
      page: 'Atendimento',
      link: '/atendimento', // Endereço da página de atendimento
    }
  ];
  const options = [
    {
      page:'Portal Pessoa Física',
      link:"https://tiss.uniodontomanaus.com.br/SolucoesExtras/consultaBeneficiarios/InformacaoDados.aspx"
    },
    {
      page:'Portal Pessoa Jurídica',
      link:"https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx"
    },
    {
      page:'Portal Cooperado',
      link:"https://tiss.uniodontomanaus.com.br/SAEX/Modulos/RedeCredenciada/Paginas/Login.aspx"
    },
    {
      page:'Portal Vendas',
      link:"https://seuplanoonline.fisistemas.com.br/vendedor"
    }
];

  const navigate=useNavigate()


  // Objeto com cores associadas a cada opção
  const optionColors = {
    'Portal Pessoa Física': '#373737', // Vermelho
    'Portal Pessoa Jurídica': '#AD611F', // Verde
    'Portal Cooperado': '#680E35', // Azul
    'Portal Vendas': '#076A38', // Magenta
  };


  const [desktopMenuOpen, setDesktopMenuOpen] = React.useState(null);
  const [drawerServicos, setDrawerServicos] = React.useState(false)
  const [mobileMenuOpen,setMobileMenuOpen]=React.useState(false)

  const handleLogo =()=>{
    navigate('/')
  }

  const handleDrawerServicos = () => {
    setDrawerServicos(true)
  }
  
  const handleOpenMobileMenu = (event) => {
    setMobileMenuOpen(true);
  };

  const handleOpenDesktopMenu = (event) => {
    setDesktopMenuOpen(event.currentTarget);
  };

  const handleCloseDesktopMenu = () => {
    setDesktopMenuOpen(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ borderRight: { md: 1, xs: 0 }, paddingRight: 5, py: 1 }}>
            <Box  sx={{width:'200px',height:'50px'}}  component={'div'} onClick={handleLogo} >
            <img src='/images/logouniodonto/logouniodonto.png' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
          {pages.map((page) => (
            <MenuItem key={page} sx={{ ml: 5, gap: 2 }} onClick={page.page === 'Serviços' ? handleDrawerServicos : null}>
              {page.page === 'Atendimento' ? (
                <Link to={page.link} style={{ textDecoration: 'none', color: 'inherit', fontSize: '18px',fontStyle:'italic',fontWeight:'bold' }}>
                  {page.page}
                </Link>
              ) : (
                <MenuList sx={{ fontSize: '18px',fontStyle:'italic',fontWeight:'bold'}}>
                  {page.page}
                </MenuList>
              )}
            </MenuItem>
          ))}
            <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
              <SearchIcon sx={{ fontSize: '25px' }} />
              <Box
                sx={{ borderLeft: 1, borderRight: 1, p: 1, display: 'flex', alignItems: 'center' }}
                onClick={handleOpenDesktopMenu}
              >
               
                <Typography sx={{ fontSize: '18px',fontStyle:'italic',fontWeight:'bold' }}>Acesse seu Portal</Typography>
                <KeyboardArrowDownIcon />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center' }}>
            <Box sx={{ marginLeft: 'auto' }}>
              <IconButton onClick={handleOpenMobileMenu}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>

        </Toolbar>
      </Container>
      {/* Menu para o ícone do portal no celular */}
      <DrawerServicosMobile onOpenDrawer={mobileMenuOpen} onCloseDrawer={()=>setMobileMenuOpen(false)}/>
      {/* Submenu para o ícone do portal no desktop */}
      <Menu
        anchorEl={desktopMenuOpen}
        open={Boolean(desktopMenuOpen)}
        onClose={handleCloseDesktopMenu}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {/* Conteúdo do submenu no ícone do portal no desktop */}
        {options.map((option) => (
          <MenuItem key={option} onClick={handleCloseDesktopMenu} >
            <MenuList>
             <Link  href={option.link} target='_blank' sx={{ color: optionColors[option.page], fontSize: '18px',fontStyle:'italic',fontWeight:'bold',textDecoration:'none' }}>{option.page}</Link>
            </MenuList>
          </MenuItem>

        ))}
      </Menu>
      <DrawerServicos onOpenDrawer={drawerServicos} onCloseDrawer={()=>setDrawerServicos(false)} />
    </AppBar>
  );
}