import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

const tanstackQueryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <QueryClientProvider client={tanstackQueryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
