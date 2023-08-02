import { ThemeProvider } from "@emotion/react";
import { createContext } from "react";
import { Box, CssBaseline } from "@mui/material";
import { ThemeLight } from "../../theme/ThemeLight";




const ThemeContext = createContext({})


export const AppThemeProvider =({children})=>{
    return(
        <ThemeContext.Provider value={ThemeContext}>
            <ThemeProvider theme={ThemeLight}>
            <CssBaseline/>
            
            {children}
          
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}