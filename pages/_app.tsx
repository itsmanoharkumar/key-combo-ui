import UserAuthContext from "@/context/UserAuthContext";
import Layout from "@/layouts/layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import axios from "axios";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
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
    </>
  );
}
