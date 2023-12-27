import { Box, Container,  Link,  Typography } from "@mui/material"
import { NavBar } from "../../components/navbar/NavBar"
import { Footer } from "../../components/footer/Footer"
import TawkToChatbot from "../../config/TawkToChatbot";
import { Faqreneg } from "../../components/faqrenegociacao/Faqreneg";
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader";
export const TrocaCartao =()=>{
    return(
        <AppWithPreloader>

      
    
      <NavBar/>
      <TawkToChatbot/>
        <Box sx={{height:{xs:'100%',md:'420px'},background: 'linear-gradient(to bottom, #CC9DFF 50%, #f1f1f1 50%)',mt:{xs:8,md:15}}}>
        <Container>
            <Box>
            <Typography sx={{pt:6,color:'#363636',fontSize:'28px',fontStyle:'italic',textAlign:'center'}}>Se seu cartão de crédito venceu, foi furtado ou roubado, <span style={{fontWeight:'bold'}}>altere os dados para um novo cartão</span></Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'},gap:3,mt:8}}>
         

            <Link href="https://seuplanoonline.fisistemas.com.br/index.php?singular=8&311391Ec00P&18bQ7F118s" target="_blank" sx={{backgroundImage: 'url("/images/pagamentoscartoes/link1.svg")',textDecoration:'none',backgroundSize:'cover',borderRadius:'10px',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:{xs:'100%',md:'260px'}}}>
            
            <Box sx={{p:3}}>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',width:'210px',color:'#fff'}}>Se seu plano tem pagamento via cartão de crédito, clique aqui para alterar os dados para um novo cartão</Typography>
            </Box>
     
        </Link>
      
        <Link href="https://tawk.to/chat/61bb612ec82c976b71c1c758/1fn1v77sb" target="_blank" sx={{textDecoration:'none',backgroundImage:'url("/images/pagamentoscartoes/link2.svg")',backgroundSize:'cover',borderRadius:'10px',backgroundRepeat:'no-repeat',backgroundPosition:'center',width:'100%',height:{xs:'100%',md:'260px'}}}>
           
        <Box sx={{p:3}}>
            <Typography sx={{fontStyle:'italic',fontSize:'20px',width:'210px',color:'#fff'}}>Já alterou os dados do cartão mas tem débitos em aberto? Acione o WebChat e solicite o desconto das mensalidades pendentes no novo cartão</Typography>
            </Box>
    
       </Link>
       </Box>
       </Container>
       </Box>
       <Container>

            </Container>
            <Faqreneg/>
      
        <Footer/>
   
        </AppWithPreloader>
    )
}