'use client';

import { UserLoginForm } from '@/components/Forms/UserLogin';
import { Center } from '@chakra-ui/react';

export default function Home() {
  return (
    <Center height='100vh' flexDirection='column'>
      <UserLoginForm />
    </Center>
  );
}
