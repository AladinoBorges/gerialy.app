'use client';

import { ApplicationType } from '@/types/application';
import { IDType } from '@/types/generic';
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import gerapi from '../../../../../services/geriapi';
import { session } from '../../../../../services/session';

export default function AnalysisResumePage({ params: { id } }: PropTypes) {
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  const getApplication = async () => {
    const API_URL = `applications/${id}`;

    const application: ApplicationType = await gerapi.get(API_URL, sessionToken as string);

    return application;
  };

  const {
    data: application,
    isError,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ['applicationByID'],
    queryFn: getApplication,
    enabled: !!sessionToken?.trim(),
  });

  useEffect(() => {
    (async () => {
      const cookie = await session.getCookie('session');

      if (cookie?.token) {
        setSessionToken(cookie?.token);
      }
    })();

    return () => {};
  }, []);

  return <Flex>RESUMO DA ANÁLISE DA CANDIDATURA</Flex>;
}

interface PropTypes {
  params: {
    id: IDType;
  };
}
