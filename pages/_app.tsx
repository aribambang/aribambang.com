import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, Box } from '@chakra-ui/react';
import customTheme from '../theme';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
