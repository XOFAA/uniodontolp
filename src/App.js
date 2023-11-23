import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppThemeProvider } from "./context/themeprovider/ThemeProvider";
import { PessoaJuridica } from "./pages/pessoajuridica/PessoaJuridica";
import { ServidorPublico } from "./pages/servidorpublico/ServidorPublico";
import { Renegociacao } from "./pages/renegociacao/Renegociacao";
import { TrocaCartao } from "./pages/trocacartao/TrocaCartao";
import { ProntoAtendimento } from "./pages/prontoatendimento/ProntoAtendimento";
import { PessoaFisica } from "./pages/pessoafisica/PessoaFisica";
import { Home } from "./pages/body/Home";
import { Atendimento } from "./pages/atendimento/Atendimento";
import { FacaParte } from "./pages/facaparte/FacaParte";
import { Institucional } from "./pages/institucional/Institucional";



function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
     
          <Routes >
           <Route path="/" element={<Home/>}/>
            <Route path="/atendimento" element={<Atendimento/>}/>
            <Route path="/pessoajuridica" element={<PessoaJuridica/>}/>
            <Route path="/pessoafisica" element={<PessoaFisica/>} />
            <Route path="/servidorpublico" element={<ServidorPublico/>}/>
            <Route path="/trocacartao" element={<TrocaCartao/>} />
            <Route path="/renegociacao" element={<Renegociacao/>} />
            <Route path="/prontoatendimento" element={<ProntoAtendimento/>} />
            <Route path="/facaparte" element={<FacaParte/>} />
            <Route path="/institucional" element={<Institucional/>} />

          </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
