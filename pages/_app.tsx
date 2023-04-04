import Layout from '@/layouts/layout';
import { wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { CookiesProvider } from 'react-cookie';
import { CookieConsent } from 'react-cookie-consent';
import { Provider } from 'react-redux';

export default function App({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const {pageProps} = props;
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
            <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
          </Layout>
        </Provider>
      </CookiesProvider>
    </>
  );
}
