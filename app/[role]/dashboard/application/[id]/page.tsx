'use client';

import { QueryApplicationType } from '@/types/application';
import { IDType } from '@/types/generic';
import {
  Button,
  Divider,
  Flex,
  Skeleton,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import queryStringClient from 'qs';
import { useEffect, useState } from 'react';
import gerapi from '../../../../../services/geriapi';
import { session } from '../../../../../services/session';

export default function AnalysisResumePage({ params: { id } }: PropTypes) {
  const [sessionToken, setSessionToken] = useState<string | null>(null);

  const getApplication = async () => {
    const queryParameters = queryStringClient.stringify({
      populate: {
        allocation: {
          fields: ['id', 'name', 'company'],
        },
      },
    });

    const API_URL = `applications/${id}?${queryParameters}`;

    const application: QueryApplicationType = await gerapi.get(API_URL, sessionToken as string);

    return { ...application, ...(application?.attributes ?? {}) };
  };

  const {
    data: application,
    isError,
    isPending,
    isSuccess,
  } = useQuery({
    queryFn: getApplication,
    enabled: !!sessionToken?.trim(),
    queryKey: ['applicationByID', id],
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

  return (
    <Skeleton isLoaded={isSuccess} width='100%'>
      <Flex
        gap='1rem'
        width='100%'
        direction='column'
        alignSelf='center'
        paddingBottom='4rem'
        paddingX={{ base: 0, md: '8rem' }}
      >
        <Flex
          align='center'
          padding='8rem 2rem 0 2rem'
          justify='space-between'
          gap={{ base: '0.5rem', md: '2rem' }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack spacing={0}>
            <Text as='h1'>
              {`#${
                application?.allocation?.data?.id
              } | ${application?.allocation?.data?.attributes?.name?.toLowerCase()}`}
            </Text>

            <Text>{application?.allocation?.data?.attributes?.company}</Text>
          </Stack>

          {application?.analysedByIA ? (
            <Stat textAlign='end'>
              <StatNumber>{application?.positionCompatibility}/1</StatNumber>
              <StatLabel>compatível</StatLabel>
            </Stat>
          ) : (
            <Button>analisar</Button>
          )}
        </Flex>

        <Divider />

        <Flex padding='2rem 2rem 0 2rem' alignSelf='center' direction='column' gap='3rem'>
          {!!application?.analysisConclusion?.trim ? (
            <Stack>
              <Text textAlign='center'>resumo</Text>

              <Text>{application?.analysisConclusion?.toLowerCase()}</Text>
            </Stack>
          ) : null}

          {!!application?.emailCoverLetter?.trim ? (
            <Stack>
              <Text textAlign='center'>sugestão da carta de apresentação</Text>

              <Stack>
                {application?.emailCoverLetter?.split('\\n')?.map((contentItem, index) => {
                  return (
                    <Text key={`conver-letter-content-part-$(index + 1)`}>
                      <i>{contentItem}</i>
                    </Text>
                  );
                })}
              </Stack>
            </Stack>
          ) : null}

          <Divider />

          {!!application?.automatedAnalysisFromIA?.trim() ? (
            <Stack direction='column'>
              <div
                id='ia-analysis-content'
                dangerouslySetInnerHTML={{
                  __html: application?.automatedAnalysisFromIA
                    ?.trim()
                    ?.replace(/(<? *script)/gi, 'illegalscript'),
                }}
              />

              <Text textAlign='right'>
                {`data da análise: ${new Date(application?.analysisDate)?.toLocaleDateString(
                  'pt',
                )}`}
              </Text>
            </Stack>
          ) : null}
        </Flex>
      </Flex>
    </Skeleton>
  );
}

interface PropTypes {
  params: {
    id: IDType;
  };
}
