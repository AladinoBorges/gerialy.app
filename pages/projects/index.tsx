import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectsPage() {
  const { t } = useTranslation();

  const projects = [
    {
      name: 'Huntly',
      domain: 'huntly.com.br',
      url: 'https://huntly.com.br',
      image: '/projects/huntly.webp',
      descKey: 'projects.huntly.desc',
    },
    {
      name: 'Pró Licitante',
      domain: 'prolicitante.com.br',
      url: 'https://prolicitante.com.br',
      image: '/projects/prolicitante.webp',
      descKey: 'projects.prolicitante.desc',
    },
    {
      name: 'Wind Digital',
      domain: 'winddigital.com.br',
      url: 'https://winddigital.com.br',
      image: '/projects/winddigital.webp',
      descKey: 'projects.winddigital.desc',
    },
    {
      name: 'Devopness',
      domain: 'devopness.com',
      url: 'https://devopness.com',
      image: '/projects/devopness.webp',
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
              overflow="hidden"
              variant="outline"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              shadow="md"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
            >
              <Box position="relative" paddingBottom="56.25%" width="100%" overflow="hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  objectFit="cover"
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  borderBottom="1px solid"
                  borderColor="gray.200"
                  _dark={{ borderColor: 'gray.700' }}
                  transition="transform 0.3s ease"
                  _hover={{ transform: 'scale(1.03)' }}
                />
              </Box>

              <CardBody padding="6">
                <Stack gap="3">
                  <Stack gap="0">
                    <Heading as="h2" size="md" color="blue.600" _dark={{ color: 'blue.400' }}>
                      {project.name}
                    </Heading>
                    <Text fontSize="xs" color="gray.400" _dark={{ color: 'gray.500' }}>
                      {project.domain}
                    </Text>
                  </Stack>

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
