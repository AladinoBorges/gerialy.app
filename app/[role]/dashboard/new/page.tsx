'use client';

import { AllocationWithApplicationCreationForm } from '@/components/Forms/AllocationWithApplicationCreation';
import { session } from '@/services/session';
import { ReadUserType } from '@/types/user';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function UserDashboardPage() {
  const [cookies, setCookies] = useState<{ user: ReadUserType; token: string } | {}>({});

  useEffect(() => {
    (async () => {
      const sessionCookies = await session.getCookie('session');
      if (!sessionCookies) {
        return;
      }

      const user = sessionCookies?.user;
      const token = sessionCookies?.token;

      if (!!user && !!token) {
        setCookies(() => ({ user, token }));
      }
    })();

    return () => {};
  }, []);

  return (
    <Flex width='100%'>
      <AllocationWithApplicationCreationForm {...cookies} />
    </Flex>
  );
}
