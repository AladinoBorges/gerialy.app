import { BaseComponentPropTypes } from '@/types/generic';
import { Flex } from '@chakra-ui/react';

export function DashboardNavigation({ children }: BaseComponentPropTypes) {
  return <Flex>{children}</Flex>;
}
