import { Box, Typography } from "@mui/material";

export const EncontreDentista = () => {
  const boxStyle = {
    backgroundImage: 'url("Separador Encontre Dentista.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100px", // Ajuste a altura conforme necessário
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative", // Adicione position: relative à Box para usá-la como referência na posição do elemento de sobreposição
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Você pode ajustar a opacidade aqui
  
    zIndex: 1,
  };

  const textStyle = {
    zIndex: 2,
    fontSize: "50px",
    color: "#fff",
    fontWeight: "bold",
  };

  return (
    <Box sx={boxStyle}>
      <Box sx={overlayStyle}></Box>
      <Box sx={textStyle}>
        <Typography sx={{fontStyle:'italic',fontSize:'28px'}}>
          <span style={{ fontWeight: "bolder",fontSize:'28px' }}>Sempre </span>tem um dentista próximo de você
        </Typography>
      </Box>
    </Box>
  );
};
