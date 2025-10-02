import { ImagePropTypes } from '@/types/generic';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function ClickableLogo({ width, height }: ImagePropTypes) {
  return (
    <Box>
      <Link href='/'>
        <Image
          src='/gia_beta_logo.png'
          alt='gerialy beta logo'
          width={width}
          height={height}
          priority
        />
      </Link>
    </Box>
  );
}
