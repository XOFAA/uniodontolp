import React, { useState } from 'react';
import { Box, Button, Container, Typography, TextField, Snackbar, Alert } from '@mui/material';
import Api from '../../config/Api';
import ReactInputMask from 'react-input-mask';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import CircularProgress from '@mui/material/CircularProgress';
export const SejaUmCooperado = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [celular, setCelular] = useState('')
  const [email, setEmail] = useState('')
  const [locaisatendimento, setLocaisAtendimento] = useState('')
  const [instituicao, setInstituicao] = useState('')
  const [anoconclusao, setAnoConclusao] = useState('')
  const [cro, setCro] = useState('')
  const [especializacaoacademica, setEspecializacaoAcademia] = useState('')
  const [especializacaoodontologica, setEspecializacaoOdontologica] = useState('')
  const [areadeatuacao, setAreaDeAtuacao] = useState('')
  const [curriculo, setCurriculo] = useState()
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [hcaptchaKey, setHcaptchaKey] = useState(new Date().getTime().toString());
  const [envioSucesso, setEnvioSucesso] = useState(false)

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


    Api.post('/enviar-email-sec', {
      nomecompleto: nomeCompleto,
      celular: celular,
      email: email,
      locaisatendimento: locaisatendimento,
      instituicao: instituicao,
      anoconclusao: anoconclusao,
      cro: cro,
      especializacaoacademica: especializacaoacademica,
      especializacaoodontologica: especializacaoodontologica,
      areadeatuacao: areadeatuacao,
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
        setNomeCompleto('')
        setCelular('')
        setEmail('')
        setLocaisAtendimento('')
        setInstituicao('')
        setAnoConclusao('')
        setCro('')
        setEspecializacaoAcademia('')
        setEspecializacaoOdontologica('')
        setAreaDeAtuacao('')
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
      <Box className="CarouselParcerias" sx={{ height: '100%' }}>
        <Box sx={{ display: 'flex', bgcolor: '#A60069', p: 4 }}>


          <Container>

            <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
              <Typography sx={{ fontStyle: 'italic', fontSize: '28px', color: '#fff' }}>Junte-se a nós e faça a diferença!</Typography>
              <Typography sx={{ fontSize: '28px', fontStyle: 'italic', fontWeight: 'bolder', color: '#fff' }}>A Uniodonto Manaus espera por você!</Typography>
              <Typography sx={{ fontStyle: 'italic', fontSize: '20px', color: '#fff', my: 3 }}>Estamos à procura de talentosos cirurgiões-dentistas para se estarem com a gente. Se você é apaixonado pela odontologia, valoriza a colaboração entre profissionais e deseja fazer a diferença na saúde bucal das pessoas,
                junte-se ao nosso time comprometido em proporcionar cuidados odontológicos de alta qualidade!</Typography>
            </Box>
          </Container>
        </Box>
        <Container>



          <Box  component={'form'} onSubmit={handleSubmit} method="post" enctype="multipart/form-data" sx={{ display: 'flex', flexDirection: 'column', mt: 10, boxShadow: 5, p: 5, borderRadius: '10px', mb: 5 }}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { xs: 'center', md: 'start' } }}>
                <Typography sx={{ fontSize: '28px', fontStyle: 'italic', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Seja</span> nosso Dentista Cooperado</Typography>
                <Typography sx={{ color: '#363636', fontSize: '20px', fontStyle: 'italic' }}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação por parte dos conselhos diretivos</Typography>

              </Box>

            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
              <TextField
                label='Nome Completo'
                required
                value={nomeCompleto}
                onChange={(e)=>setNomeCompleto(e.target.value)}
              />

              <TextField
                label='Contato de Telefone/Celular/Whatsapp'
                required
                value={celular}
                onChange={(e)=>setCelular(e.target.value)}
              />

              <TextField
                label='E-mail do solicitante'
                required
                type='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

              <TextField
                label='Locais de atendimento (se tiver mais de um local, separar)'
                required
                value={locaisatendimento}
                onChange={(e)=>setLocaisAtendimento(e.target.value)}
              />

              <TextField
                label='Por favor, informe a instituição de graduação na qual se formou'
                required
                value={instituicao}
                onChange={(e)=>setInstituicao(e.target.value)}
              />

              <TextField
                label='Por favor, informe o ano de conclusão de sua graduação'
                required
                value={anoconclusao}
                onChange={(e)=>setAnoConclusao(e.target.value)}
              />
              <TextField
                label='Caso tenha especialização acadêmica, favor fazer um resumo.'
                required
                value={especializacaoacademica}
                onChange={(e)=>setEspecializacaoAcademia(e.target.value)}
              />
              <TextField
                label='Caso tenha especialização odontológica, favor fazer um resumo.'
                required
                  value={especializacaoodontologica}
                onChange={(e)=>setEspecializacaoOdontologica(e.target.value)}
              />
              <TextField
                label='Queremos saber um pouco das suas áreas de atuação na odontologia, fazendo um breve resumo'
                required
                value={areadeatuacao}
                onChange={(e)=>setAreaDeAtuacao(e.target.value)}
              />
              <TextField
                label='Por favor, informe seu número de registro no CRO'
                required
                value={cro}
                onChange={(e)=>setCro(e.target.value)}
              />


              <TextField
                label='Ou se preferir, você pode incluir algum arquivo, como ceritificados e outros documentos (pdf)'
                required
                type='file'
                value={curriculo}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => setCurriculo(e.target.files[0])}
              />
            </Box>
            <Box sx={{ mt: 3 }}>
              <Typography sx={{ color: '#363636', fontStyle: 'italic', fontSize: '15px' }}><span style={{ fontWeight: 'bolder' }}>LGPD:</span> Ao enviar este formulário, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
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