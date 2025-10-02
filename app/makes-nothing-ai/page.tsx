'use client';

import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { Center, Text } from '@chakra-ui/react';

export default function Main() {
  return (
    <DashboardNavigation isLogged={false}>
      <Center width='100%' height='90vh' flexDirection='column'>
        <Text>main, the artificial intelligence that makes nothing</Text>
      </Center>
    </DashboardNavigation>
  );
}
