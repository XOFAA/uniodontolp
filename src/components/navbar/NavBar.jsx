import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate} from 'react-router-dom';
import { DrawerServicos } from './DrawerServicos';
import { DrawerServicosMobile } from './DrawerServicosMobile';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';


export const NavBar = ({backgroundColor,draweropen,drawerclose}) => {

 

  const [scrollBackgroundColor, setScrollBackgroundColor] = React.useState(backgroundColor);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrollBackgroundColor('#A60069');
    } else {
      setScrollBackgroundColor(backgroundColor);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <Box>
   


 
   <AppBar position="fixed" sx={{background: scrollBackgroundColor, boxShadow: 'none', transition: 'background 0.2s ease-in-out' }}>
    
 
      <Container maxWidth="xl">
    
      <Box sx={{ display:{xs:'none',lg:'flex'}, gap: 5, my: 2 }}>
       
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', fontStyle: 'italic' }}>
              Mais buscados
            </Typography>
            <ArrowForwardIosIcon sx={{ ml: 3 }} />
          </Box>
      
        <Link href="/pessoafisica" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ fontSize: '16px', fontStyle: 'italic' }}>Contrate um Plano</Typography>
        </Link>
        <Link href="/atendimento" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ fontSize: '16px', fontStyle: 'italic' }}>Atendimento</Typography>
        </Link>
        <Link href="https://seguro.fisistemas.com.br/EncontreSeuDentista/pesquisa;s=311391
" target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ fontSize: '16px', fontStyle: 'italic' }}>Encontre um dentista</Typography>
        </Link>
        <Link href="/renegociacao" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography sx={{ fontSize: '16px', fontStyle: 'italic' }}>Renegociar débitos</Typography>
        </Link>
      </Box>
      
      </Container>
      <Box sx={{ width: '100%', height: '1px', backgroundColor: '#CCCCCC' }} component={'div'} />  
      <Container maxWidth="xl">
      
        <Toolbar disableGutters >
          <Box sx={{ borderRight: { md: 1, xs: 0 }, paddingRight: 5, py: 1 }}>
            <Box  sx={{width:'200px',height:'50px',cursor:'pointer'}}  component={'div'} onClick={handleLogo} >
            <img src='/images/logouniodonto/logouniodonto.png' alt="Logo" width={'100%'} height={'100%'}/>
            </Box>
            
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center' }}>
          {draweropen ? 
           <IconButton onClick={drawerclose} disableRipple sx={{color:'#fff'}}>
           <MenuItem sx={{ml:1,fontSize:'18px',fontWeight:'bold',fontStyle:'italic',}}>
             <CloseIcon sx={{fontSize:'25px'}}/>
             Fechar
             </MenuItem>
             </IconButton> :    <IconButton onClick={handleDrawerServicos} disableRipple sx={{color:'#fff'}}>
          <MenuItem sx={{ml:1,fontSize:'18px',fontWeight:'bold',fontStyle:'italic',}}>
            <KeyboardArrowDownIcon sx={{fontSize:'40px'}}/>
            Serviços  
            </MenuItem>
            </IconButton>
        }
         
            <MenuItem sx={{ml:5,fontSize:'18px',fontWeight:'bold',fontStyle:'italic'}}>
            <Link href={'atendimento'} style={{textDecoration:'none',color:'#fff'}}>
            Atendimento
            </Link>
              
            </MenuItem>
         
            <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2, alignItems: 'center',cursor:'pointer'}} >
              <SearchIcon sx={{ fontSize: '25px' }} />
              <Box
                sx={{ borderLeft: 1, borderRight: 1, px:3, display: 'flex', alignItems: 'center' }}
                onClick={handleOpenDesktopMenu}
              >
                <KeyboardArrowDownIcon sx={{fontSize:'40px'}}/>
                
                <Typography sx={{ fontSize: '18px',fontStyle:'italic',fontWeight:'bold' }}>Acesse seu Portal</Typography>
               
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center' }}>
            <Box sx={{ marginLeft: 'auto' }}>
              <IconButton onClick={handleOpenMobileMenu}>
                <MenuIcon sx={{color:'#fff'}} />
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
        {options.map((option,index) => (
          <Link href={option.link} key={index} target='_blank' sx={{ color: "#323232", fontSize: '18px', fontStyle:'italic', fontWeight:'bold', textDecoration:'none' }}>
        <MenuItem   onClick={handleCloseDesktopMenu}>
        <MenuList>
            {option.page}
        </MenuList>
      </MenuItem>
      </Link>

        ))}
      </Menu>
      <DrawerServicos onOpenDrawer={drawerServicos} onCloseDrawer={()=>setDrawerServicos(false)} />
    </AppBar>

     </Box>
  );
}