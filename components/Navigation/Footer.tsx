import socialLinks from '@/mocks/socialLinks';
import { Box, Divider, HStack, Link, Stack, Text, Tooltip } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  HiOutlineFingerPrint,
  HiOutlineIdentification,
  HiOutlineScale,
  HiOutlineUserGroup,
} from 'react-icons/hi2';
import { ClickableLogo } from '../Branding/ClickableLogo';

export const AppFooter = () => {
  return (
    <Box as='footer' maxWidth='1440px' padding={{ base: '1rem', md: '4rem' }}>
      <Stack gap='1rem'>
        <Divider />

        <Stack direction='row' justify='space-between' align='center'>
          <ClickableLogo fontSize='1.6rem' />

          <HStack gap='4'>
            {socialLinks.map(({ href, icon }, index) => {
              const DynamicIcon = icon as IconType;

              return (
                <Link key={index} href={href as string} isExternal>
                  <DynamicIcon size='1.3rem' />
                </Link>
              );
            })}
          </HStack>
        </Stack>

        <Stack direction='row' justify='space-between' align='center'>
          <Text fontSize='sm' color='fg.muted'>
            &copy; {new Date().getFullYear()} gerialy. GNU GPL V3.0 License.
          </Text>

          <HStack gap='4'>
            <Tooltip label='about us'>
              <Link href='/about'>
                <HiOutlineUserGroup size='1.3rem' />
              </Link>
            </Tooltip>

            <Tooltip label='contacts'>
              <Link href='/contacts'>
                <HiOutlineIdentification size='1.3rem' />
              </Link>
            </Tooltip>

            <Tooltip label='terms and conditions'>
              <Link href='/legal'>
                <HiOutlineScale size='1.3rem' />
              </Link>
            </Tooltip>

            <Tooltip label='privacy policy'>
              <Link href='/privacy'>
                <HiOutlineFingerPrint size='1.3rem' />
              </Link>
            </Tooltip>
          </HStack>
        </Stack>

        <Text fontSize='xs' color='fg.muted' textAlign='center' marginTop='2rem'>
          <strong>gerialy</strong> is a technology project developed by <strong>FALBOR</strong>, a
          brazilian company registered under <strong>CNPJ nº 49.454.159/0001-75</strong>. Its
          headquarters are located at{' '}
          <strong>Avenida Imperatriz Leopoldina 1900, APT 154, Bloco 1, Pinheiro</strong>, in the
          city of São Leopoldo/RS, with the postal code <strong>93042-082</strong>.
        </Text>
      </Stack>
    </Box>
  );
};
