/* Styles */
import 'styles/globals.css';

/* Types */
import type { AppProps } from 'next/app';

/* Provider */
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

/* Components */
import { AnimatePresence } from 'framer-motion';
import Layout from 'src/components/Layout';

/* lib */
import { store } from '@libs/client/redux/store';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider attribute="class" enableSystem={true}>
          <Layout>
            <AnimatePresence
              mode="wait"
              initial={true}
              onExitComplete={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0 });
                }
              }}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
