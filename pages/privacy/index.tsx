import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import {
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export default function PrivacyPolicyPage() {
  return (
    <DashboardNavigation isLogged={false} complementaryHeader='makes nothing ai'>
      <Flex
        alignItems='center'
        direction='column'
        gap={{ base: '2rem', md: '3rem' }}
        marginX='auto'
        padding={{ base: '4rem 1rem', md: '8rem 4rem' }}
        minWidth='100%'
        maxWidth='1440px'
      >
        <Stack gap='1rem' textAlign='center'>
          <Heading as='h1' fontSize='2xl' fontWeight={500} textAlign='center'>
            Privacy Policy
          </Heading>

          <Text>October 09, 2025</Text>
        </Stack>

        <Divider />

        <Stack gap='2rem' maxWidth='1024px'>
          <Text fontSize='xl' textAlign='justify'>
            This Privacy Policy explains how Gerialy and its parent company, <strong>FALBOR</strong>
            , collect, use, protect, and handle your <strong>Personal Information</strong> when you
            use our web applications ecosystem. By using our services, you confirm you have read and
            agreed to the terms outlined here and in our <strong>Terms and Conditions</strong>.
          </Text>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            1. Information We Collect
          </Heading>

          <Stack gap='0rem' width='100%'>
            <Text fontSize='md' mb='1rem' fontWeight={500} textAlign='center'>
              We collect information necessary to provide and maintain our services. This includes:
            </Text>

            <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
              <ListItem>
                <strong>Registration Data:</strong> information you provide when creating an
                account, such as your name, email address, and contact details.
              </ListItem>
              <ListItem>
                <strong>Financial Data:</strong> billing information, payment details (handled by a
                secure third-party processor), and physical address for invoicing or service
                purposes. <strong>gerialy/FALBOR does not store raw payment card data.</strong>
              </ListItem>
              <ListItem>
                <strong>Usage Data:</strong> information about your activity within the web
                applications, including pages visited, features used, and interaction patterns.
              </ListItem>
              <ListItem>
                <strong>Supplier Data:</strong> information provided by Data Suppliers, which, upon
                donation, becomes the <strong>sole property of gerialy/FALBOR</strong> (as detailed
                in the T&C).
              </ListItem>
            </UnorderedList>
          </Stack>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            2. How We Use Your Information
          </Heading>

          <Stack gap='0rem' width='100%'>
            <Text fontSize='md' mb='1rem' fontWeight={500} textAlign='center'>
              Your information is primarily used for the following purposes:
            </Text>

            <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
              <ListItem>
                To <strong>Provide and Maintain</strong> our services and manage your subscription.
              </ListItem>
              <ListItem>
                For <strong>Internal Metrics and Analysis</strong> by the parent company (FALBOR) to
                improve our products and services.
              </ListItem>
              <ListItem>
                For <strong>Billing and Account Management</strong>, including automated renewal
                notices.
              </ListItem>
              <ListItem>
                To <strong>Communicate</strong> important updates, security alerts, and service
                changes.
              </ListItem>
            </UnorderedList>
          </Stack>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            3. Data Security, Encryption, and Confidentiality
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
            <ListItem>
              <strong>Total Confidentiality:</strong> gerialy/FALBOR maintains a{' '}
              <strong>total confidentiality agreement</strong> regarding all your personal and usage
              information.
            </ListItem>
            <ListItem>
              <strong>Encryption Commitment:</strong> we implement industry-standard security
              measures. Specifically, should any legal authority request your data, gerialy/FALBOR
              will <strong>only provide this information in a 100% encrypted format</strong>. We
              will simultaneously notify you and provide you with the necessary decryption key.
            </ListItem>
            <ListItem>
              <strong>No Sale to Third Parties:</strong> we are committed to{' '}
              <strong>never selling</strong> your Personal Information to external third parties.
            </ListItem>
          </UnorderedList>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center' id='data-retention'>
            4. Data Retention and Deletion Policy
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
            <ListItem>
              <strong>Permanent Retention for Metrics:</strong> you acknowledge and agree that for
              internal metrics and future business analysis by FALBOR,{' '}
              <strong>no information</strong> recorded in the webapps ecosystem databases is{' '}
              <strong>permanently deleted</strong>. This data is retained indefinitely for internal
              purposes.
            </ListItem>
            <ListItem>
              <strong>Subscription Cancellation:</strong> when you cancel your subscription, your
              account access ends at the end of the paid 30-day cycle, but your data remains in our
              system for internal metrics, as stated above.
            </ListItem>
          </UnorderedList>

          <Stack gap='1rem' width='100%'>
            <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
              5. Changes of Ownership (Acquisition)
            </Heading>

            <Text fontSize='lg' textAlign='justify'>
              In the event of an acquisition of FALBOR and its assets, including gerialy, all users
              will be <strong>notified</strong>. You will be given the explicit{' '}
              <strong>option to accept or reject</strong> continuing the use of the services under
              the new ownership. If you reject the terms of the new owner, your account will be
              terminated, but data retention rules (
              <Link href='/privacy#data-retention' color='blue.500'>
                section #4
              </Link>
              ) will still apply for internal metrics purposes.
            </Text>
          </Stack>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            6. Third-Party Data Sources
          </Heading>

          <Text fontSize='lg' textAlign='justify'>
            Information provided in our marketplace and through other integrated third-party
            services is sourced from <strong>public domains</strong> or{' '}
            <strong>trusted partner suppliers</strong>. Data suppliers are responsible for the
            legality and veracity of their data, and Gerialy/FALBOR assumes full ownership of this
            supplied data for commercial use (as per{' '}
            <Link href='/legal' color='blue.500'>
              Terms and Conditions
            </Link>
            ).
          </Text>

          <Text fontSize='xl' textAlign='justify' mt='2rem'>
            By using the Gerialy webapps ecosystem, you <strong>automatically agree</strong> to the
            collection, use, and retention of your information as described in this Privacy Policy.
          </Text>
        </Stack>
      </Flex>
    </DashboardNavigation>
  );
}
