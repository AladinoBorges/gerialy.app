import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { useTranslation } from '@/hooks/useTranslation';
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
  const { locale } = useTranslation();

  const renderPTBR = () => (
    <Stack gap='2rem' maxWidth='1024px'>
      <Text fontSize='xl' textAlign='justify'>
        Esta Política de Privacidade explica como a gerialy e sua empresa controladora, <strong>FALBOR</strong>
        , coletam, usam, protegem e tratam suas <strong>Informações Pessoais</strong> quando você
        usa nosso ecossistema de aplicações web. Ao usar nossos serviços, você confirma que leu e
        concordou com os termos descritos aqui e em nossos <strong>Termos e Condições</strong>.
      </Text>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        1. Informações que Coletamos
      </Heading>

      <Stack gap='0rem' width='100%'>
        <Text fontSize='md' mb='1rem' fontWeight={500} textAlign='center'>
          Coletamos informações necessárias para fornecer e manter nossos serviços. Isso inclui:
        </Text>

        <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
          <ListItem>
            <strong>Dados de Registro:</strong> informações que você fornece ao criar uma
            conta, como nome, endereço de e-mail e detalhes de contato.
          </ListItem>
          <ListItem>
            <strong>Dados Financeiros:</strong> informações de faturamento, detalhes de pagamento (processados por um
            processador terceirizado seguro) e endereço físico para fins de faturamento. <strong>A gerialy/FALBOR não armazena dados brutos de cartão de pagamento.</strong>
          </ListItem>
          <ListItem>
            <strong>Dados de Uso:</strong> informações sobre sua atividade dentro das
            aplicações web, incluindo páginas visitadas, recursos usados e padrões de interação.
          </ListItem>
          <ListItem>
            <strong>Dados do Fornecedor:</strong> informações fornecidas pelos Fornecedores de Dados que, mediante
            doação, tornam-se <strong>propriedade exclusiva da gerialy/FALBOR</strong> (conforme detalhado no T&C).
          </ListItem>
        </UnorderedList>
      </Stack>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        2. Como Usamos Suas Informações
      </Heading>

      <Stack gap='0rem' width='100%'>
        <Text fontSize='md' mb='1rem' fontWeight={500} textAlign='center'>
          Suas informações são usadas principalmente para os seguintes fins:
        </Text>

        <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
          <ListItem>
            Para <strong>Fornecer e Manter</strong> nossos serviços e gerenciar sua assinatura.
          </ListItem>
          <ListItem>
            Para <strong>Métricas Internas e Análises</strong> pela empresa controladora (FALBOR) para
            melhorar nossos produtos e serviços.
          </ListItem>
          <ListItem>
            Para <strong>Faturamento e Gerenciamento de Conta</strong>, incluindo avisos de renovação automática.
          </ListItem>
          <ListItem>
            Para <strong>Comunicar</strong> atualizações importantes, alertas de segurança e alterações nos serviços.
          </ListItem>
        </UnorderedList>
      </Stack>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        3. Segurança de Dados, Criptografia e Confidencialidade
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
        <ListItem>
          <strong>Confidencialidade Total:</strong> a gerialy/FALBOR mantém um{' '}
          <strong>acordo de confidencialidade total</strong> em relação a todas as suas informações pessoais e de uso.
        </ListItem>
        <ListItem>
          <strong>Compromisso de Criptografia:</strong> implementamos medidas de segurança padrão da indústria. Especificamente, caso qualquer autoridade legal solicite seus dados, a gerialy/FALBOR
          <strong>apenas fornecerá essas informações em formato 100% criptografado</strong>. Nós notificaremos você simultaneamente e forneceremos a chave de decodificação necessária.
        </ListItem>
        <ListItem>
          <strong>Sem Venda para Terceiros:</strong> estamos comprometidos em{' '}
          <strong>nunca vender</strong> suas Informações Pessoais para terceiros externos.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center' id='data-retention'>
        4. Política de Retenção e Exclusão de Dados
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
        <ListItem>
          <strong>Retenção Permanente para Métricas:</strong> você reconhece e concorda que, para
          métricas internas e análises futuras de negócios pela FALBOR,{' '}
          <strong>nenhuma informação</strong> registrada nos bancos de dados do ecossistema é{' '}
          <strong>permanentemente excluída</strong>. Esses dados são mantidos indefinidamente para fins internos.
        </ListItem>
        <ListItem>
          <strong>Cancelamento de Assinatura:</strong> quando você cancela sua assinatura, seu
          acesso à conta termina no final do ciclo de 30 dias pago, mas seus dados permanecem em nosso
          sistema para métricas internas, conforme indicado acima.
        </ListItem>
      </UnorderedList>

      <Stack gap='1rem' width='100%'>
        <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
          5. Alterações de Propriedade (Aquisição)
        </Heading>

        <Text fontSize='lg' textAlign='justify'>
          No caso de uma aquisição da FALBOR e de seus ativos, incluindo a gerialy, todos os usuários
          serão <strong>notificados</strong>. Você terá a{' '}
          <strong>opção explícita de aceitar ou rejeitar</strong> continuar usando os serviços sob a
          nova administração. Se você rejeitar os termos do novo proprietário, sua conta será
          encerrada, mas as regras de retenção de dados (
          <Link href='/privacy#data-retention' color='blue.500'>
            seção #4
          </Link>
          ) ainda se aplicarão para fins de métricas internas.
        </Text>
      </Stack>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        6. Fontes de Dados de Terceiros
      </Heading>

      <Text fontSize='lg' textAlign='justify'>
        As informações fornecidas em nosso ecossistema são originadas de <strong>domínios públicos</strong> ou{' '}
        <strong>fornecedores parceiros de confiança</strong>. Os fornecedores de dados são responsáveis pela
        legalidade e veracidade de seus dados, e a gerialy/FALBOR assume a propriedade total desses
        dados fornecidos para uso comercial (conforme os{' '}
        <Link href='/legal' color='blue.500'>
          Termos e Condições
        </Link>
        ).
      </Text>
    </Stack>
  );

  const renderPTPT = () => (
    <Stack gap='2rem' maxWidth='1024px'>
      <Text fontSize='xl' textAlign='justify'>
        Esta Política de Privacidade explica como a gerialy e a sua empresa-mãe, <strong>FALBOR</strong>
        , recolhem, utilizam, protegem e tratam as suas <strong>Informações Pessoais</strong> quando você
        utiliza o nosso ecossistema de aplicações web. Ao utilizar os nossos serviços, você confirma que leu e
        concordou com os termos descritos aqui e em nossos <strong>Termos e Condições</strong>.
      </Text>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        1. Informações que Recolhemos
      </Heading>

      <Stack gap='0rem' width='100%'>
        <Text fontSize='md' mb='1rem' fontWeight={500} textAlign='center'>
          Recolhemos informações necessárias para fornecer e manter os nossos serviços. Isso inclui:
        </Text>

        <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
          <ListItem>
            <strong>Dados de Registo:</strong> informações que você fornece ao criar uma
            conta, como nome, endereço de e-mail e detalhes de contacto.
          </ListItem>
          <ListItem>
            <strong>Dados Financeiros:</strong> informações de faturação, detalhes de pagamento (processados por um
            processador seguro de terceiros) e endereço físico para fins de faturação. <strong>A gerialy/FALBOR não armazena dados brutos de cartões de pagamento.</strong>
          </ListItem>
          <ListItem>
            <strong>Dados de Uso:</strong> informações sobre a sua atividade dentro das
            aplicações web, incluindo páginas visitadas, recursos utilizados e padrões de interação.
          </ListItem>
          <ListItem>
            <strong>Dados do Fornecedor:</strong> informações fornecidas pelos Fornecedores de Dados que, mediante
            doação, tornam-se <strong>propriedade exclusiva da gerialy/FALBOR</strong> (conforme detalhado nos T&C).
          </ListItem>
        </UnorderedList>
      </Stack>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        2. Como Utilizamos as Suas Informações
      </Heading>

      <Stack gap='0rem' width='100%'>
        <Text fontSize='md' mb='1rem' fontWeight={500} textAlign='center'>
          As suas informações são utilizadas principalmente para os seguintes fins:
        </Text>

        <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
          <ListItem>
            Para <strong>Fornecer e Manter</strong> os nossos serviços e gerir a sua subscrição.
          </ListItem>
          <ListItem>
            Para <strong>Métricas Internas e Análises</strong> pela empresa-mãe (FALBOR) para
            melhorar os nossos produtos e serviços.
          </ListItem>
          <ListItem>
            Para <strong>Faturação e Gestão de Conta</strong>, incluindo avisos de renovação automática.
          </ListItem>
          <ListItem>
            Para <strong>Comunicar</strong> atualizações importantes, alertas de segurança e alterações nos serviços.
          </ListItem>
        </UnorderedList>
      </Stack>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        3. Segurança de Dados, Encriptação e Confidencialidade
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
        <ListItem>
          <strong>Confidencialidade Total:</strong> a gerialy/FALBOR mantém um{' '}
          <strong>acordo de confidencialidade total</strong> em relação a todas as suas informações pessoais e de uso.
        </ListItem>
        <ListItem>
          <strong>Compromisso de Encriptação:</strong> implementamos medidas de segurança padrão da indústria. Especificamente, caso qualquer autoridade legal solicite os seus dados, a gerialy/FALBOR
          <strong>apenas fornecerá essas informações em formato 100% encriptado</strong>. Nós notificá-lo-emos simultaneamente e forneceremos a chave de desencriptação necessária.
        </ListItem>
        <ListItem>
          <strong>Sem Venda a Terceiros:</strong> estamos comprometidos em{' '}
          <strong>nunca vender</strong> as suas Informações Pessoais a terceiros externos.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center' id='data-retention'>
        4. Política de Retenção e Eliminação de Dados
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.75rem'>
        <ListItem>
          <strong>Retenção Permanente para Métricas:</strong> você reconhece e concorda que, para
          métricas internas e análises futuras de negócios pela FALBOR,{' '}
          <strong>nenhuma informação</strong> registada nas bases de dados do ecossistema é{' '}
          <strong>permanentemente eliminada</strong>. Estes dados são mantidos indefinidamente para fins internos.
        </ListItem>
        <ListItem>
          <strong>Cancelamento de Subscrição:</strong> quando você cancela a sua subscrição, o seu
          acesso à conta termina no final do ciclo de 30 dias pago, mas os seus dados permanecem no nosso
          sistema para métricas internas, conforme indicado acima.
        </ListItem>
      </UnorderedList>

      <Stack gap='1rem' width='100%'>
        <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
          5. Alterações de Propriedade (Aquisição)
        </Heading>

        <Text fontSize='lg' textAlign='justify'>
          No caso de uma aquisição da FALBOR e dos seus ativos, incluindo a gerialy, todos os utilizadores
          serão <strong>notificados</strong>. Você terá a{' '}
          <strong>opção explícita de aceitar ou rejeitar</strong> continuar a utilizar os serviços sob a
          nova gerência. Se rejeitar os termos do novo proprietário, a sua conta será
          encerrada, mas as regras de retenção de dados (
          <Link href='/privacy#data-retention' color='blue.500'>
            secção #4
          </Link>
          ) ainda se aplicarão para fins de métricas internas.
        </Text>
      </Stack>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        6. Fontes de Dados de Terceiros
      </Heading>

      <Text fontSize='lg' textAlign='justify'>
        As informações fornecidas em nosso ecossistema são originadas de <strong>domínios públicos</strong> ou{' '}
        <strong>fornecedores parceiros de confiança</strong>. Os fornecedores de dados são responsáveis pela
        legalidade e veracidade dos seus dados, e a gerialy/FALBOR assume a propriedade total destes
        dados fornecidos para uso comercial (conforme os{' '}
        <Link href='/legal' color='blue.500'>
          Termos e Condições
        </Link>
        ).
      </Text>
    </Stack>
  );

  const renderENUK = () => (
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
    </Stack>
  );

  const titleMap = {
    'pt-BR': 'Política de Privacidade',
    'pt-PT': 'Política de Privacidade',
    'en-UK': 'Privacy Policy',
  };

  const dateMap = {
    'pt-BR': '09 de Outubro de 2025',
    'pt-PT': '09 de Outubro de 2025',
    'en-UK': 'October 09, 2025',
  };

  return (
    <DashboardNavigation isLogged={false} complementaryHeader='nav.privacy'>
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
            {titleMap[locale] || titleMap['en-UK']}
          </Heading>

          <Text>{dateMap[locale] || dateMap['en-UK']}</Text>
        </Stack>

        <Divider />

        {locale === 'pt-BR' && renderPTBR()}
        {locale === 'pt-PT' && renderPTPT()}
        {locale === 'en-UK' && renderENUK()}
      </Flex>
    </DashboardNavigation>
  );
}
