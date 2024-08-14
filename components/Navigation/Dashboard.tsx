import { BaseComponentPropTypes } from '@/types/generic';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';

export function DashboardNavigation({ children }: BaseComponentPropTypes) {
  return (
    <Flex width='100%' minHeight='100vh' gap='2rem' direction='column'>
      <HStack
        spacing='1rem'
        justify='space-between'
        borderBottom='1px solid gray'
        padding={{ base: '1.25rem 1rem', md: '1.25rem 4rem' }}
      >
        <Box>
          <Link href='/'>
            <Text>geria beta</Text>
          </Link>
        </Box>

        <HStack>
          <Link href='/applicant/dashboard'>
            <Text>minhas vagas</Text>
          </Link>

          <Link href='/applicant/dashboard/new'>
            <Text>+ nova análise</Text>
          </Link>

          <Link href='/applicant/profile'>
            <Text>perfil</Text>
          </Link>
        </HStack>
      </HStack>

      <Flex width='100%' maxWidth='1440px' marginX='auto' paddingX={{ base: '1rem', md: '4rem' }}>
        {children}
      </Flex>
    </Flex>
  );
}
