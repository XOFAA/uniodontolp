import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Alert, Snackbar } from '@mui/material';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import CircularProgress from '@mui/material/CircularProgress';
import Api from '../../config/Api';
import ReactInputMask from 'react-input-mask';
export const SejaUmVendedor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [razaosocial, setRazaoSocial] = useState('')
  const [nomefantasia, setNomeFantasia] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [nomesolicitante, setNomeSolicitante] = useState('')
  const [celular, setCelular] = useState('')
  const [email, setEmail] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [servicoprestado, setServicoPrestado] = useState('')
  const [hcaptchaKey, setHcaptchaKey] = useState(new Date().getTime().toString());
  const [envioSucesso, setEnvioSucesso] = useState(false)
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [curriculo, setCurriculo] = useState()

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = (e) => {

    setIsLoading(true);
    e.preventDefault();
    if (!recaptchaValue) {

      console.error("Por favor, resolva o reCAPTCHA antes de enviar o formulário.");
      return;
    }


    Api.post('/enviar-email-cv', {
      razaosocial: razaosocial,
      nomefantasia: nomefantasia,
      cnpj: cnpj,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      nomesolicitante: nomesolicitante,
      celular: celular,
      email: email,
      especialidade: especialidade,
      servicoprestado: servicoprestado,
      recaptchaToken: recaptchaValue,
      pdfFile: curriculo

    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        setSnackbarMessage('Formulário enviado com sucesso!')
        setSnackbarOpen(true);
        setRecaptchaValue(null)
        setEnvioSucesso(true)
        setHcaptchaKey(new Date().getTime().toString());
        setRazaoSocial('')
        setNomeFantasia('')
        setCnpj('')
        setRua('')
        setBairro('')
        setCidade('')
        setEstado('')
        setNomeSolicitante('')
        setCelular('')
        setEmail('')
        setEspecialidade('')
        setServicoPrestado('')
        setCurriculo(null)
      })
      .catch(function (error) {
        setSnackbarMessage('Falha interna, tente novamente mais tarde')
        setSnackbarOpen(true)
        setEnvioSucesso(false);
        setRecaptchaValue(null)
        setHcaptchaKey(new Date().getTime().toString());

      }).finally(() => {
        // Configura o estado de loading de volta para false, independentemente do resultado
        setIsLoading(false);
      });
  };
  return (
    <>
      <Box sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', bgcolor: '#A60069', p: 4 }}>


          <Container>

            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff' }}>Junte-se a nós e faça a diferença!</Typography>
              <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bolder', color: '#fff' }}>A Uniodonto Manaus espera por você!</Typography>
              <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#fff', my: 3 }}>Estamos à procura de profissionais ambiciosos e apaixonados por vendas para fazerem parte de nosso time.
                Se você tem habilidades em vendas, é movido por desafios e deseja uma carreira dinâmica e recompensadora, venha ser um Consultor de Vendas conosco para ajudar nossos clientes a encontrar as soluções de que precisam!</Typography>
            </Box>
          </Container>
        </Box>
        <Container>



          <Box component={'form'} onSubmit={handleSubmit} method="post" enctype="multipart/form-data" sx={{ display: 'flex', flexDirection: 'column', mt: 10, boxShadow: 5, p: 5, borderRadius: '10px', mb: 5 }}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', md: 'start' } }}>
                <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Seja</span> nosso Consultor de Vendas</Typography>
                <Typography sx={{ color: '#363636', fontSize: '20px', fontStyle: 'italic' }}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação por parte da gerência comercial</Typography>

              </Box>

            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
              <TextField
                label='Razão Social'
                required
                value={razaosocial}
                onChange={(e) => setRazaoSocial(e.target.value)}

              />

              <TextField
                label='Nome Fantasia'
                required
                value={nomefantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
              />

              <ReactInputMask
                mask="99.999.999/9999-99"
                value={cnpj}
                required
                onChange={(e) => setCnpj(e.target.value)}

              >
                {() => <TextField label="CNPJ" />}
              </ReactInputMask>

              <TextField
                label='Rua'
                required
                value={rua}
                onChange={(e) => setRua(e.target.value)}
              />

              <TextField
                label='Bairro'
                required
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />

              <TextField
                label='Cidade'
                required
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
              <TextField
                label='Estado'
                defaultValue={'Amazonas'}
                disabled
                onChange={(e) => setEstado(e.target.value)}
                required
              />
              <TextField
                label='Nome do solicitante para contato'
                required
                value={nomesolicitante}
                onChange={(e) => setNomeSolicitante(e.target.value)}
              />
              <ReactInputMask
                mask="(99) 9999-99999"
                value={celular}
                required
                onChange={(e) => setCelular(e.target.value)}

              >
                {() => <TextField label="Celular/WhatsApp do solicitante *" />}
              </ReactInputMask>
              <TextField
                label='E-mail do solicitante'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label='Por favor, resuma sobre as especialidades de seu serviço'
                required
                value={especialidade}
                onChange={(e) => setEspecialidade(e.target.value)}
              />
              <TextField
                label='Quais são os serviços prestados na especilidade?'
                required
                value={servicoprestado}
                onChange={(e) => setServicoPrestado(e.target.value)}
              />


              <TextField
                label='Ou se preferir, você pode incluir algum arquivo, como ceritificados e outros documentos (pdf)'
                required
               
                type='file'
                onChange={(e) => setCurriculo(e.target.files[0])}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography>Para maiores informações a respeito do procedimento de credenciamento, envie e-mail para gerencia.comercial@unidontomao.com.br.</Typography>
              <Typography sx={{ mt: 5, color: '#363636', fontStyle: 'italic', fontSize: '15px' }}><span style={{ fontWeight: 'bolder' }}>LGPD:</span> Ao enviar este formulário, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <HCaptcha sitekey="99f91ef4-ac33-4816-a78b-0397f8d6a036" onVerify={(token) => handleRecaptchaChange(token)} key={hcaptchaKey} />

              {recaptchaValue ? (
                <Button
                  variant='contained'
                  type='submit'
                  sx={{ borderRadius: '5px', width: '260px', height: '50px', position: 'relative' }}
                  disabled={isLoading} // Desativa o botão quando estiver em processo de envio
                >
                  {isLoading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: '#fff',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                  {!isLoading ? 'Enviar Proposta' : 'Enviando...'}
                </Button>
              ) : (
                <Alert severity="error">Por favor, resolva o CAPTCHA antes de enviar o formulário.</Alert>
              )}

            </Box>
          </Box>
          {envioSucesso ? <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{snackbarMessage}</Typography>
            </Alert>
          </Snackbar> : (
            <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{snackbarMessage}</Typography>
              </Alert>
            </Snackbar>
          )}
        </Container>
      </Box>

    </>

  )
}