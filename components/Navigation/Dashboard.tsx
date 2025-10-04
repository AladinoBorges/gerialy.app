import { session } from '@/services/session';
import { DashboardNavigationPropTypes } from '@/types/generic';
import { Button, ButtonGroup, Flex, HStack, useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BrowserTabHead from '../Branding/BrowserTabHead';
import { ClickableLogo } from '../Branding/ClickableLogo';
import { GenericModal } from '../Modals/Generic';
import MobileNavigationMenu from './MobileNavigationMenu';

export function DashboardNavigation({
  isLogged,
  complementaryHeader,
  children,
}: DashboardNavigationPropTypes) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const logoutDisclosures = useDisclosure();

  const startLogoutProcess = () => {
    logoutDisclosures?.onOpen();
  };

  const handleLogout = async () => {
    setIsLoading(true);

    session.eraseCookie('session');

    router.push('/');
  };

  return (
    <Flex maxWidth='1440px' minHeight='100vh' direction='column' marginX='auto'>
      <BrowserTabHead complementaryHeader={complementaryHeader} />

      <HStack spacing='1rem' justify='space-between' paddingX={{ base: '1rem', md: '4rem' }}>
        <ClickableLogo />

        <MobileNavigationMenu startLogoutProcess={startLogoutProcess} />
      </HStack>

      <Flex
        width='100%'
        maxWidth='1440px'
        marginX='auto'
        padding={isLogged ? { base: '4rem 1rem', md: '8rem 4rem' } : {}}
      >
        {children}
      </Flex>

      {logoutDisclosures?.isOpen ? (
        <GenericModal
          title='do you want to leave?'
          isOpen={logoutDisclosures?.isOpen}
          onClose={logoutDisclosures?.onClose}
        >
          <ButtonGroup>
            <Button isLoading={isLoading} onClick={handleLogout}>
              yes
            </Button>

            <Button isLoading={isLoading} variant='outline' onClick={logoutDisclosures?.onClose}>
              no
            </Button>
          </ButtonGroup>
        </GenericModal>
      ) : null}
    </Flex>
  );
}
