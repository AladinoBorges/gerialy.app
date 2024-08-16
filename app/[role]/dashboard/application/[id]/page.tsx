'use client';

import { IDType } from '@/types/generic';
import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import gerapi from '../../../../../services/geriapi';
import { session } from '../../../../../services/session';

export default function AnalysisResumePage({ params: { id } }: PropTypes) {
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  const getApplication = async (id: string | number, token: string) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_ULR}/application`;

    const application = await gerapi.get(API_URL, token);

    return application;
  };

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
