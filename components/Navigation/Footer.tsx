import socialLinks from '@/mocks/socialLinks';
import { Box, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ClickableLogo } from '../Branding/ClickableLogo';

export const AppFooter = () => {
  return (
    <Box as='footer' maxWidth='1440px' padding={{ base: '1rem', md: '4rem' }}>
      <Stack gap='1rem'>
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

        <Text fontSize='sm' color='fg.muted'>
          &copy; {new Date().getFullYear()} gerialy, Inc. GNU GPL V3.0 License.
        </Text>
      </Stack>
    </Box>
  );
};
