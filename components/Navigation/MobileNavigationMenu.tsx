import appPublicUrls from '@/mocks/appPublicUrls';
import {
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import { HiMiniCpuChip } from 'react-icons/hi2';
import { useTranslation } from '@/hooks/useTranslation';

interface MobileNavigationMenuProps {
  startLogoutProcess: VoidFunction;
}

export default function MobileNavigationMenu({ startLogoutProcess }: MobileNavigationMenuProps) {
  const { t } = useTranslation();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const filteredUrls = appPublicUrls.filter(
    (url) => url.label !== 'nav.projects' && url.label !== 'nav.contacts'
  );

  return isMobile ? (
    <Menu isLazy placement='auto'>
      <MenuButton as={IconButton} aria-label='Options' icon={<HiMiniCpuChip />} variant='outline' />

      <MenuList>
        <MenuGroup title="Menu">
          {filteredUrls.map(({ isDisabled, label, href, LinkIcon }, index) => {
            return (
              <MenuItem
                icon={<LinkIcon />}
                key={index}
                as={Link}
                href={href}
                isDisabled={isDisabled}
              >
                {t(label)}
              </MenuItem>
            );
          })}
        </MenuGroup>
      </MenuList>
    </Menu>
  ) : (
    <HStack spacing={0}>
      {filteredUrls.map(({ isDisabled, label, href, LinkIcon }, index) => {
        return (
          <Button
            as={Link}
            href={href}
            key={index}
            leftIcon={<LinkIcon />}
            variant='ghost'
            size='sm'
            isDisabled={isDisabled}
          >
            <Text size='md'>{t(label)}</Text>
          </Button>
        );
      })}
    </HStack>
  );
}
