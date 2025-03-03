import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import "@/styles/globals.css";
import "../utils/i18n";
import { Provider } from 'react-redux';
import store from '@/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  );
}
