import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Box,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Wrap,
} from '@chakra-ui/react';

export default function AboutPage() {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: 'Aladino Borges',
      roleKey: 'about.aladino.role',
      bioKey: 'about.aladino.bio',
      avatar: '/avatars/aladino_cfo.webp',
      skills: ['Software Engineering', 'Cloud Infrastructure', 'AI Integration', 'RPA / Web Scraping'],
      tools: ['Python', 'TypeScript', 'Node.js', 'FastAPI', 'React', 'Next.js'],
    },
    {
      name: 'Eulálio Borges',
      roleKey: 'about.eulalio.role',
      bioKey: 'about.eulalio.bio',
      avatar: '/avatars/eulalio_cdo.webp',
      skills: ['Creative Direction', 'Visual Communication', 'Branding', 'Graphic Design'],
      tools: ['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'InDesign', 'Blender'],
    },
  ];

  return (
    <DashboardNavigation isLogged={false} complementaryHeader="nav.about">
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
            {t('about.title')}
          </Heading>

          <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
            {t('about.subtitle')}
          </Text>
        </Stack>

        <Divider />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" width="100%">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              borderRadius="lg"
              overflow="hidden"
              variant="outline"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              shadow="md"
            >
              <CardBody padding="0">
                <Box position="relative" paddingBottom="100%" width="100%" overflow="hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    objectFit="cover"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>

                <Stack padding="6" gap="4">
                  <Stack gap="1">
                    <Heading as="h2" size="md">
                      {member.name}
                    </Heading>

                    <Text fontSize="sm" color="blue.500" fontWeight="semibold">
                      {t(member.roleKey)}
                    </Text>
                  </Stack>

                  <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }} textAlign="justify">
                    {t(member.bioKey)}
                  </Text>

                  <Stack gap="2">
                    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.500">
                      {t('about.skills')}
                    </Text>
                    <Wrap spacing="2">
                      {member.skills.map((skill) => (
                        <Tag key={skill} size="sm" variant="subtle" colorScheme="blue">
                          {skill}
                        </Tag>
                      ))}
                    </Wrap>
                  </Stack>

                  <Stack gap="2">
                    <Text fontSize="xs" fontWeight="bold" textTransform="uppercase" color="gray.500">
                      {t('about.tools')}
                    </Text>
                    <Wrap spacing="2">
                      {member.tools.map((tool) => (
                        <Tag key={tool} size="sm" variant="subtle" colorScheme="teal">
                          {tool}
                        </Tag>
                      ))}
                    </Wrap>
                  </Stack>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </DashboardNavigation>
  );
}
