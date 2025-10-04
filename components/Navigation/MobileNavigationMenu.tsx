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
import { IconType } from 'react-icons';
import {
  HiMiniCpuChip,
  HiOutlineBuildingStorefront,
  HiOutlineCodeBracket,
  HiOutlineHomeModern,
  HiOutlinePuzzlePiece,
  HiOutlineScale,
  HiOutlineUserGroup,
} from 'react-icons/hi2';
import publicLinks from '../../mocks/publicLinks.json';

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

  const icons: { [key: string]: IconType } = {
    homepage: HiOutlineHomeModern,
    marketplace: HiOutlineBuildingStorefront,
    projects: HiOutlineCodeBracket,
    'about us': HiOutlineUserGroup,
    legal: HiOutlineScale,
    mAIn: HiOutlinePuzzlePiece,
  };

  return isMobile ? (
    <Menu isLazy placement='auto'>
      <MenuButton as={IconButton} aria-label='Options' icon={<HiMiniCpuChip />} variant='outline' />
      <MenuList>
        <MenuGroup title='app'>
          {publicLinks.map(({ label, href }, index) => {
            const Icon = icons[label];

            return (
              <MenuItem
                icon={<Icon />}
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
      {publicLinks.map(({ label, href }, index) => {
        const Icon = icons[label];

        return (
          <Button
            as={Link}
            href={href}
            key={index}
            leftIcon={<Icon />}
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
