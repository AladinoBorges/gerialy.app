import { BaseComponentPropTypes } from '@/types/generic';
import { Button, ButtonGroup, Center, Flex, Heading, HStack, Text } from '@chakra-ui/react';

export function ProductOnboardingNavigationBar({ children }: BaseComponentPropTypes) {
  return (
    <main>
      <Flex width='100%' minHeight='100vh' direction='column' gap='4rem'>
        <HStack padding='0.75rem 2rem' borderBottom='1px solid gray' justify='space-between'>
          <Heading>geria beta</Heading>

          <HStack>
            <Text>produto</Text>
            <Text>preço</Text>
            <Text>sobre</Text>
          </HStack>

          <ButtonGroup>
            <Button>entrar</Button>

            <Button isDisabled variant='outline'>
              registrar
            </Button>
          </ButtonGroup>
        </HStack>

        <Center paddingX='2rem' width='100%'>
          {children}
        </Center>
      </Flex>
    </main>
  );
}
