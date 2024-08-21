'use client';

import { AllocationWithApplicationCreationForm } from '@/components/Forms/AllocationWithApplicationCreation';
import { session } from '@/services/session';
import { Flex, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

export default function UserDashboardPage() {
  const { data: sessionCookie, isSuccess } = useQuery({
    queryKey: ['sessionCookie'],
    queryFn: () => session.getCookie('session'),
  });

  return (
    <Skeleton width='100%' isLoaded={isSuccess}>
      <Flex width='100%'>
        <AllocationWithApplicationCreationForm {...sessionCookie} />
      </Flex>
    </Skeleton>
  );
}
