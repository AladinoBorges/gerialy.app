'use client';

import { AllocationWithApplicationCreationForm } from '@/components/Forms/AllocationWithApplicationCreation';
import { Flex } from '@chakra-ui/react';

export default function UserDashboardPage() {
  return (
    <Flex width='100%'>
      <AllocationWithApplicationCreationForm />
    </Flex>
  );
}
