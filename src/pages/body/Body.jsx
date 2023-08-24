
import { Box } from "@mui/material"
import { BoxAcessos } from "../../components/boxacessos/BoxAcessos"
import { Carousel } from "../../components/carousel/Carousel"
import { CarouselAcessoRapido } from "../../components/carousel/CarouselAcessoRapido"
import { DownloadApp } from "../../components/downloadapp/DownloadApp"
import { Footer } from "../../components/footer/Footer"
import { Importante } from "../../components/importante/Importante"
import { NavBar } from "../../components/navbar/NavBar"
import { NovidadesBlog } from "../../components/novidadesblog/NovidadesBlog"
import { Parcerias } from "../../components/parcerias/Parcerias"
import { EncontreDentista } from "../../components/separador/EncontreDentista"
import { VejaOsPlanos } from "../../components/vejaosplanos/VejaOsPlanos"
import { BotoesPlanos } from "../../components/botoesplanos/BotoesPlanos"

export const Body =()=>{
    return(
     
        <>
             
           <NavBar/>
           <Carousel/>
            <BoxAcessos/>
            <VejaOsPlanos/>
            <Parcerias/>
           <EncontreDentista/>
           <CarouselAcessoRapido/>
           <Importante/>
           <NovidadesBlog/>
           <BoxAcessos/>
           <Footer/>
        </>
    )
}