import '@/styles/globals.css';
import ApplicationHeader from '@/components/ApplicationHeader';
import { store } from '@/store/store';
import type { AppProps } from 'next/app';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Provider store={store}>
      <ApplicationHeader/>
      <Component {...pageProps} />
      </Provider>
    </>
  );
}
