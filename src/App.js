import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./pages/body/Body";
import { AppThemeProvider } from "./context/themeprovider/ThemeProvider";
import { Atendimento } from "./pages/atendimento/Atendimento";
import { PessoaJuridica } from "./pages/pessoajuridica/PessoaJuridica";




function App() {
  return (
    
    <AppThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/atendimento" element={<Atendimento/>}/>
      <Route path="/pessoajuridica" element={<PessoaJuridica/>}/>
    </Routes>
    </BrowserRouter>
    </AppThemeProvider>
   
  );
}

export default App;
