import { Text, TextProps } from '@chakra-ui/react';
import { Questrial } from 'next/font/google';
import Link from 'next/link';

const brandFont = Questrial({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  fallback: [
    'Fredoka',
    'Poppins',
    'Quicksand',
    'Questrial',
    'Afacad',
    'Afacad Flux',
    'Cal Sans',
    'Inclusive Sans',
    'Parkinsans',
    'Urbanist',
    'Sulphur Point',
    'sans-serif',
  ],
});

export function ClickableLogo(props: TextProps) {
  return (
    <Link href='/'>
      <Text className={brandFont.className} fontSize='2.3rem' {...props}>
        gerialy
      </Text>
    </Link>
  );
}
