import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Body } from "./pages/body/Body";
import { AppThemeProvider } from "./context/themeprovider/ThemeProvider";
import { Atendimento } from "./pages/body/atendimento/Atendimento";



function App() {
  return (
    
    <AppThemeProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/atendimento" element={<Atendimento/>}/>
    </Routes>
    </BrowserRouter>
    </AppThemeProvider>
   
  );
}

export default App;
