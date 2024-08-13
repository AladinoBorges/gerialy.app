import { BaseComponentPropTypes } from '@/types/generic';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import { UserLoginForm } from '../Forms/UserLogin';
import { GenericModal } from '../Modals/Generic';

export function ProductOnboardingNavigationBar({ children }: BaseComponentPropTypes) {
  const loginModalDislosures = useDisclosure();

  return (
    <main>
      <Flex width='100%' minHeight='100vh' direction='column' gap='4rem'>
        <HStack padding='0.75rem 4rem' borderBottom='1px solid gray' justify='space-between'>
          <Box>
            <Link href='/'>
              <Text>geria beta</Text>
            </Link>
          </Box>

          {/* <HStack>
            <Text>produto</Text>
            <Text>preço</Text>
            <Text>sobre</Text>
          </HStack> */}

          <ButtonGroup>
            <Button onClick={loginModalDislosures?.onOpen}>entrar</Button>

            <Button isDisabled variant='outline'>
              registrar
            </Button>
          </ButtonGroup>
        </HStack>

        <Center paddingX='2rem' width='100%'>
          {children}
        </Center>

        <GenericModal
          isOpen={loginModalDislosures.isOpen}
          onClose={loginModalDislosures.onClose}
          title='entrar'
        >
          <UserLoginForm role='applicant' />
        </GenericModal>
      </Flex>
    </main>
  );
}
