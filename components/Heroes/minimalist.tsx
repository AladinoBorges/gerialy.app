import { Box, Button, chakra, Stack, Text } from '@chakra-ui/react';
import { HiFlag, HiOutlineComputerDesktop } from 'react-icons/hi2';
import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';

export function MinimalistHeroHeader() {
  const { t } = useTranslation();

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
        {t('home.titlePrefix')}
        <br />
        <Text
          width='full'
          bgClip='text'
          fontWeight='extrabold'
          display={{ base: 'block', lg: 'inline' }}
          bgGradient='linear(to-r, gray.400,blue.500)'
        >
          {t('home.titleHighlight')}
        </Text>
        <Text>{t('home.titleSuffix')}</Text>
      </chakra.h1>

      <chakra.p
        color='gray.600'
        marginBottom={6}
        _dark={{ color: 'gray.300' }}
        paddingX={{ base: 2, lg: 24 }}
        fontSize={{ base: 'md', md: 'xl' }}
      >
        {t('home.description')}
      </chakra.p>

      <Stack
        spacing={2}
        direction={{ base: 'column', sm: 'row' }}
        justifyContent={{ sm: 'left', md: 'center' }}
        paddingX={{ base: '2rem', md: 0 }}
      >
        <Button
          as={Link}
          href='/projects'
          size='lg'
          variant='solid'
          cursor='pointer'
          alignItems='center'
          display='inline-flex'
          colorScheme='twitter'
          justifyContent='center'
          width={{ base: 'full', sm: 'auto' }}
          leftIcon={<HiOutlineComputerDesktop />}
        >
          {t('home.btnProjects')}
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
          {t('home.btnRoadmap')}
        </Button>
      </Stack>
    </Box>
  );
}
