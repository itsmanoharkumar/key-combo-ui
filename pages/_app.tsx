import UserAuthContext from "@/context/UserAuthContext";
import createEmotionCache from "@/createEmotionCache";
import Layout from "@/layouts/layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { getTheme } from "@/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "@fontsource/poppins/100-italic.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200-italic.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300-italic.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900-italic.css";
import "@fontsource/poppins/900.css";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Analytics } from "@vercel/analytics/react";
import axios from "axios";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps, emotionCache = clientSideEmotionCache } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(() => getTheme({ prefersDarkMode }), [prefersDarkMode]);

  return (
    <>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <SWRConfig>
              <CookiesProvider>
                <Provider store={store}>
                  <UserAuthContext>
                    <Layout>
                      <Component {...pageProps} />
                      <Analytics />
                      {/*<CookieConsent>*/}
                      {/*  This website uses cookies to enhance the user experience.*/}
                      {/*</CookieConsent>*/}
                    </Layout>
                  </UserAuthContext>
                </Provider>
              </CookiesProvider>
            </SWRConfig>
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </>
  );
}
