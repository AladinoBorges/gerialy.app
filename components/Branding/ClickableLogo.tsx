import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function ClickableLogo({ width = 108, height = 34 }) {
  return (
    <Box>
      <Link href='/'>
        <Image src='/gia_beta_logo.png' alt='gerialy beta logo' width={108} height={34} priority />
      </Link>
    </Box>
  );
}
