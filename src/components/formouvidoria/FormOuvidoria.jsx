
import { Box, Button, Container, Typography, TextField, Link, MenuItem } from '@mui/material';
export const FormOuvidoria = () => {
    const TipoReclamacao = [
        {
            value: 'Atendimento',
        },
        {
            value: 'Vendas',

        },
        {
            value: 'Saúde odontológica',

        },
        {
            value: 'Recursos Humanos',

        }, {
            value: 'Tecnologia da Informação(TI)',

        },
    ];
    return (
        <Container>



            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 5, boxShadow: 5, p: 5, borderRadius: '10px', mb: 5 }}>
                <Box sx={{ display: 'flex',flexDirection:{xs:'column',md:'row'}}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign:{xs:'center',md:'start'}}}>
                        <Typography sx={{ fontSize: {xs:'22px',md:'28px'}, fontStyle: 'italic', color: '#A60069' }}><span style={{ fontWeight: 'bold' }}>Cadastro</span> de manifestação</Typography>
                        <Typography sx={{ color: '#363636', fontSize: {xs:'18px',md:'20px'}, fontStyle: 'italic' }}>Solicitamos que preencha o máximo de informações possíveis para que seja realizada a avaliação por parte dos conselhos diretivos</Typography>

                    </Box>
                    <Link href='#' target='_blank' sx={{ textDecoration: 'none' }}>

                        <Button variant='contained' sx={{ display:'flex', flexDirection: 'column', textTransform: 'none', height: {xs:'116px',md:'124px'}, width: {xs:'100%',md:'370px'}, borderRadius: '10px', bgcolor: '#A60069', mr: 5 }}>

                            <Typography sx={{ fontSize: {xs:'17px',md:'22px'}, fontStyle: 'italic', textAlign: 'center' }}>Copie o número do protocolo deste registro</Typography>
                            <Typography sx={{ fontSize: '27px', fontWeight: 'bolder', fontStyle: 'italic', textAlign: 'center' }}>UN20230297</Typography>
                        </Button>
                    </Link>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Selecione o seu tipo de manifestação"
                        required
                      
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

                    />

                    <TextField
                        label='Por favor, descreva minuciosamente as informações para embasar sua menifestação'
                        required
                    />


                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Por favor, selecione o tipo de identificação que seja o tratamento"
                        required
                      
                    >
                        {TipoReclamacao.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        label='Nome do solicitante para contato'
                        required
                    />

                    <TextField
                        label='E-mail'

                    />
                    <TextField
                    label='Contato de Telefone/Celular/Whatsapp'
                    />
                    <TextField
                        label='Caso queira, inclua em anexo algum documento para embasar sua menifestação (jpg, jpeg, png, pdf, doc e docx)'
                       
                        type='file'
                        InputLabelProps={{ shrink: true }}
                    />
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: '#363636', fontStyle: 'italic', fontSize: '15px' }}><span style={{ fontWeight: 'bolder' }}>LGPD:</span> Ao enviar este formulário, estou declarando, para todos os fins, ser titular dos dados pessoais inseridos e, desde já, consinto com o tratamento dos mesmos para os fins do contato referido na respectiva mensagem inserida no campo apropriado para tanto.</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Button variant='contained' sx={{ width: '256px', height: '48px' ,fontWeight:'bold',fontStyle:'italic',fontSize:'18px',textTransform:'none'}}>Enviar Manifestação</Button>
                </Box>
            </Box>
        </Container>
    )
}