import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box } from '@chakra-ui/react';
import customTheme from '../theme';
import Footer from '../components/footer';
import Header from '../components/header';
import MobileNavigation from '../components/mobile-navigation';

function MyApp({ Component, pageProps }: AppProps) {
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
