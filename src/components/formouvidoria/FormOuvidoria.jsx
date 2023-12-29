import { Box, Button, Container, Typography, TextField, Link, MenuItem, CircularProgress, Alert, Snackbar } from '@mui/material';
import { useState } from 'react';
import Api from '../../config/Api';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export const FormOuvidoria = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tipomanifestacao,setTipoManifestacao]=useState('')
    const [protocolosab,setProtocoloSab]=useState('')
    const [informacaomanifestacao,setInformacaoManifestacao]=useState('')
    const [nomesolicitante,setNomeSolicitante]=useState('')
    const [email,setEmail]=useState('')
    const [celular,setCelular]=useState('')
    const [arquivo, setArquivo] = useState()
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [hcaptchaKey, setHcaptchaKey] = useState(new Date().getTime().toString());
    const [envioSucesso, setEnvioSucesso] = useState(false)
    const [identificacao,setIdentificacao]=useState('')
    const [manifestacao,setManifestacao]=useState('')
    const [manifestacaoresumo,setManifestacaoResumo]=useState('')

    const TipoReclamacao = [
        {
            value: 'Reclamação',
        },
        {
            value: 'Denúncia',

        },
        {
            value: 'Informação',

        },
        {
            value: 'Elogio',

        }, {
            value: 'Dúvida',

        },
    ];

    const Identificacao = [
        {
            value: 'Padrão',
        },
        {
            value: 'Anônimo',

        },
        {
            value: 'Confidencial',

        },
      
    ];

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
    
        Api.post('/enviar-email-ouvidoria', {
        tipomanifestacao: tipomanifestacao,
        protocolosab: protocolosab,
        informacaomanifestacao: informacaomanifestacao,
        manifestacao:manifestacao,
        identificacao: identificacao,
        nomesolicitante: nomesolicitante,
        email: email,
        celular: celular,
        recaptchaToken: recaptchaValue,
        pdfFile: arquivo
    
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
         
           setProtocoloSab('')
           setInformacaoManifestacao('')
           setNomeSolicitante('')
           setEmail('')
           setCelular('')
           
          })
          .catch(function (error) {
            setSnackbarMessage('Falha interna, tente novamente mais tarde')
            setSnackbarOpen(true)
            setEnvioSucesso(false);
            setRecaptchaValue(null)
            console.log(error)
            setHcaptchaKey(new Date().getTime().toString());
          
          }).finally(() => {
            // Configura o estado de loading de volta para false, independentemente do resultado
            setIsLoading(false);
          });
      };
    
    return (

        <Container>

            <Box component={'form'} onSubmit={handleSubmit} method="post" enctype="multipart/form-data" sx={{ display: 'flex', flexDirection: 'column', mt: 5, boxShadow: 5, p: 5, borderRadius: '10px', mb: 5 }}>
                <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign:{xs:'center',md:'start'}}}>
                        <Typography sx={{ fontSize: {xs:'22px',md:'28px'}, fontStyle: 'italic', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Cadastro</span> de manifestação</Typography>
                        <Typography sx={{ color: '#363636', fontSize: {xs:'18px',md:'20px'}, fontStyle: 'italic' }}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada investigação e resolução</Typography>

                    </Box>
                   
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Selecione o seu tipo de manifestação"
                        required
                        value={manifestacao}
                        onChange={(e)=>setManifestacao(e.target.value)}
                      
                    >
                        {TipoReclamacao.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label='Informe o número de protocolo do atendimento anterior (realizado no SAB)'
                        required
                        onChange={(e)=>setProtocoloSab(e.target.value)}
                        value={protocolosab}
                    />

                    <TextField
                        label='Por favor, descreva minuciosamente as informações para embasar sua menifestação'
                        required
                        value={manifestacaoresumo}
                        onChange={(e)=>setManifestacaoResumo(e.target.value)}
                    />


                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Por favor, selecione o tipo de identificação que seja o tratamento"
                        required
                        value={identificacao}
                        onChange={(e)=>setIdentificacao(e.target.value)}
                      
                    >
                        {Identificacao.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label='Nome do solicitante para contato'
                        required
                        value={nomesolicitante}
                        onChange={(e)=>setNomeSolicitante(e.target.value)}
                        disabled={identificacao === 'Anônimo' ? true : false}
                    />

                    <TextField
                        label='E-mail'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        disabled={identificacao === 'Anônimo' ? true : false}
                    />
                    <TextField
                    label='Contato de Telefone/Celular/Whatsapp'
                    disabled={identificacao === 'Anônimo' ? true : false}
                    onChange={(e)=>setCelular(e.target.value)}
                    value={celular}
                    />
                    <TextField
                        label='Caso queira, inclua em anexo algum documento para embasar sua menifestação (jpg, jpeg, png, pdf, doc e docx)'
                        onChange={(e) => setArquivo(e.target.files[0])}
                        type='file'
                        InputLabelProps={{ shrink: true }}
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
              {envioSucesso ? <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
              <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>{snackbarMessage}</Typography> 
              </Alert>
            </Snackbar> : (
              <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
                 <Typography sx={{fontWeight:'bold',fontSize:'20px'}}>{snackbarMessage}</Typography> 
                </Alert>
              </Snackbar>
            )}
            </Box>
        </Container>
    )
}