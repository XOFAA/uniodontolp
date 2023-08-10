import { Carousel } from "../../components/carousel/Carousel"
import { CarouselAcessoRapido } from "../../components/carousel/CarouselAcessoRapido"
import { Footer } from "../../components/footer/Footer"
import { Importante } from "../../components/importante/Importante"
import { NavBar } from "../../components/navbar/NavBar"
import { NovidadesBlog } from "../../components/novidadesblog/NovidadesBlog"
import { EncontreDentista } from "../../components/separador/EncontreDentista"
import { VejaOsPlanos } from "../../components/vejaosplanos/VejaOsPlanos"

export const Body =()=>{
    return(
     
        <>
           <NavBar/>
           <Carousel/>
           <CarouselAcessoRapido/>
           <EncontreDentista/>
           <Importante/>
           <NovidadesBlog/>
           <VejaOsPlanos/>
           <Footer/>
        </>
    )
}