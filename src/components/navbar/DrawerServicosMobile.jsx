import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, Link, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const DrawerServicosMobile = ({ onOpenDrawer, onCloseDrawer }) => {

  return (



    <Drawer
      anchor="top"
      open={onOpenDrawer}
      onClose={onCloseDrawer}
      PaperProps={{
        sx: { backgroundColor: '#A60069' },
        style: {
          top: '64px',
          // Altura do AppBar (ajuste conforme a altura do seu AppBar)
        }
      }}
    >

      <Accordion sx={{ bgcolor: '#A60069', boxShadow: 'none' }}>
        <AccordionSummary
        >
          <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '22px', color: '#fff' }}>Serviços</Typography>
          <ExpandMoreIcon sx={{ color: '#fff', fontSize: '35px' }} />
        </AccordionSummary>
        <AccordionDetails >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Você</Typography>
            </AccordionSummary>
            <AccordionDetails >

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="https://onelink.to/appuniomao" target="_blank" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Acesso Beneficiário
                </Link>

                <Link href="https://seguro.fisistemas.com.br/EncontreSeuDentista/pesquisa;s=311391
" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Encontre um Dentista
                </Link>
                <Link href="http://cloud4.fisistemas.com.br/manaus/itau/
" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Segunda via de Boleto
                </Link>
                <Link href="renegociacao" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Renegociar Débitos
                </Link>
                <Link href="https://tiss.uniodontomanaus.com.br/solucoesextras/irpf/InformacaoDados.aspx
" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Informe de Rendimentos
                </Link>
                <Link href="/trocacartao" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Trocar Cartão
                </Link>
                <Link sx={{ textDecoration: 'none', color: '#999999', fontSize: '16px' }}>
                  Clube de Vantagens
                </Link>
                <Link href="/prontoatendimento" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Pronto Atendimento 24h
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

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Acesso Empresas
                </Link>
                <Link href="/pessoajuridica" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Solicite uma Proposta
                </Link>

                <Link href='/renegociacao' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Renegociar Débitos
                </Link>







              </Box>
            </AccordionDetails>

          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Servidor Público</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                <Link href="/servidorpublico" sx={{ fontStyle: 'italic', fontStyle: 'italic', textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Planos Disponíveis
                </Link>




              </Box>
            </AccordionDetails>

          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Para Consultores</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Singular/Paginas/Login.aspx" target='_blank' sx={{ fontStyle: 'italic', textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Consultores
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

              <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Singular/Paginas/Login.aspx" target="_blank" sx={{ fontStyle: 'italic', textDecoration: 'none', color: '#373737', fontSize: '16px' }}>
                  Acesso Cooperados
                </Link>




              </Box>
            </AccordionDetails>

          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#A60069' }}>Outros Links</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Link href="https://www.uniodonto.coop.br/uniodonto-mais-proxima/" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Outras Uniodontos
                </Link>
                <Link href="http://www.procon.am.gov.br/" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  PROCON/AM
                </Link>
                <Link href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Código de Defesa do Consumidor
                </Link>
                <Link href="https://capacita.coop.br/" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  CapacitaCoop
                </Link>
                <Link href="/documentos" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Documentos Importantes
                </Link>
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

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, fontSize: '18px' }}>
                <Link href="/institucional" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Instituicional
                </Link>
                <Link href="https://uniodontoservices.com.br/?ans=37" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  IDSS
                </Link>
                <Link href="https://uniodontoservices.com.br/demonstrativos?ans=37#" target='_blank' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Demonstrativo Financeiro
                </Link>
                <Link href="/compliance" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Compliance
                </Link>
                <Link href="/ouvidoria" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Ouvidoria
                </Link>
                <Link href="/cooperativismo" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Cooperativismo
                </Link>
                <Link href="/esg" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  ESG
                </Link>

                <Link href="https://uniodontomanaus.substack.com" target='_target' sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Newsletter
                </Link>
                <Link href="/facaparte" sx={{ textDecoration: 'none', color: '#373737', fontSize: '16px', fontStyle: 'italic' }}>
                  Faça Parte de Nosso Time
                </Link>

              </Box>
            </AccordionDetails>

          </Accordion>
        </AccordionDetails>

      </Accordion>
      <Box sx={{ p: 2 }}>
        <Link href="/atendimento" sx={{ textDecoration: 'none', fontStyle: 'italic', fontWeight: 'bold', fontSize: '22px', color: '#fff' }}>Atendimento</Link>
      </Box>
      <Accordion sx={{ bgcolor: '#A60069', boxShadow: 'none', position: 'unset' }}>
        <AccordionSummary>
          <Typography sx={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '22px', color: '#fff', boxShadow: 'none' }}>Acesse seu Portal</Typography>
          <ExpandMoreIcon sx={{ color: '#fff', fontSize: '35px' }} />
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: '#fff' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Link href="https://tiss.uniodontomanaus.com.br/SolucoesExtras/consultaBeneficiarios/InformacaoDados.aspx" sx={{ color: '#363636', fontStyle: 'italic', fontSize: '18px', textDecoration: 'none' }}>Acesso Beneficiário</Link>
            <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx" sx={{ color: '#363636', fontSize: '18px', fontStyle: 'italic', textDecoration: 'none' }}>Acesso Empresas</Link>
            <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/RedeCredenciada/Paginas/Login.aspx" target="_top" sx={{ color: '#363636', fontStyle: 'italic', fontSize: '18px', textDecoration: 'none' }}>Acesso Cooperados</Link>
            <Link href="https://seuplanoonline.fisistemas.com.br/vendedor" sx={{ color: '#363636', fontSize: '18px', fontStyle: 'italic', textDecoration: 'none' }}>Acesso Consultores</Link>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Box sx={{ bgcolor: '#E1FF7B', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 3, textAlign: 'center' }}>
        <Typography sx={{ color: '#363636', fontSize: '24px', fontStyle: 'italic', }}>
          <span style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Você </span>ainda não tem um plano odontológico?
        </Typography>
        <Box>
          <Button href="/pessoafisica" variant='contained' sx={{ fontSize: '18px', fontStyle: 'italic', fontWeight: 'bold', borderRadius: '5px', width: '291px', height: '42px', marginLeft: 'auto' }}>
            Conheça Nossos Planos
          </Button>
        </Box>
      </Box>

    </Drawer>
  )
}