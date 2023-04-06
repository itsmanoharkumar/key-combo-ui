import UserAuthContext from "@/context/UserAuthContext";
import Layout from "@/layouts/layout";
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import axios from "axios";
import type { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { CookieConsent } from "react-cookie-consent";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
axios.defaults.withCredentials = true;

const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err: any) {
    throw err.response.data;
  }
};

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <CookiesProvider>
          <Provider store={store}>
            <UserAuthContext>
              <Layout>
                <Component {...pageProps} />
                <CookieConsent>
                  This website uses cookies to enhance the user experience.
                </CookieConsent>
              </Layout>
            </UserAuthContext>
          </Provider>
        </CookiesProvider>
      </SWRConfig>
    </>
  );
}
