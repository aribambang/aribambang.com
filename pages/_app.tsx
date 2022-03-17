import { useEffect } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Router from 'next/router';
import customTheme from '../theme';
import Footer from '../components/footer';
import Header from '../components/header';
import MobileNavigation from '../components/mobile-navigation';
import { pageView } from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: URL) => pageView(url);
    Router.events.on('routeChangeComplete', () => handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [Router.events]);

  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Box>
      <Footer />
      <MobileNavigation />
    </ChakraProvider>
  );
}

export default MyApp;
