'use client';

import { HeroHeader } from '@/components/Heroes/minimalist';
import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { Center } from '@chakra-ui/react';

export default function Home() {
  return (
    <DashboardNavigation isLogged={false}>
      <Center height='100vh' flexDirection='column'>
        <HeroHeader />
      </Center>
    </DashboardNavigation>
  );
}
