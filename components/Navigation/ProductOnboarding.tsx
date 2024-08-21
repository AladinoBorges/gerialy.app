import { BaseComponentPropTypes } from '@/types/generic';
import { Button, ButtonGroup, Flex, HStack, useDisclosure } from '@chakra-ui/react';
import { ClickableLogo } from '../Branding/ClickableLogo';
import { UserLoginForm } from '../Forms/UserLogin';
import { GenericModal } from '../Modals/Generic';

export function ProductOnboardingNavigationBar({ children }: BaseComponentPropTypes) {
  const loginModalDislosures = useDisclosure();

  return (
    <main>
      <Flex width='100%' minHeight='100vh' direction='column' gap='4rem' padding='0 0 4rem 0'>
        <HStack padding='0.75rem 4rem' borderBottom='1px solid gray' justify='space-between'>
          <ClickableLogo />

          <ButtonGroup>
            <Button onClick={loginModalDislosures?.onOpen}>entrar</Button>

            <Button isDisabled variant='outline'>
              registrar
            </Button>
          </ButtonGroup>
        </HStack>

        <Flex
          gap='4rem'
          width='100%'
          marginX='auto'
          direction='column'
          paddingX={{ base: '1rem', md: '4rem' }}
        >
          {children}
        </Flex>

        <GenericModal
          isOpen={loginModalDislosures.isOpen}
          onClose={loginModalDislosures.onClose}
          title=''
        >
          <UserLoginForm />
        </GenericModal>
      </Flex>
    </main>
  );
}
