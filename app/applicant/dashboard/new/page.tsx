'use client';

import { AllocationWithApplicationCreationForm } from '@/components/Forms/AllocationWithApplicationCreation';
import geriapi from '@/services/geriapi';
import { session } from '@/services/session';
import { Flex, Skeleton } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import queryString from 'qs';

export default function UserDashboardPage() {
  const getApplicantCurriculum = async (token: string) => {
    const populateQuery = queryString.stringify({
      populate: { applicant: { fields: ['id', 'curriculum'] } },
    });

    const curriculum: string = await geriapi
      .get(`users/me?${populateQuery}`, token)
      ?.then((queryResponse) => {
        return queryResponse?.applicant?.curriculum?.trim();
      });

    return curriculum;
  };

  const { data: sessionCookie } = useQuery({
    queryKey: ['sessionCookie'],
    queryFn: () => session.getCookie('session'),
  });

  const { data: curriculum = null, isSuccess } = useQuery({
    queryKey: ['applicantCurriculum'],
    enabled: !!sessionCookie?.token?.trim(),
    queryFn: async () => getApplicantCurriculum(sessionCookie?.token?.trim() as string),
  });

  return (
    <Skeleton width='100%' isLoaded={isSuccess}>
      <Flex width='100%'>
        <AllocationWithApplicationCreationForm {...sessionCookie} curriculum={curriculum} />
      </Flex>
    </Skeleton>
  );
}
