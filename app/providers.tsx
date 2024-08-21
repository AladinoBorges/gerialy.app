'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function Providers({ children }: { children: React.ReactNode }) {
  const tanstackQueryClient = new QueryClient();

  return (
    <CacheProvider>
      <QueryClientProvider client={tanstackQueryClient}>
        <ChakraProvider>{children}</ChakraProvider>
      </QueryClientProvider>
    </CacheProvider>
  );
}
