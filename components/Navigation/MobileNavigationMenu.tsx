import appPublicUrls from '@/mocks/appPublicUrls';
import { session } from '@/services/session';
import {
  Button,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiMiniCpuChip } from 'react-icons/hi2';

interface MobileNavigationMenuProps {
  startLogoutProcess: VoidFunction;
}

export default function MobileNavigationMenu({ startLogoutProcess }: MobileNavigationMenuProps) {
  const { data } = useQuery({
    queryKey: ['userToken'],
    queryFn: () => session.getCookie('user'),
  });

  const isLogged = Boolean(data);
  const isMobile = useBreakpointValue({ base: true, md: false });

  return isMobile ? (
    <Menu isLazy placement='auto'>
      <MenuButton as={IconButton} aria-label='Options' icon={<HiMiniCpuChip />} variant='outline' />

      <MenuList>
        <MenuGroup title='app'>
          {appPublicUrls.map(({ label, href, LinkIcon }, index) => {
            return (
              <MenuItem
                icon={<LinkIcon />}
                key={index}
                as={Link}
                href={href}
                isDisabled={!['homepage', 'mAIn'].includes(label)}
              >
                {label}
              </MenuItem>
            );
          })}
        </MenuGroup>

        {isLogged ? (
          <Fragment>
            <MenuDivider />

            <MenuGroup title='user'>
              <MenuItem icon={<HiMiniCpuChip />} onClick={startLogoutProcess}>
                logout
              </MenuItem>
            </MenuGroup>
          </Fragment>
        ) : null}
      </MenuList>
    </Menu>
  ) : (
    <HStack spacing={0}>
      {appPublicUrls.map(({ label, href, LinkIcon }, index) => {
        return (
          <Button
            as={Link}
            href={href}
            key={index}
            leftIcon={<LinkIcon />}
            variant='ghost'
            size='sm'
            isDisabled={!['homepage', 'mAIn'].includes(label)}
          >
            <Text size='md'>{label}</Text>
          </Button>
        );
      })}

      {isLogged ? (
        <Button variant='outline' onClick={startLogoutProcess}>
          logout
        </Button>
      ) : null}
    </HStack>
  );
}
