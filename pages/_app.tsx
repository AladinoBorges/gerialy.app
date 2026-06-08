import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, Box, Spinner } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { LanguageProvider } from '@/hooks/useTranslation';
import { useEffect, useState } from 'react';

const tanstackQueryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <CacheProvider>
      <QueryClientProvider client={tanstackQueryClient}>
        <ChakraProvider>
          <LanguageProvider>
            <Component {...pageProps} />
            {isLoading && (
              <Box
                position="fixed"
                top="0"
                left="0"
                width="100vw"
                height="100vh"
                bg="white"
                _dark={{ bg: 'gray.900' }}
                zIndex={9999}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Spinner size="xl" color="blue.500" thickness="4px" />
              </Box>
            )}
          </LanguageProvider>
        </ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
