import { session } from '@/services/session';
import { DashboardNavigationPropTypes } from '@/types/generic';
import { Button, ButtonGroup, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ClickableLogo } from '../Branding/ClickableLogo';
import { GenericModal } from '../Modals/Generic';

export function DashboardNavigation({ isLogged, children }: DashboardNavigationPropTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const links = [
    { label: 'about us', href: '/about' },
    { label: 'legal', href: '/legal' },
    { label: 'roadmap', href: '/roadmap' },
    { label: 'projects', href: '/projects' },
    { label: 'marketplace', href: '/marketplace' },
    { label: 'mAIn', href: '/makes-nothing-ai' },
  ];

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
    <Flex width='100%' minHeight='100vh' gap='2rem' direction='column'>
      <HStack
        spacing='1rem'
        justify='space-between'
        borderBottom='1px solid gray'
        padding={{ base: '1.25rem 1rem', md: '1.25rem 4rem' }}
      >
        <ClickableLogo />

        <HStack spacing='1.5rem'>
          {links.map(({ label, href }, index) => (
            <Link href={href} key={index}>
              <Text>{label}</Text>
            </Link>
          ))}

          {isLogged ? (
            <Button variant='outline' onClick={startLogoutProcess}>
              logout
            </Button>
          ) : null}
        </HStack>
      </HStack>

      <Flex
        width='100%'
        maxWidth='1440px'
        marginX='auto'
        padding={{ base: '4rem 1rem', md: '8rem 4rem' }}
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
