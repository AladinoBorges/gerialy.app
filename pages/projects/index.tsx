import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'huntly.com.br',
      url: 'https://huntly.com.br',
      descKey: 'projects.huntly.desc',
    },
    {
      name: 'prolicitante.com.br',
      url: 'https://prolicitante.com.br',
      descKey: 'projects.prolicitante.desc',
    },
    {
      name: 'winddigital.com.br',
      url: 'https://winddigital.com.br',
      descKey: 'projects.winddigital.desc',
    },
    {
      name: 'devopness.com',
      url: 'https://devopness.com',
      descKey: 'projects.devopness.desc',
    },
  ];

  return (
    <DashboardNavigation isLogged={false} complementaryHeader="nav.projects">
      <Flex
        alignItems="center"
        direction="column"
        gap={{ base: '2rem', md: '3rem' }}
        marginX="auto"
        padding={{ base: '4rem 1rem', md: '6rem 4rem' }}
        minWidth="100%"
        maxWidth="1200px"
      >
        <Stack gap="1rem" textAlign="center" maxWidth="800px">
          <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight={700}>
            {t('projects.title')}
          </Heading>

          <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
            {t('projects.subtitle')}
          </Text>
        </Stack>

        <Divider />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" width="100%">
          {projects.map((project) => (
            <Card
              key={project.name}
              borderRadius="lg"
              variant="outline"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              shadow="md"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <CardBody padding="6">
                <Stack gap="3">
                  <Heading as="h2" size="md" color="blue.600" _dark={{ color: 'blue.400' }}>
                    {project.name}
                  </Heading>

                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }} textAlign="justify">
                    {t(project.descKey)}
                  </Text>
                </Stack>
              </CardBody>

              <CardFooter padding="6" paddingTop="0">
                <Button
                  as="a"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  rightIcon={<Icon as={HiOutlineExternalLink} />}
                  variant="solid"
                  colorScheme="twitter"
                  width="full"
                  size="sm"
                >
                  {t('projects.visit')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </DashboardNavigation>
  );
}
