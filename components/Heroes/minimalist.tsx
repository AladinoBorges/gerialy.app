import { Box, Button, chakra, Icon, Stack, Text } from '@chakra-ui/react';

export function HeroHeader() {
  return (
    <Box
      textAlign={{ base: 'left', md: 'center' }}
      width={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
    >
      <chakra.h1
        marginBottom={6}
        color='gray.900'
        fontWeight='bold'
        lineHeight='none'
        _dark={{ color: 'gray.100' }}
        fontSize={{ base: '4xl', md: '6xl' }}
        letterSpacing={{ base: 'normal', md: 'tight' }}
      >
        imagine
        <br />
        <Text
          width='full'
          bgClip='text'
          fontWeight='extrabold'
          display={{ base: 'block', lg: 'inline' }}
          bgGradient='linear(to-r, gray.400,blue.500)'
        >
          what can you build
        </Text>
        <Text>with a team that dares to dream.</Text>
      </chakra.h1>

      <chakra.p
        color='gray.600'
        marginBottom={6}
        _dark={{ color: 'gray.300' }}
        paddingX={{ base: 2, lg: 24 }}
        fontSize={{ base: 'lg', md: 'xl' }}
      >
        {`we're a software house that refuses to see the world with the same eyes that everyone else uses. founded by aladino borges, our mission is to help you turn your ideas into reality with cutting-edge technology, artificial intelligence and a passion for innovation.`}
      </chakra.p>

      <Stack
        spacing={2}
        direction={{ base: 'column', sm: 'row' }}
        justifyContent={{ sm: 'left', md: 'center' }}
      >
        <Button
          as='a'
          size='lg'
          isDisabled
          variant='solid'
          cursor='pointer'
          alignItems='center'
          display='inline-flex'
          colorScheme='twitter'
          justifyContent='center'
          marginBottom={{ base: 2, sm: 0 }}
          width={{ base: 'full', sm: 'auto' }}
        >
          our work
          <Icon boxSize={4} ml={1} viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </Icon>
        </Button>

        <Button
          as='a'
          size='lg'
          isDisabled
          cursor='pointer'
          variant='outline'
          colorScheme='gray'
          alignItems='center'
          display='inline-flex'
          justifyContent='center'
          width={{ base: 'full', sm: 'auto' }}
          marginBottom={{ base: 2, sm: 0 }}
        >
          roadmap
          <Icon boxSize={4} ml={1} viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z'
              clipRule='evenodd'
            />
          </Icon>
        </Button>
      </Stack>
    </Box>
  );
}
