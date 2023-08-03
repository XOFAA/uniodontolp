import { Carousel } from "../../components/carousel/Carousel"
import { CarouselAcessoRapido } from "../../components/carousel/CarouselAcessoRapido"
import { Footer } from "../../components/footer/Footer"
import { NavBar } from "../../components/navbar/NavBar"

export const Body =()=>{
    return(
     
        <>
           <NavBar/>
           <Carousel/>
           <CarouselAcessoRapido/>
           <Footer/>
        </>
    )
}