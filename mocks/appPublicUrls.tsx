import {
  HiOutlineCodeBracket,
  HiOutlineHomeModern,
  HiOutlineIdentification,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

export default [
  { isDisabled: false, label: 'nav.home', href: '/', LinkIcon: HiOutlineHomeModern },
  { isDisabled: false, label: 'nav.about', href: '/about', LinkIcon: HiOutlineUserGroup },
  { isDisabled: false, label: 'nav.projects', href: '/projects', LinkIcon: HiOutlineCodeBracket },
  { isDisabled: false, label: 'nav.contacts', href: '/contacts', LinkIcon: HiOutlineIdentification },
];
