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
import { Ouvidoria } from "./pages/ouvidoria/Ouvidoria";
import { Compliance } from "./pages/compilance/Compliance";
import { Lgpd } from "./pages/lgpd/Lgpd";
import { Cooperativismo } from "./pages/cooperativismo/Cooperativismo";
import { Cpd } from "./pages/cpd/Cpd";




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
            <Route path="/ouvidoria" element={<Ouvidoria/>} />
            <Route path="/compliance" element={<Compliance/>} />
            <Route path="/lgpd" element={<Lgpd/>} />
            <Route path="/cooperativismo" element={<Cooperativismo/>} />
            <Route path="/cpd" element={<Cpd/>} />
          </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
