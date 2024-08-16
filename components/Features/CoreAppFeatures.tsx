import { Box, Button, chakra, Flex, Icon, Stack } from '@chakra-ui/react';

export function CoreAppFeatures() {
  return (
    <Flex
      gap='3rem'
      rounded='xl'
      bg='#edf3f8'
      width='auto'
      padding={20}
      direction='column'
      alignItems='center'
      justifyContent='center'
      backgroundColor='gray.50'
      _dark={{ backgroundColor: '#3e3e3e' }}
    >
      <Box
        rounded='xl'
        paddingY={12}
        backgroundColor='white'
        _dark={{ backgroundColor: 'gray.800' }}
      >
        <Box maxWidth='7xl' marginX='auto' paddingX={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: 'center' }}>
            <chakra.h2
              letterSpacing='wide'
              fontWeight='semibold'
              textTransform='uppercase'
              _light={{ color: 'brand.600' }}
            >
              gia recrutamento
            </chakra.h2>

            <chakra.p
              marginTop={2}
              lineHeight='8'
              letterSpacing='tight'
              fontWeight='extrabold'
              _light={{ color: 'gray.900' }}
              fontSize={{ base: '3xl', sm: '4xl' }}
            >
              precisão, inteligência e rapidez
            </chakra.p>

            <chakra.p
              fontSize='xl'
              marginTop={4}
              maxWidth='3xl'
              color='gray.500'
              marginX={{ lg: 'auto' }}
              _dark={{ color: 'gray.400' }}
            >
              <strong>gia</strong>, a nossa inteligência artificial, analisa, seleciona e aprimora
              cada detalhe do processo seletivo, para que você encontre o talento ideal em menos
              tempo.
            </chakra.p>
          </Box>

          <Box marginTop={16}>
            <Stack
              gridRowGap={{ md: 10 }}
              display={{ md: 'grid' }}
              gridColumnGap={{ md: 8 }}
              spacing={{ base: 10, md: 0 }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
            >
              <FeatureCard
                title='benefícios para candidatos'
                icon={
                  <path
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                  />
                }
              >
                quer saber se a vaga dos seus sonhos é para você? deixe a <strong>gia</strong>{' '}
                analisar o seu currículo. em menos de 1 minuto, você recebe um relatório de
                compatibilidade, uma carta de apresentação personalizada e uma lista de pontos para
                melhorar. tudo para que cada candidatura seja mais estratégica e bem-sucedida.
              </FeatureCard>

              <FeatureCard
                title='benefícions para recrutadores'
                icon={
                  <path
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3'
                  />
                }
              >
                imagine um recrutamento onde cada currículo recebe a atenção que merece, sem
                sobrecargas para si, com a <strong>geria</strong>, a inteligência artificial não
                apenas automatiza, mas também humaniza. nós cuidamos da triagem, da análise e da
                precisão, para que você foque no que realmente importa: encontrar a conexão
                perfeita.
              </FeatureCard>

              <FeatureCard
                title='benefícions para empresas'
                icon={
                  <path
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                }
              >
                publicar vagas, receber candidaturas e realizar triagens nunca foi tão simples. a{' '}
                <strong>geria</strong> transforma a gestão de processos seletivos, automatizando a
                seleção dos melhores talentos e entregando insights detalhados para que a sua equipe
                de RH tome decisões mais rápidas e assertivas.
              </FeatureCard>

              <FeatureCard
                title='você só paga enquanto usar'
                icon={
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'
                  />
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
              </FeatureCard>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Box width='100%' maxWidth='7xl'>
        <Button
          as='a'
          size='lg'
          isDisabled
          variant='solid'
          cursor='pointer'
          alignItems='center'
          display='inline-flex'
          colorScheme='twitter'
          justifyContent='center'
          marginBottom={{ base: 2, sm: 0 }}
          width={{ base: 'full', sm: 'auto', md: 'full' }}
        >
          experimente agora
          <Icon boxSize={4} ml={1} viewBox='0 0 20 20' fill='currentColor'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </Icon>
        </Button>
      </Box>
    </Flex>
  );
}

function FeatureCard(props) {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          width={12}
          height={12}
          rounded='md'
          color='white'
          alignItems='center'
          justifyContent='center'
          _light={{ backgroundColor: 'blue.500' }}
        >
          <Icon
            boxSize={6}
            fill='none'
            aria-hidden='true'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {props.icon}
          </Icon>
        </Flex>
      </Flex>

      <Box ml={4}>
        <chakra.dt
          fontSize='lg'
          fontWeight='medium'
          lineHeight='6'
          _light={{
            color: 'gray.900',
          }}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          color='gray.500'
          _dark={{
            color: 'gray.400',
          }}
        >
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
}
