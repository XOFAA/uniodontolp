import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { BoxAcessos } from "../../components/boxacessos/BoxAcessos";
import { Carousel } from "../../components/carousel/Carousel";
import { CarouselAcessoRapido } from "../../components/carousel/CarouselAcessoRapido";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navbar/NavBar";
import { NovidadesBlog } from "../../components/novidadesblog/NovidadesBlog";
import { Parcerias } from "../../components/parcerias/Parcerias";
import { EncontreDentista } from "../../components/separador/EncontreDentista";
import { VejaOsPlanos } from "../../components/vejaosplanos/VejaOsPlanos";
import AppWithPreloader from "../../components/appwithpreloader/AppWithPreloader";

export const Home = () => {
  useEffect(() => {
    scrollToTop()
  }, []);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  return (
    <AppWithPreloader>
      <NavBar backgroundColor={'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0))'} />
      <Carousel />
      <BoxAcessos />
      <VejaOsPlanos />
      <Parcerias />
      <EncontreDentista />
      <CarouselAcessoRapido />
      <NovidadesBlog />
      <Box sx={{ pb: 5 }}>
        <BoxAcessos />
      </Box>
      <Footer />
      </AppWithPreloader>
  );
};

