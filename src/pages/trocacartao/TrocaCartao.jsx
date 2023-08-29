import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Link, Typography } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import { Footer } from "../../components/footer/Footer"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export const TrocaCartao =()=>{
    return(
        <>
    
      <NavBar/>
        <Box sx={{height:'420px',background: 'linear-gradient(to bottom, #CC9DFF 50%, #f1f1f1 50%)',mt:{xs:8,md:15}}}>
        <Container>
            <Box>
            <Typography sx={{pt:6,color:'#363636',fontSize:'28px',fontStyle:'italic'}}>Se seu cartão de crédito venceu, foi furtado ou roubado, <span style={{fontWeight:'bold'}}>altere os dados para um novo cartão</span></Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:3,mt:8}}>
            <Box sx={{backgroundImage: 'url("/images/pagamentoscartoes/link1.svg")',backgroundSize:'cover',borderRadius:'10px',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:{xs:'100%',md:'260px'}}}>
            
            <Box sx={{p:3}}>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',width:'210px',color:'#fff'}}>Se seu plano tem pagamento via cartão de crédito, clique aqui para alterar os dados para um novo cartão</Typography>
            </Box>
     
        </Box>
        <Box sx={{backgroundImage:'url("/images/pagamentoscartoes/link2.svg")',backgroundSize:'cover',borderRadius:'10px',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:{xs:'100%',md:'260px'}}}>
           
        <Box sx={{p:3}}>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',width:'210px',color:'#fff'}}>Já alterou os dados do cartão mas tem débitos em aberto? Acione o WebChat e solicite o desconto das mensalidades pendentes no novo cartão</Typography>
            </Box>
    
       </Box>
       </Box>
       </Container>
       </Box>
       <Container>


       <Box sx={{display:'flex',justifyContent:'center'}}>
        <Typography sx={{color:'#A60069',fontSize:'28px',fontStyle:'italic',my:5}}><span style={{fontWeight:'bold'}}>Dúvidas</span> Frequentes</Typography>
       </Box>

            <Box sx={{pb:10}}>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 7</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 8</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 9</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 10</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 11</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
   
            </Box>
            </Container>
      
        <Footer/>
   
        </>
    )
}