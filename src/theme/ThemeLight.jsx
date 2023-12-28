import { createTheme } from "@mui/material";

export const ThemeLight = createTheme({
  palette: {
    primary: {
      main: '#A60069',
    },
    background: {
      default: '#f1f1f1'
    }
  },
  typography: {
    fontFamily: 'Georama, sans-serif',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          fontStyle: 'italic',
        },
      },
    },
  },
});
