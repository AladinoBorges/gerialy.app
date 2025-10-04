import {
  HiOutlineBuildingStorefront,
  HiOutlineCodeBracket,
  HiOutlineHomeModern,
  HiOutlinePuzzlePiece,
  HiOutlineScale,
  HiOutlineUserGroup,
} from 'react-icons/hi2';

export default [
  { label: 'homepage', href: '/', LinkIcon: HiOutlineHomeModern },
  { label: 'marketplace', href: '/marketplace', LinkIcon: HiOutlineBuildingStorefront },
  { label: 'projects', href: '/projects', LinkIcon: HiOutlineCodeBracket },
  { label: 'about us', href: '/about', LinkIcon: HiOutlineUserGroup },
  { label: 'legal', href: '/legal', LinkIcon: HiOutlineScale },
  { label: 'mAIn', href: '/makes-nothing-ai', LinkIcon: HiOutlinePuzzlePiece },
];
