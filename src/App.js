import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./pages/body/Body";
import { AppThemeProvider } from "./context/themeprovider/ThemeProvider";
import { Atendimento } from "./pages/atendimento/Atendimento";
import { PessoaJuridica } from "./pages/pessoajuridica/PessoaJuridica";
import { ServidorPublico } from "./pages/servidorpublico/ServidorPublico";

import { Renegociacao } from "./pages/renegociacao/Renegociacao";
import { TrocaCartao } from "./pages/trocacartao/TrocaCartao";

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/pessoajuridica" element={<PessoaJuridica />} />
          <Route path="/servidorpublico" element={<ServidorPublico />} />
          <Route path="/trocacartao" element={<TrocaCartao />} />
          <Route path="/renegociacao" element={<Renegociacao />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App; 