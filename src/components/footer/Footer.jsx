import { Box, Button, Container, Grid, IconButton, Link, Typography } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';

export const Footer = () => {





  return (


    <Box sx={{ bgcolor: '#A60069' }}>
      <Container >
        <Box sx={{ pt: 5 }}>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: { xs: 'center', lg: 'unset' }, gap: { lg: 7.4, xs: 5 } }}>
            <Box sx={{ width: '240px', height: '60px' }}>
              <img src='/images/logouniodonto/logouniodonto.png' alt="Logo" width={'100%'} height={'100%'} />
            </Box>
            <Box sx={{ width: '120px', height: '30px' }}>
              <img src='/images/logosfooter/codigo_ans.svg' alt="Logo" width={'100%'} height={'100%'} />
            </Box>
            <Box sx={{ width: '200px', height: '60px' }}>
              <img src='/images/logosfooter/botao_ans.svg' alt="Logo" width={'100%'} height={'100%'} />
            </Box>
            <Box sx={{ width: '120px', height: '60px' }}>
              <img src='/images/logosfooter/google_ssl.svg' alt="Logo" width={'100%'} height={'100%'} />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '18px', fontStyle: 'italic', color: '#fff', textAlign: { xs: 'center', lg: 'unset' } }}> <span style={{ fontWeight: 'bold' }}>Siga</span> a gente!</Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <FacebookIcon sx={{ height: '30px', width: '30px', color: '#fff' }} />
                <InstagramIcon sx={{ height: '30px', width: '30px', color: '#fff' }} />
                <LinkedInIcon sx={{ height: '30px', width: '30px', color: '#fff' }} />
                <YouTubeIcon sx={{ height: '30px', width: '30px', color: '#fff' }} />
                <TelegramIcon sx={{ height: '30px', width: '30px', color: '#fff' }} />
                <WhatsAppIcon sx={{ height: '30px', width: '30px', color: '#fff' }} />
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: { xs: 2 }, textAlign: { xs: 'center', lg: 'unset' }, alignItems: { xs: 'center', lg: 'normal' }, mt: 2, flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', color: '#fff', mt: 3 }}>Central de<br />Relacionamento</Typography>
              <Typography sx={{ fontSize: '22px', color: '#E1FF7B', fontWeight: 'bold', fontStyle: 'italic' }}>(92) 2126-0600</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', color: '#fff', mt: 3 }}>Serviço de Atendimento<br />ao Beneficiário</Typography>
              <Typography sx={{ fontSize: '22px', color: '#E1FF7B', fontWeight: 'bold', fontStyle: 'italic' }}>(92) 2126-0604</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>




              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', fontStyle: 'italic', color: '#fff', mt: 3 }}>Ouvidoria<br />
                Uniodonto Manaus</Typography>
              <Typography sx={{ fontSize: '22px', color: '#E1FF7B', fontWeight: 'bold', fontStyle: 'italic' }}>(92) 2126-0604</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { md: 'center', lg: 'start' } }}>
              <Typography sx={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', fontStyle: 'italic' }}>Canais de atendimento online<br /> e telefônico</Typography>
              <Box sx={{ display: 'flex', justifyContent: { md: 'flex-start', xs: 'center' } }}>
                <Button variant="contained" sx={{ mt: 1, bgcolor: '#E1FF7B', color: "#363636", fontStyle: 'italic', fontWeight: 'bold', width: '150px', height: '50px', borderRadius: '5px', fontSize: '18px' }}>Acesse aqui</Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: '100%', height: '1px', backgroundColor: '#fff', my: 10 }} component={'div'} />
        <Grid container spacing={2}>
          {/* Coluna 1 */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Você</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, alignItems: { xs: 'center', md: 'unset' } }}>
              <Link href="https://onelink.to/appuniomao" target="_blank" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Acesso Beneficiário
              </Link>

              <Link href="https://seguro.fisistemas.com.br/EncontreSeuDentista/pesquisa;s=311391
" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Encontre um Dentista
              </Link>
              <Link href="http://cloud4.fisistemas.com.br/manaus/itau/
" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Segunda via de Boleto
              </Link>
              <Link href="renegociacao" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Renegociar Débitos
              </Link>
              <Link href="https://tiss.uniodontomanaus.com.br/solucoesextras/irpf/InformacaoDados.aspx
" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Informe de Rendimentos
              </Link>
              <Link href="/trocacartao" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Trocar Cartão
              </Link>
              <Link sx={{ textDecoration: 'none', color: '#999999', fontSize: '16px' }}>
                Clube de Vantagens
              </Link>
              <Link href="/prontoatendimento" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Pronto Atendimento 24h
              </Link>

            </Box>
          </Grid>

          {/* Coluna 2 */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Empresas</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, alignItems: { xs: 'center', md: 'unset' } }}>
              <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Empresa/Paginas/Login.aspx" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Acesso Empresas
              </Link>
              <Link href="/pessoajuridica" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Solicite uma Proposta
              </Link>

              <Link href='/renegociacao' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Renegociar Débitos
              </Link>

              <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' }, mt: 5 }}>Para Consultores</Typography>
              <Link href='https://seuplanoonline.fisistemas.com.br/vendedor' target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px', mt: 3 }}>
                Acesso Consultores
              </Link>


            </Box>
          </Grid>

          {/* Coluna 3 */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Para Cooperados</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, alignItems: { xs: 'center', md: 'unset' } }}>
              <Link href="https://tiss.uniodontomanaus.com.br/SAEX/Modulos/Singular/Paginas/Login.aspx" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Acesso Cooperados
              </Link>



              <Box sx={{ mt: 3 }}>
                <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Outros Links</Typography>
              </Box>
              <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', md: 'unset' }, gap: 2 }}>
                <Link href="https://www.uniodonto.coop.br/uniodonto-mais-proxima/" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                  Outras Uniodontos
                </Link>
                <Link href="http://www.procon.am.gov.br/" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                  PROCON/AM
                </Link>
                <Link href="https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                  Código de Defesa do Consumidor
                </Link>
                <Link href="https://capacita.coop.br/" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                  CapacitaCoop
                </Link>
                <Link href="/documentos" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                  Documentos Importantes
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Coluna 4 */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: '18px', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' } }}>Sobre Uniodonto Manaus</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2, alignItems: { xs: 'center', md: 'unset' }, fontSize: '18px' }}>
              <Link href="/institucional" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Instituicional
              </Link>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Diretorias e Conselhos
              </Link>
              <Link href="https://uniodontoservices.com.br/demonstrativos?ans=37#" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                IDSS
              </Link>
              <Link href="https://uniodontoservices.com.br/demonstrativos?ans=37#" target='_blank' sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Demonstrativo Financeiro
              </Link>
              <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Unidades de Atendimento
              </Link>
              <Link href="/compliance" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Compliance
              </Link>
              <Link href="/ouvidoria" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Ouvidoria
              </Link>
              <Link href="/cooperativimdo" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Cooperativimdo
              </Link>
              <Link href="/esg" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                ESG
              </Link>

              <Link href="#" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Blog da Uniodonto Manaus
              </Link>
              <Link href="/facaparte" sx={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}>
                Faça Parte de Nosso Time
              </Link>

            </Box>
          </Grid>



        </Grid>



        <Box sx={{ display: 'flex', gap: { xs: 1,md:5}, mt: 5,alignItems: 'center', justifyContent: { xs: 'center'},flexDirection:{sm:'column',md:'row'},flexWrap: { xs: 'wrap', md: 'unset' } }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 1, md: 2 }, alignItems: 'center' }}>
            <Typography sx={{ textAlign: 'center', fontSize: { xs: '22px', md: '20px' }, fontStyle: 'italic', color: '#fff' }}><span style={{ fontWeight: 'bold' }}>Baixe</span> o app Uniodonto Manaus</Typography>

            <Link href="/">
              <Box >
                <img src="images/downloadapp/botaogoogleplay.png" width={'100%'} height={'100%'} />
              </Box>
            </Link>
            <Link href="/">
              <Box >
                <img src="images/downloadapp/botaoappstore.png" width={'100%'} height={'100%'} />
              </Box>
            </Link>
          </Box>
          <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' }, fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
            Termos de Uso e Política de Privacidade
          </Link>
          <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' }, fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
            Segurança no Uso da Internet
          </Link>
          <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' }, fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
            LGPD
          </Link>
          <Link href="#" sx={{ textDecoration: 'none', color: '#E1FF7B', textAlign: { xs: 'center', md: 'unset' }, fontWeight: "bold", fontStyle: "italic", fontSize: '12px' }}>
            Sitemap
          </Link>

        </Box>





        <Box sx={{ mt: {xs:5,md:15} }}>



          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'end' }, textAlign: { xs: 'center', md: 'unset' }, mt: 3 }}>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#fff' }}>Uniodonto Manaus Cooperativa Odontológica Ltda</Typography>
            <Typography sx={{ fontSize: '16px', fontStyle: 'italic', color: '#fff' }}>CNPJ 23.031.479/0001-29</Typography>
            <Typography sx={{ fontSize: '15px', fontStyle: 'italic', color: '#fff' }}>Sede Administrativa: Av. Leonardo Malcher, 598, Centro - Manaus/AM - CEP 69010-170</Typography>
            <Typography sx={{ fontSize: '16px', fontWeight: 'bolder', color: '#fff', mt: 3 }}>Responsável Técnico: Dra. Michele P. Lemos - CRO/AM 3183</Typography>
          </Box>
        </Box>


        <Link href="https://indeias.com.br" target="_blank">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 8, gap: 2, pb: 4 }}>
            <Typography sx={{ fontStyle: 'italic', fontSize: '13px', color: '#fff' }}>Tecnologia desenvolvida por</Typography>
            <img src="images/indeias/logoindeias.png" />
          </Box>
        </Link>
      </Container>
    </Box>
  )
}