import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import ResponsiveAppBar from "components/AppBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: [
      '"Oxanium"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResponsiveAppBar/>

      <Container maxWidth="xl">
      <Component {...pageProps} />
      </Container>
    </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
