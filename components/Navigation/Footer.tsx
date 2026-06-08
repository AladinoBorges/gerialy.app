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
import { useTranslation } from '@/hooks/useTranslation';

export const AppFooter = () => {
  const { t } = useTranslation();

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
            {t('footer.copyright')}
          </Text>

          <HStack gap='4'>
            <Tooltip label={t('tooltip.about')}>
              <Link href='/about'>
                <HiOutlineUserGroup size='1.3rem' />
              </Link>
            </Tooltip>

            <Tooltip label={t('tooltip.contacts')}>
              <Link href='/contacts'>
                <HiOutlineIdentification size='1.3rem' />
              </Link>
            </Tooltip>

            <Tooltip label={t('tooltip.legal')}>
              <Link href='/legal'>
                <HiOutlineScale size='1.3rem' />
              </Link>
            </Tooltip>

            <Tooltip label={t('tooltip.privacy')}>
              <Link href='/privacy'>
                <HiOutlineFingerPrint size='1.3rem' />
              </Link>
            </Tooltip>
          </HStack>
        </Stack>

        <Text fontSize='xs' color='fg.muted' textAlign='center' marginTop='2rem'>
          {t('footer.description')}
        </Text>
      </Stack>
    </Box>
  );
};
