import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./pages/body/Body";
import { AppThemeProvider } from "./context/themeprovider/ThemeProvider";
import { Atendimento } from "./pages/atendimento/Atendimento";
import { PessoaJuridica } from "./pages/pessoajuridica/PessoaJuridica";
import { ServidorPublico } from "./pages/servidorpublico/ServidorPublico";
import { Renegociacao } from "./pages/renegociacao/Renegociacao";
import { TrocaCartao } from "./pages/trocacartao/TrocaCartao";
import { ProntoAtendimento } from "./pages/prontoatendimento/ProntoAtendimento";
import { PessoaFisica } from "./pages/pessoafisica/PessoaFisica";


function App() {
  

  return (
    <AppThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/atendimento" element={<Atendimento />} />
            <Route path="/pessoajuridica" element={<PessoaJuridica />} />
            <Route path="/pessoafisica" element={<PessoaFisica />} />
            <Route path="/servidorpublico" element={<ServidorPublico />} />
            <Route path="/trocacartao" element={<TrocaCartao />} />
            <Route path="/renegociacao" element={<Renegociacao />} />
            <Route path="/prontoatendimento" element={<ProntoAtendimento />} />
          </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
