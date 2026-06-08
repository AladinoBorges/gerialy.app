import { session } from '@/services/session';
import { DashboardNavigationPropTypes } from '@/types/generic';
import {
  Button,
  ButtonGroup,
  Flex,
  HStack,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BrowserTabHead from '../Branding/BrowserTabHead';
import { ClickableLogo } from '../Branding/ClickableLogo';
import { GenericModal } from '../Modals/Generic';
import { AppFooter } from './Footer';
import MobileNavigationMenu from './MobileNavigationMenu';
import { useTranslation } from '@/hooks/useTranslation';
import { HiChevronDown } from 'react-icons/hi2';

function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  const localesInfo = {
    'pt-BR': { flag: '🇧🇷' },
    'pt-PT': { flag: '🇵🇹' },
    'en-UK': { flag: '🇬🇧' },
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        rightIcon={<HiChevronDown />}
        minWidth="65px"
        id="language-switcher-btn"
      >
        {localesInfo[locale].flag}
      </MenuButton>
      <MenuList minWidth="70px">
        <MenuItem id="lang-pt-br-opt" onClick={() => setLocale('pt-BR')} justifyContent="center">
          🇧🇷
        </MenuItem>
        <MenuItem id="lang-pt-pt-opt" onClick={() => setLocale('pt-PT')} justifyContent="center">
          🇵🇹
        </MenuItem>
        <MenuItem id="lang-en-uk-opt" onClick={() => setLocale('en-UK')} justifyContent="center">
          🇬🇧
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export function DashboardNavigation({
  isLogged,
  complementaryHeader,
  children,
}: DashboardNavigationPropTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

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

  const translatedHeader = complementaryHeader ? t(complementaryHeader) : '';

  return (
    <Flex maxWidth='1440px' minHeight='100vh' direction='column' marginX='auto'>
      <BrowserTabHead complementaryHeader={translatedHeader} />

      <HStack
        spacing='1rem'
        justify='space-between'
        paddingTop='0.3rem'
        paddingX={{ base: '1rem', md: '4rem' }}
      >
        <ClickableLogo />

        <HStack spacing='1rem'>
          <MobileNavigationMenu startLogoutProcess={startLogoutProcess} />
          <LanguageSwitcher />
        </HStack>
      </HStack>

      <Flex
        width='100%'
        maxWidth='1440px'
        marginX='auto'
        padding={isLogged ? { base: '4rem 1rem', md: '8rem 4rem' } : {}}
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

      <AppFooter />
    </Flex>
  );
}
