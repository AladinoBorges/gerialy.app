import { Box, Button, chakra, Stack, Text } from '@chakra-ui/react';
import { HiFlag, HiOutlineComputerDesktop } from 'react-icons/hi2';

export function MinimalistHeroHeader() {
  return (
    <Box
      textAlign='center'
      padding={{ base: '1rem', md: 0 }}
      width={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
    >
      <chakra.h1
        marginBottom={6}
        color='gray.900'
        fontWeight='bold'
        lineHeight='none'
        _dark={{ color: 'gray.100' }}
        fontSize={{ base: '1.6rem', md: '5xl' }}
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
          what you can build
        </Text>
        <Text>with a team that dares to dream.</Text>
      </chakra.h1>

      <chakra.p
        color='gray.600'
        marginBottom={6}
        _dark={{ color: 'gray.300' }}
        paddingX={{ base: 2, lg: 24 }}
        fontSize={{ base: 'md', md: 'xl' }}
      >
        {`we are a software house that sees the world through a unique lens. founded by aladino borges, our mission is to transform your ideas into reality using cutting-edge technology, artificial intelligence, and a passion for innovation.`}
      </chakra.p>

      <Stack
        spacing={2}
        direction={{ base: 'column', sm: 'row' }}
        justifyContent={{ sm: 'left', md: 'center' }}
        paddingX={{ base: '2rem', md: 0 }}
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
          width={{ base: 'full', sm: 'auto' }}
          leftIcon={<HiOutlineComputerDesktop />}
        >
          our work
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
          leftIcon={<HiFlag />}
        >
          roadmap
        </Button>
      </Stack>
    </Box>
  );
}
