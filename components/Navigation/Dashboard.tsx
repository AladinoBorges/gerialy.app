import { BaseComponentPropTypes } from '@/types/generic';
import { Flex } from '@chakra-ui/react';

export function DashboardNavigation({ children }: BaseComponentPropTypes) {
  return (
    <Flex width='100%' minHeight='100vh'>
      {children}
    </Flex>
  );
}
