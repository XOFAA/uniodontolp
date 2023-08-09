import { Carousel } from "../../components/carousel/Carousel"
import { CarouselAcessoRapido } from "../../components/carousel/CarouselAcessoRapido"
import { Footer } from "../../components/footer/Footer"
import { Importante } from "../../components/importante/Importante"
import { NavBar } from "../../components/navbar/NavBar"
import { EncontreDentista } from "../../components/separador/EncontreDentista"

export const Body =()=>{
    return(
     
        <>
           <NavBar/>
           <Carousel/>
           <CarouselAcessoRapido/>
           <EncontreDentista/>
           <Importante/>
           <Footer/>
        </>
    )
}