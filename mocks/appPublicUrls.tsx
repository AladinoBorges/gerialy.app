import {
  HiOutlineBuildingStorefront,
  HiOutlineCodeBracket,
  HiOutlineHomeModern,
  HiOutlinePuzzlePiece,
} from 'react-icons/hi2';

export default [
  { isDisabled: false, label: 'homepage', href: '/', LinkIcon: HiOutlineHomeModern },
  {
    isDisabled: true,
    label: 'marketplace',
    href: '/marketplace',
    LinkIcon: HiOutlineBuildingStorefront,
  },
  { isDisabled: true, label: 'projects', href: '/projects', LinkIcon: HiOutlineCodeBracket },
  {
    isDisabled: false,
    label: 'subscriptions',
    href: '/subscriptions',
    LinkIcon: HiOutlinePuzzlePiece,
  },
];
