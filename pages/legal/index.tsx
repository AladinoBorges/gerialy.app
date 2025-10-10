import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { Divider, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

export default function LegalPage() {
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
            Terms and Conditions
          </Heading>

          <Text>October 09, 2025</Text>
        </Stack>

        <Divider />

        <Stack gap='2rem' maxWidth='1024px'>
          <Text fontSize='xl' textAlign='justify'>
            Welcome to the gerialy (FALBOR) web applications ecosystem! These terms and conditions
            govern your use of our services. By accessing or using any part of our ecosystem, you{' '}
            <strong>automatically agree</strong> to all these terms.
          </Text>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            1. Disclaimer of Liability and User Responsibility
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
            <ListItem>
              <strong>No Liability for Use:</strong> gerialy and its parent company,{' '}
              <strong>FALBOR</strong>, are <strong>not responsible</strong> for any direct or
              indirect damages, losses, or issues resulting from your use of the web applications or
              the information contained within them. You understand and agree that you use our
              services <strong>entirely at your own risk</strong>.
            </ListItem>

            <ListItem>
              <strong>User Responsibility:</strong> you are <strong>solely responsible</strong> for
              all activity conducted through your account and within our web applications.
              gerialy/FALBOR will <strong>not intervene</strong> in or cooperate with authorities to
              resolve problems caused by your actions.
            </ListItem>
          </UnorderedList>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            2. Data Confidentiality and Security
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
            <ListItem>
              <strong>Total Confidentiality:</strong> gerialy/FALBOR agrees to a{' '}
              <strong>total confidentiality agreement</strong> with you regarding all information
              you provide, including account details, usage data, payment, and address information.
            </ListItem>

            <ListItem>
              <strong>Data Requests by Authorities:</strong> if any legal authority requests your
              information, gerialy/FALBOR reserves the right to provide this information{' '}
              <strong>100% encrypted</strong>. We will notify you and provide you with the
              decryption key at the time the data is requested by the third party.
            </ListItem>

            <ListItem>
              <strong>No Sale of User Data:</strong> gerialy/FALBOR is committed to{' '}
              <strong>never selling</strong> your information to third parties. Your data is yours,
              and <strong>we respect your ownership</strong> of it.
            </ListItem>

            <ListItem>
              <strong>Acquisition of the Company:</strong> should FALBOR and its assets (including
              gerialy) be acquired by another entity, all users will be <strong>notified</strong> of
              the purchase and will be given the <strong>option to accept or reject</strong>{' '}
              continuing to use the platforms' services under the new ownership.
            </ListItem>

            <ListItem>
              <strong>Data Retention for Internal Metrics:</strong> for the purpose of future
              metrics and internal business needs of the parent company (FALBOR),{' '}
              <strong>no information</strong> recorded in the webapps ecosystem databases is{' '}
              <strong>permanently deleted</strong>. This data may be used for FALBOR's internal
              analysis and needs.
            </ListItem>
          </UnorderedList>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            3. Subscriptions and Payments
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
            <ListItem>
              <strong>Non-Refundable Payments:</strong> all payments for services and subscriptions
              are <strong>non-refundable</strong>. By completing a purchase,{' '}
              <strong>you acknowledge and agree</strong> that payments cannot be refunded under any
              circumstances.
            </ListItem>

            <ListItem>
              <strong>Automatic Renewal:</strong> subscriptions are renewed automatically every{' '}
              <strong>30 days</strong> unless you cancel at least <strong>24 hours</strong> before
              the next billing cycle. You can manage and cancel your subscription through your
              account settings.
            </ListItem>

            <ListItem>
              <strong>Cancellation:</strong> you may <strong>cancel</strong> your automatic renewal
              at any time. Upon cancellation, you will retain access to the platform only until the{' '}
              <strong>30th day</strong> of the active monthly subscription period (with no future
              automatic renewal).
            </ListItem>
          </UnorderedList>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            4. Marketplace and Third-Party Data
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
            <ListItem>
              <strong>Data Sources:</strong> all information provided in the marketplace and other
              integrated third-party services originates from <strong>public sources</strong> or
              from the databases of <strong>partner suppliers</strong> of gerialy/FALBOR.
            </ListItem>

            <ListItem>
              <strong>Supplier Data Disclosure:</strong> data suppliers agree that gerialy/FALBOR
              may provide this information, either <strong>publicly and free of charge</strong> or
              through internally defined <strong>subscriptions</strong>, when such information is
              defined as being of <strong>public and/or commercial interest</strong> according to
              FALBOR's internal methodologies.
            </ListItem>
          </UnorderedList>

          <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
            5. Definitions and Service Changes
          </Heading>

          <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
            <ListItem>
              <strong>Definition of "User":</strong> both subscribers and data suppliers are
              characterized as <strong>"Users"</strong> of the gerialy/FALBOR webapps ecosystem. The
              difference lies in their roles - <strong>subscribers</strong> use the services, while{' '}
              <strong>data suppliers</strong> provide information to be shared within the ecosystem.
            </ListItem>

            <ListItem>
              <strong>Data Supplier Responsibility and Ownership:</strong> data suppliers are{' '}
              <strong>entirely responsible</strong> for the veracity and legality of the information
              they provide. They agree to the potential commercial use of this data. By supplying
              data, they transfer full ownership of the donated information to gerialy/FALBOR,
              meaning <strong>gerialy/FALBOR is the sole owner</strong> of this data.
            </ListItem>

            <ListItem>
              <strong>Conversion to Public Project:</strong> should gerialy/FALBOR decide to convert
              the entire ecosystem into a <strong>public project</strong> and cancel all
              subscriptions, we reserve the right to <strong>reimburse all or part</strong> of the
              subscriptions paid by the webapps ecosystem users.
            </ListItem>
          </UnorderedList>
        </Stack>
      </Flex>
    </DashboardNavigation>
  );
}
