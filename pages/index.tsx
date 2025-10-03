'use client';

import { MinimalistHeroHeader } from '@/components/Heroes/minimalist';
import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { Center } from '@chakra-ui/react';

export default function Home() {
  return (
    <DashboardNavigation isLogged={false} complementaryHeader='software house by falbor'>
      <Center height='90vh' flexDirection='column'>
        <MinimalistHeroHeader />
      </Center>
    </DashboardNavigation>
  );
}
