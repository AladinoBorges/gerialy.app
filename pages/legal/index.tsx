import { DashboardNavigation } from '@/components/Navigation/Dashboard';
import { useTranslation } from '@/hooks/useTranslation';
import { Divider, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react';

export default function LegalPage() {
  const { locale } = useTranslation();

  const renderPTBR = () => (
    <Stack gap='2rem' maxWidth='1024px'>
      <Text fontSize='xl' textAlign='justify'>
        Bem-vindo ao ecossistema de aplicações web da gerialy (FALBOR)! Estes termos e condições
        governam o uso de nossos serviços. Ao acessar ou usar qualquer parte do nosso ecossistema, você{' '}
        <strong>concorda automaticamente</strong> com todos estes termos.
      </Text>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        1. Isenção de Responsabilidade e Responsabilidade do Usuário
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Sem Responsabilidade por Uso:</strong> a gerialy e sua empresa controladora,{' '}
          <strong>FALBOR</strong>, <strong>não são responsáveis</strong> por quaisquer danos diretos ou
          indiretos, perdas ou problemas resultantes do seu uso das aplicações web ou das
          informações nelas contidas. Você entende e concorda que usa nossos serviços{' '}
          <strong>inteiramente por sua própria conta e risco</strong>.
        </ListItem>

        <ListItem>
          <strong>Responsabilidade do Usuário:</strong> você é o <strong>único responsável</strong> por
          toda a atividade realizada através da sua conta e dentro de nossas aplicações web.
          A gerialy/FALBOR <strong>não intervirá</strong> ou cooperará com as autoridades para
          resolver problemas causados por suas ações.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        2. Confidencialidade e Segurança de Dados
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Confidencialidade Total:</strong> a gerialy/FALBOR assume um{' '}
          <strong>acordo de confidencialidade total</strong> com você em relação a todas as informações
          que você fornecer, incluindo detalhes da conta, dados de uso, pagamentos e informações de endereço.
        </ListItem>

        <ListItem>
          <strong>Solicitações de Dados por Autoridades:</strong> se qualquer autoridade legal solicitar
          seus dados, a gerialy/FALBOR reserva-se o direito de fornecer essas informações{' '}
          <strong>100% criptografadas</strong>. Nós notificaremos você e forneceremos a chave de decodificação
          no momento em que os dados forem solicitados por terceiros.
        </ListItem>

        <ListItem>
          <strong>Sem Venda de Dados de Usuários:</strong> a gerialy/FALBOR compromete-se a{' '}
          <strong>nunca vender</strong> suas informações a terceiros. Seus dados são seus e{' '}
          <strong>nós respeitamos a sua propriedade</strong> sobre eles.
        </ListItem>

        <ListItem>
          <strong>Aquisição da Empresa:</strong> caso a FALBOR e seus ativos (incluindo a gerialy)
          sejam adquiridos por outra entidade, todos os usuários serão <strong>notificados</strong> da
          compra e terão a <strong>opção de aceitar ou rejeitar</strong> continuar usando os serviços das
          plataformas sob a nova administração.
        </ListItem>

        <ListItem>
          <strong>Retenção de Dados para Métricas Internas:</strong> para fins de métricas futuras e
          necessidades internas da empresa controladora (FALBOR),{' '}
          <strong>nenhuma informação</strong> registrada nos bancos de dados do ecossistema de webapps é{' '}
          <strong>permanentemente excluída</strong>. Estes dados podem ser usados para análise e
          necessidades internas da FALBOR.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        3. Assinaturas e Pagamentos
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Pagamentos Não Reembolsáveis:</strong> todos os pagamentos por serviços e assinaturas
          são <strong>não reembolsáveis</strong>. Ao concluir uma compra,{' '}
          <strong>você reconhece e concorda</strong> que os pagamentos não podem ser reembolsados sob
          quaisquer circunstâncias.
        </ListItem>

        <ListItem>
          <strong>Renovação Automática:</strong> as assinaturas são renovadas automaticamente a cada{' '}
          <strong>30 dias</strong>, a menos que você cancele pelo menos <strong>24 horas</strong> antes
          do próximo ciclo de faturamento. Você pode gerenciar e cancelar sua assinatura através das
          configurações da sua conta.
        </ListItem>

        <ListItem>
          <strong>Cancelamento:</strong> você pode <strong>cancelar</strong> sua renovação automática
          a qualquer momento. Após o cancelamento, você manterá o acesso à plataforma apenas até o{' '}
          <strong>30º dia</strong> do período de assinatura mensal ativo (sem renovação automática futura).
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        4. Marketplace e Dados de Terceiros
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Fontes de Dados:</strong> todas as informações fornecidas no marketplace e outros
          serviços de terceiros integrados originam-se de <strong>fontes públicas</strong> ou
          dos bancos de dados de <strong>fornecedores parceiros</strong> da gerialy/FALBOR.
        </ListItem>

        <ListItem>
          <strong>Divulgação de Dados de Fornecedores:</strong> os fornecedores de dados concordam que a
          gerialy/FALBOR pode fornecer essas informações, seja de forma{' '}
          <strong>pública e gratuita</strong> ou por meio de <strong>assinaturas</strong> internas,
          quando tais informações forem definidas como de <strong>interesse público e/ou comercial</strong>
          de acordo com as metodologias internas da FALBOR.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        5. Definições e Alterações nos Serviços
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Definição de &apos;Usuário&apos;:</strong> tanto os assinantes quanto os fornecedores
          de dados são caracterizados como <strong>&apos;Usuários&apos;</strong> do ecossistema de webapps
          da gerialy/FALBOR. A diferença está nos seus papéis - os <strong>assinantes</strong> usam os
          serviços, enquanto os <strong>fornecedores de dados</strong> fornecem informações para serem
          compartilhadas dentro do ecossistema.
        </ListItem>

        <ListItem>
          <strong>Responsabilidade e Propriedade do Fornecedor de Dados:</strong> os fornecedores de dados
          são <strong>inteiramente responsáveis</strong> pela veracidade e legalidade das informações
          que fornecem. Eles concordam com o potencial uso comercial desses dados. Ao fornecer dados, eles
          transferem a propriedade total das informações doadas para a gerialy/FALBOR, ou seja, a{' '}
          <strong>gerialy/FALBOR é a única proprietária</strong> desses dados.
        </ListItem>

        <ListItem>
          <strong>Conversão em Projeto Público:</strong> caso a gerialy/FALBOR decida converter todo o
          ecossistema em um <strong>projeto público</strong> e cancelar todas as assinaturas, reservamo-nos
          o direito de <strong>reembolsar integralmente ou em parte</strong> as assinaturas pagas pelos
          usuários do ecossistema de webapps.
        </ListItem>
      </UnorderedList>
    </Stack>
  );

  const renderPTPT = () => (
    <Stack gap='2rem' maxWidth='1024px'>
      <Text fontSize='xl' textAlign='justify'>
        Bem-vindo ao ecossistema de aplicações web da gerialy (FALBOR)! Estes termos e condições
        governam o uso dos nossos serviços. Ao aceder ou utilizar qualquer parte do nosso ecossistema, você{' '}
        <strong>concorda automaticamente</strong> com todos estes termos.
      </Text>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        1. Exclusão de Responsabilidade e Responsabilidade do Utilizador
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Sem Responsabilidade por Uso:</strong> a gerialy e a sua empresa-mãe,{' '}
          <strong>FALBOR</strong>, <strong>não são responsáveis</strong> por quaisquer danos diretos ou
          indiretos, perdas ou problemas resultantes do seu uso das aplicações web ou das
          informações nelas contidas. O utilizador entende e concorda que utiliza os nossos serviços{' '}
          <strong>inteiramente por sua própria conta e risco</strong>.
        </ListItem>

        <ListItem>
          <strong>Responsabilidade do Utilizador:</strong> você é o <strong>único responsável</strong> por
          toda a atividade realizada através da sua conta e dentro das nossas aplicações web.
          A gerialy/FALBOR <strong>não intervirá</strong> ou cooperará com as autoridades para
          resolver problemas causados pelas suas ações.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        2. Confidencialidade e Segurança de Dados
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Confidencialidade Total:</strong> a gerialy/FALBOR assume um{' '}
          <strong>acordo de confidencialidade total</strong> consigo em relação a todas as informações
          que você fornecer, incluindo detalhes de conta, dados de uso, pagamentos e informações de endereço.
        </ListItem>

        <ListItem>
          <strong>Pedidos de Dados por Autoridades:</strong> se qualquer autoridade legal solicitar
          os seus dados, a gerialy/FALBOR reserva-se o direito de fornecer essas informações{' '}
          <strong>100% encriptadas</strong>. Nós notificá-lo-emos e forneceremos a chave de desencriptação
          no momento em que os dados forem solicitados por terceiros.
        </ListItem>

        <ListItem>
          <strong>Sem Venda de Dados de Utilizadores:</strong> a gerialy/FALBOR compromete-se a{' '}
          <strong>nunca vender</strong> as suas informações a terceiros. Os seus dados são seus e{' '}
          <strong>nós respeitamos a sua propriedade</strong> sobre os mesmos.
        </ListItem>

        <ListItem>
          <strong>Aquisição da Empresa:</strong> caso a FALBOR e os seus ativos (incluindo a gerialy)
          sejam adquiridos por outra entidade, todos os utilizadores serão <strong>notificados</strong> da
          compra e terão a <strong>opção de aceitar ou rejeitar</strong> continuar a utilizar os serviços das
          plataformas sob a nova gerência.
        </ListItem>

        <ListItem>
          <strong>Retenção de Dados para Métricas Internas:</strong> para fins de métricas futuras e
          necessidades internas da empresa-mãe (FALBOR),{' '}
          <strong>nenhuma informação</strong> registada nas bases de dados do ecossistema de webapps é{' '}
          <strong>permanentemente eliminada</strong>. Estes dados podem ser utilizados para análise e
          necessidades internas da FALBOR.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        3. Subscrições e Pagamentos
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Pagamentos Não Reembolsáveis:</strong> todos os pagamentos por serviços e subscrições
          são <strong>não reembolsáveis</strong>. Ao concluir uma compra,{' '}
          <strong>você reconhece e concorda</strong> que os pagamentos não podem ser reembolsados sob
          quaisquer circunstâncias.
        </ListItem>

        <ListItem>
          <strong>Renovação Automática:</strong> as subscrições são renovadas automaticamente a cada{' '}
          <strong>30 dias</strong>, a menos que você cancele pelo menos <strong>24 horas</strong> antes
          do próximo ciclo de faturação. Você pode gerir e cancelar a sua subscrição através das
          configurações da sua conta.
        </ListItem>

        <ListItem>
          <strong>Cancelamento:</strong> você pode <strong>cancelar</strong> a sua renovação automática
          a qualquer momento. Após o cancelamento, manterá o acesso à plataforma apenas até ao{' '}
          <strong>30º dia</strong> do período de subscrição mensal ativo (sem renovação automática futura).
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        4. Marketplace e Dados de Terceiros
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Fontes de Dados:</strong> todas as informações fornecidas no marketplace e outros
          serviços de terceiros integrados originam-se de <strong>fontes públicas</strong> ou
          das bases de dados de <strong>fornecedores parceiros</strong> da gerialy/FALBOR.
        </ListItem>

        <ListItem>
          <strong>Divulgação de Dados de Fornecedores:</strong> os fornecedores de dados concordam que a
          gerialy/FALBOR pode fornecer essas informações, seja de forma{' '}
          <strong>pública e gratuita</strong> ou por meio de <strong>subscrições</strong> internas,
          quando tais informações forem definidas como de <strong>interesse público e/ou comercial</strong>
          de acordo com as metodologias internas da FALBOR.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        5. Definições e Alterações nos Serviços
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Definição de &apos;Utilizador&apos;:</strong> tanto os subscritores quanto os fornecedores
          de dados são caracterizados como <strong>&apos;Utilizadores&apos;</strong> do ecossistema de webapps
          da gerialy/FALBOR. A diferença está nos seus papéis - os <strong>subscritores</strong> usam os
          serviços, enquanto os <strong>fornecedores de dados</strong> fornecem informações para serem
          partilhadas dentro do ecossistema.
        </ListItem>

        <ListItem>
          <strong>Responsabilidade e Propriedade do Fornecedor de Dados:</strong> os fornecedores de dados
          são <strong>inteiramente responsáveis</strong> pela veracidade e legalidade das informações
          que fornecem. Eles concordam com o potencial uso comercial destes dados. Ao fornecer dados, eles
          transferem a propriedade total das informações doadas para a gerialy/FALBOR, ou seja, a{' '}
          <strong>gerialy/FALBOR é a única proprietária</strong> desses dados.
        </ListItem>

        <ListItem>
          <strong>Conversão em Projeto Público:</strong> caso a gerialy/FALBOR decida converter todo o
          ecossistema num <strong>projeto público</strong> e cancelar todas as subscrições, reservamo-nos
          o direito de <strong>reembolsar integralmente ou em parte</strong> as subscrições pagas pelos
          utilizadores do ecossistema de webapps.
        </ListItem>
      </UnorderedList>
    </Stack>
  );

  const renderENUK = () => (
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
          continuing to use the platforms&apos; services under the new ownership.
        </ListItem>

        <ListItem>
          <strong>Data Retention for Internal Metrics:</strong> for the purpose of future
          metrics and internal business needs of the parent company (FALBOR),{' '}
          <strong>no information</strong> recorded in the webapps ecosystem databases is{' '}
          <strong>permanently deleted</strong>. This data may be used for FALBOR&apos;s internal
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
          FALBOR&apos;s internal methodologies.
        </ListItem>
      </UnorderedList>

      <Heading as='h2' fontSize='lg' fontWeight={500} textAlign='center'>
        5. Definitions and Service Changes
      </Heading>

      <UnorderedList paddingLeft='1.5rem' spacing='0.5rem'>
        <ListItem>
          <strong>Definition of &apos;User&apos;:</strong> both subscribers and data suppliers
          are characterized as <strong>&apos;User&apos;</strong> of the gerialy/FALBOR webapps
          ecosystem. The difference lies in their roles - <strong>subscribers</strong> use the
          services, while <strong>data suppliers</strong> provide information to be shared
          within the ecosystem.
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
  );

  const titleMap = {
    'pt-BR': 'Termos e Condições',
    'pt-PT': 'Termos e Condições',
    'en-UK': 'Terms and Conditions',
  };

  const dateMap = {
    'pt-BR': '09 de Outubro de 2025',
    'pt-PT': '09 de Outubro de 2025',
    'en-UK': 'October 09, 2025',
  };

  return (
    <DashboardNavigation isLogged={false} complementaryHeader='nav.legal'>
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
