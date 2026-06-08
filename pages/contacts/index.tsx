import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { useTranslation } from '@/hooks/useTranslation';
import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineEnvelope, HiOutlineMapPin } from 'react-icons/hi2';

export default function ContactsPage() {
  const { t } = useTranslation();

  const contactOptions = [
    {
      name: 'Aladino Borges',
      role: 'Founder & CTO',
      email: 'hello@gerialy.com',
      linkedin: 'https://www.linkedin.com/in/aladinoborges',
      linkedinHandle: '@aladinoborges',
      roleKey: 'contacts.role.cto',
    },
    {
      name: 'Eulálio Borges',
      role: 'Chief Design Officer (CDO)',
      email: 'social@gerialy.com',
      linkedin: 'https://www.linkedin.com/in/eulalio-borges',
      linkedinHandle: '@eulalio-borges',
      roleKey: 'contacts.role.cdo',
    },
  ];

  return (
    <DashboardNavigation isLogged={false} complementaryHeader="nav.contacts">
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
            {t('contacts.title')}
          </Heading>

          <Text fontSize="lg" color="gray.600" _dark={{ color: 'gray.300' }}>
            {t('contacts.subtitle')}
          </Text>
        </Stack>

        <Divider />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" width="100%">
          {contactOptions.map((member) => (
            <Card
              key={member.name}
              borderRadius="lg"
              variant="outline"
              bg="white"
              _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
              shadow="md"
            >
              <CardBody padding="6">
                <Stack gap="4">
                  <Stack gap="1">
                    <Heading as="h2" size="md">
                      {member.name}
                    </Heading>
                    <Text fontSize="sm" color="blue.500" fontWeight="semibold">
                      {member.role}
                    </Text>
                  </Stack>

                  <Divider />

                  <Stack gap="3">
                    <Flex align="center" gap="2">
                      <Icon as={HiOutlineEnvelope} color="gray.500" />
                      <Link href={`mailto:${member.email}`} style={{ textDecoration: 'underline' }}>
                        <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
                          {member.email}
                        </Text>
                      </Link>
                    </Flex>

                    <Flex align="center" gap="2">
                      <Icon as={FaLinkedin} color="gray.500" />
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                        <Text fontSize="sm" color="blue.600" _dark={{ color: 'blue.400' }}>
                          {member.linkedinHandle}
                        </Text>
                      </a>
                    </Flex>
                  </Stack>

                  <Button
                    as="a"
                    href={`mailto:${member.email}`}
                    size="sm"
                    colorScheme="twitter"
                    variant="outline"
                    width="full"
                    marginTop="2"
                  >
                    {t(member.roleKey)}
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="8" width="100%">
          <Card
            borderRadius="lg"
            variant="outline"
            bg="white"
            _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
            shadow="sm"
          >
            <CardBody padding="6">
              <Stack gap="4" align="center" textAlign="center">
                <Icon as={FaWhatsapp} size="1.5rem" color="green.500" />
                <Heading as="h3" size="xs" textTransform="uppercase" color="gray.500">
                  WhatsApp
                </Heading>
                <Text fontSize="md" fontWeight="bold">
                  +55 49 92004-6150
                </Text>
                <Button
                  as="a"
                  href="https://wa.me/5549920046150"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  colorScheme="whatsapp"
                  width="full"
                >
                  WhatsApp
                </Button>
              </Stack>
            </CardBody>
          </Card>

          <Card
            borderRadius="lg"
            variant="outline"
            bg="white"
            _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
            shadow="sm"
          >
            <CardBody padding="6">
              <Stack gap="4" align="center" textAlign="center">
                <Icon as={HiOutlineMapPin} size="1.5rem" color="blue.500" />
                <Heading as="h3" size="xs" textTransform="uppercase" color="gray.500">
                  {t('contacts.location')}
                </Heading>
                <Text fontSize="md" fontWeight="bold">
                  FALBOR
                </Text>
                <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }}>
                  {t('contacts.address')}
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Flex>
    </DashboardNavigation>
  );
}

// Simple internal link helper
function Link({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
