import { session } from '@/services/session';
import { BaseComponentPropTypes } from '@/types/generic';
import { Box, Button, ButtonGroup, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GenericModal } from '../Modals/Generic';

export function DashboardNavigation({ children }: BaseComponentPropTypes) {
  const router = useRouter();

  const logoutDisclosures = useDisclosure();

  const startLogoutProcess = () => {
    logoutDisclosures?.onOpen();
  };

  const handleLogout = async () => {
    await session.eraseCookie('session');

    router.push('/');
  };

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

          <Button variant='outline' onClick={startLogoutProcess}>
            sair
          </Button>
        </HStack>
      </HStack>

      <Flex width='100%' maxWidth='1440px' marginX='auto' paddingX={{ base: '1rem', md: '4rem' }}>
        {children}
      </Flex>

      {logoutDisclosures?.isOpen ? (
        <GenericModal
          title='deseja sair da aplicação?'
          isOpen={logoutDisclosures?.isOpen}
          onClose={logoutDisclosures?.onClose}
        >
          <ButtonGroup>
            <Button onClick={handleLogout}>sim</Button>

            <Button variant='outline' onClick={logoutDisclosures?.onClose}>
              não
            </Button>
          </ButtonGroup>
        </GenericModal>
      ) : null}
    </Flex>
  );
}
