'use client';
import geriapi from '@/services/geriapi';
import { session } from '@/services/session';
import { QueryApplicationType } from '@/types/application';
import {
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  SimpleGrid,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import queryStringClient from 'qs';

export default function DashboardPage() {
  const { data: sessionCookie } = useQuery({
    queryKey: ['sessionCookie'],
    queryFn: () => session.getCookie('session'),
  });

  const getApplication = async () => {
    const queryParameters = queryStringClient.stringify(
      {
        sort: ['id:desc'],
        filters: { applicant: sessionCookie?.user?.applicant?.id },
        populate: { allocation: { fields: ['id', 'name', 'company'] } },
      },
      { encodeValuesOnly: true },
    );

    const API_URL = `applications/?${queryParameters}`;

    const applications: QueryApplicationType[] = await geriapi
      .get(API_URL, sessionCookie?.token as string)
      ?.then((queriResponse) => {
        return queriResponse?.map((responseItem: QueryApplicationType) => {
          return { ...responseItem, ...(responseItem?.attributes ?? {}) };
        });
      });

    return applications;
  };

  const { data: applications, isSuccess } = useQuery({
    queryFn: getApplication,
    enabled: !!sessionCookie?.token?.trim(),
    queryKey: ['applications'],
  });

  return (
    <Skeleton isLoaded={isSuccess} width='100%'>
      <SimpleGrid minChildWidth='320px' spacing='40px' width='100%'>
        {applications?.length ? (
          applications?.map((applicationItem, index) => {
            const dynamicUpdateDate = applicationItem?.attributes?.updatedAt as Date;

            return (
              <Link
                href={`dashboard/application/${applicationItem?.id}`}
                key={`application-card-${index + 1}`}
              >
                <Card variant='elevated' height='100%'>
                  <CardBody alignContent='center'>
                    <Text>
                      {`${applicationItem?.attributes?.allocation?.data?.attributes?.name} | #${applicationItem?.attributes?.allocation?.data?.id} `}
                    </Text>
                  </CardBody>

                  <Divider />

                  <CardFooter justify='space-between'>
                    <Text>{`#${applicationItem?.id} ${
                      applicationItem?.attributes?.analysedByIA ? '| analisada' : ''
                    }`}</Text>

                    <Text>{new Date(dynamicUpdateDate)?.toLocaleDateString('pt')}</Text>
                  </CardFooter>
                </Card>
              </Link>
            );
          })
        ) : (
          <Center height='60vh'>
            <Text>sem nenhuma candidatura para mostrar!</Text>
          </Center>
        )}
      </SimpleGrid>
    </Skeleton>
  );
}
