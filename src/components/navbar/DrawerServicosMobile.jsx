import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, Link, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const DrawerServicosMobile = ({onOpenDrawer,onCloseDrawer}) => {
    const options = ['Portal Pessoa Física', 'Portal Pessoa Jurídica', 'Portal Cooperado', 'Portal Vendas'];
    const optionColors = {
        'Portal Pessoa Física': '#373737', // Vermelho
        'Portal Pessoa Jurídica': '#AD611F', // Verde
        'Portal Cooperado': '#680E35', // Azul
        'Portal Vendas': '#076A38', // Magenta
      };
    return(

        

        <Drawer
        anchor="top"
        open={onOpenDrawer}
        onClose={onCloseDrawer}
        PaperProps={{
            sx:{backgroundColor: '#A60069'},
            style: {
              top: '64px',
               // Altura do AppBar (ajuste conforme a altura do seu AppBar)
            }}}
      >
        
        <Accordion sx={{bgcolor:'#A60069',boxShadow:'none'}}>
            <AccordionSummary
            >
            <Typography sx={{fontStyle:'italic',fontWeight:'bold',fontSize:'22px',color:'#fff'}}>Serviços</Typography>
            </AccordionSummary>
            <AccordionDetails >
            <Accordion>
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                >
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Você</Typography>
                </AccordionSummary>
                <AccordionDetails >
               
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Pessoa Física
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Conheça Nossos Planos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Encontre um Dentista
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Segunda via de Boleto
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Regenegociar Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Informe de Rendimentos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Pagamento Cartões
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Carta de Quitação de Débitos
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Clube de Vantagens
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Pronto Atendimento 24h
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Documentos Importantes
                </Link>
              </Box>
                    </AccordionDetails>
               
            </Accordion>
            <Accordion>
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                >
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Empresas</Typography>
                </AccordionSummary>
                <AccordionDetails>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Pessoa Jurídica
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Solicite uma Proposta
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Faturamento
                </Link>
                <Link sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Renegociar Débitos
                </Link>
                <Link sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Documentos Importantes
                </Link>
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069', mt: 5 }}>Para Consultores</Typography>
                <Link sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', mt: 3 }}>
                  Acesso Consultores
                </Link>
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069', mt: 2 }}>Para Colaboradores</Typography>
                <Link sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', mt: 3 }}>
                  Acesso Colaborador
                </Link>
              </Box>
                    </AccordionDetails>
               
            </Accordion>
            <Accordion>
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                >
               <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Cooperados</Typography>
                </AccordionSummary>
                <AccordionDetails>
            
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 5 }}>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Cooperados
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Aprovação Online
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Relacionamento com Cooperado
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Seja nosso Cooperado
                </Link>

                <Box sx={{ mt: 3 }}>
                  <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Outros Links</Typography>
                </Box>
                <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>

                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    ANS
                  </Link>
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
                    OCB/AM
                  </Link>
                  <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                    CapacitaCoop
                  </Link>
                </Box>
              </Box>
                    </AccordionDetails>
               
            </Accordion>
            <Accordion>
                <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                >
          <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Sobre Uniodonto Manaus</Typography>
                </AccordionSummary>
                <AccordionDetails>
                
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
                  Atenção à Saúde Bucal
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Blog da Uniodonto Manaus
                </Link>
                <Link href="#" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Faça Parte de Nosso Time
                </Link>

              </Box>
                    </AccordionDetails>
               
            </Accordion>
            </AccordionDetails>
            
        </Accordion>
        <Box sx={{p:2}}>
        <Typography sx={{fontStyle:'italic',fontWeight:'bold',fontSize:'22px',color:'#fff'}}>Atendimento</Typography>
        </Box>
        <Accordion sx={{bgcolor:'#A60069',boxShadow:'none',position:'unset'}}>
            <AccordionSummary>
            <Typography sx={{fontStyle:'italic',fontWeight:'bold',fontSize:'22px',color:'#fff',boxShadow:'none'}}>Acesse seu Portal</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{bgcolor:'#fff'}}>
                <Box sx={{display:'flex',flexDirection:'column',gap:2}}>
                <Link href="https://tiss.uniodontomanaus.com.br/SolucoesExtras/consultaBeneficiarios/InformacaoDados.aspx" sx={{color:'#373737',fontStyle:'italic',fontSize: '18px',fontWeight:'bold',textDecoration:'none'}}>Portal Pessoa Física</Link>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx" sx={{color:'#AD611F',fontSize: '18px',fontStyle:'italic',fontWeight:'bold',textDecoration:'none'}}>Portal Pessoa Jurídica</Link>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/RedeCredenciada/Paginas/Login.aspx" target="_top" sx={{color:'#680E35',fontStyle:'italic',fontSize: '18px',fontWeight:'bold',textDecoration:'none'}}>Portal Cooperado</Link>
                <Link href="https://seuplanoonline.fisistemas.com.br/vendedor" sx={{color:'#076A38',fontSize: '18px',fontWeight:'bold',fontStyle:'italic',textDecoration:'none'}}>Portal Vendas</Link>
                </Box>
            </AccordionDetails>
        </Accordion>
        
        <Box sx={{bgcolor: '#E1FF7B', display: 'flex',flexDirection:'column',alignItems:'center',gap:2,p:3,textAlign:'center'}}>
        <Typography sx={{ color: '#363636', fontSize: '24px',fontStyle:'italic',}}>
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Você </span>ainda não tem um plano odontológico?
        </Typography>
        <Box>
        <Button variant='contained' sx={{fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', borderRadius: '5px', width: '291px', height: '42px', marginLeft: 'auto' }}>
          Conheça Nossos Planos
        </Button>
        </Box>
      </Box>
        
        </Drawer>
    )
}