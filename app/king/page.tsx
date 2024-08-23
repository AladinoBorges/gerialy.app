'use client';
import { Center, Text } from '@chakra-ui/react';
import Link from 'next/link';

export default function KingKongPage() {
  return (
    <Center height='100vh'>
      <Link href='/'>
        <Text fontSize='9xl'>kong</Text>
      </Link>
    </Center>
  );
}
