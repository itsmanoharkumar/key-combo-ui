import '@/styles/globals.css';
import ApplicationHeader from '@/components/ApplicationHeader';
import { wrapper } from '@/store/store';
// import { store } from '@/store/store';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CookieConsent } from 'react-cookie-consent';
import { Provider } from 'react-redux';

export default function App({Component, ...rest}: AppProps) {
  const {store, props} = wrapper.useWrappedStore(rest);
  const {pageProps} = props;
  return (
    <>
      <Provider store={store}>
        <ApplicationHeader/>
        <Component {...pageProps} />
        <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
      </Provider>
    </>
  );
}
