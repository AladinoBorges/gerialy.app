import { calculator } from '@/services/calculator';
import geriapi from '@/services/geriapi';
import { openAIMessages } from '@/services/gia';
import { AllocationType } from '@/types/allocation';
import { ReadApplicantType } from '@/types/applicant';
import { ApplicationType } from '@/types/application';
import { ArtificialIntelligencePromptType } from '@/types/gia';
import { ReadUserType } from '@/types/user';
import { Box, Button, Flex, Heading, Input, Switch, Textarea, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FormControlWithLabel } from './ControlWithLabel';

interface PropTypes {
  token?: string;
  user?: ReadUserType;
  applicant?: ReadApplicantType;
}

export function AllocationWithApplicationCreationForm({ user, applicant, token }: PropTypes) {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<AllocationType>({
    defaultValues: {
      applicationURL: '',
      automaticClosingDate: calculator?.addDays(60, new Date()),
      description: '',
      isPublic: false,
      isRemote: false,
      name: '',
      openPositions: 1,
    },
  });

  // ? CRUD - start
  const generateArtificialIntelligenceAnalysis = async (
    allocation: AllocationType,
    application: ApplicationType,
    artificialIntelligencePrompt: ArtificialIntelligencePromptType[],
  ) => {
    const ALLOCATION_ENDPOINT = `allocations`;
    const APPLICATION_ANALYSIS_ENDPOINT = `gia/application-analysis`;

    const newAllocation = await geriapi.mutate(
      ALLOCATION_ENDPOINT,
      { ...allocation, creator: user?.id },
      token,
    );

    let newAnalysis = null;

    if (!!newAllocation?.id) {
      newAnalysis = await geriapi.mutate(
        APPLICATION_ANALYSIS_ENDPOINT,
        {
          aiMessages: artificialIntelligencePrompt,
          application: { ...application, allocation: newAllocation?.id },
        },
        token,
      );
    }

    return newAnalysis;
  };
  // ? CRUD - end

  const handleSubmission: SubmitHandler<AllocationType> = async (allocation) => {
    try {
      setIsLoading(true);

      const processStages = allocation?.recruitmentStages;

      const applicationData = {
        applicantName: user?.name,
        applicantEmail: user?.email,
        applicant: applicant?.id,
        ...(!!processStages?.length
          ? {
              process: processStages?.map((stageItem) => {
                return { stage: stageItem?.name, status: null };
              }),
            }
          : {}),
      };

      const artificialIntelligencePrompt = openAIMessages.applicationAnalysis(
        `${allocation?.name}\n${allocation?.description}`,
        applicant?.curricula?.find((curriculumItem) => curriculumItem?.isActive)?.content as string,
      );

      const newAnalysis = await generateArtificialIntelligenceAnalysis(
        allocation,
        applicationData,
        artificialIntelligencePrompt,
      );

      if (newAnalysis?.id) {
        router.push(`/dashboard/application/${newAnalysis?.id}`);

        return;
      }

      toast({
        duration: 5000,
        status: 'error',
        isClosable: true,
        title: 'Erro ao analizar a sua candidatura.',
        description: 'Os dados foram guardados, tente analisar novamente mais tarde.',
      });
    } catch (error) {
      console.error('[ALLOCATION WITH APPLICATION CREATION]: handleSubmission ', error);

      toast({
        duration: 5000,
        status: 'error',
        isClosable: true,
        title: 'Aconteceu um erro no nosso servidor.',
        description: 'Tente analisar novamente mais tarde.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Flex direction='column' gap='2rem' width='100%'>
      <Heading>analisar nova vaga</Heading>

      <form onSubmit={handleSubmit(handleSubmission)}>
        <Flex width='100%' gap='2rem' direction='column'>
          <Flex
            width='100%'
            gap={{ base: '0.5rem', md: '2rem' }}
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'flex-start', md: 'flex-end' }}
          >
            <Controller
              name='name'
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <FormControlWithLabel
                  isRequired
                  label='nome da vaga'
                  errorMessage={formErrors[name]?.message}
                >
                  <Input
                    type='text'
                    value={value}
                    onChange={onChange}
                    placeholder='desenvolvedor de parafusos sênior | remoto'
                  />
                </FormControlWithLabel>
              )}
            />

            <Box minWidth='fit-content' maxWidth='40%'>
              <Controller
                name='isRemote'
                control={control}
                render={({ field: { onChange, value, name } }) => (
                  <FormControlWithLabel
                    display='flex'
                    label='vaga remota?'
                    errorMessage={formErrors[name]?.message}
                  >
                    <Switch onChange={onChange} isChecked={value} />
                  </FormControlWithLabel>
                )}
              />
            </Box>
          </Flex>

          <Controller
            control={control}
            name='description'
            render={({ field: { onChange, value, name } }) => (
              <FormControlWithLabel
                isRequired
                label='descrição'
                errorMessage={formErrors[name]?.message}
              >
                <Textarea
                  resize='none'
                  value={value}
                  onChange={onChange}
                  placeholder='detalhes sobre a vaga...'
                  height={{ base: '18rem', md: '25rem' }}
                />
              </FormControlWithLabel>
            )}
          />

          <Flex width='100%' direction={{ base: 'column', md: 'row' }} gap='2rem'>
            <Controller
              name='company'
              control={control}
              render={({ field: { onChange, value, name } }) => (
                <FormControlWithLabel
                  isRequired
                  label='empresa'
                  errorMessage={formErrors[name]?.message}
                >
                  <Input
                    type='text'
                    value={value}
                    onChange={onChange}
                    placeholder='stark industries'
                  />
                </FormControlWithLabel>
              )}
            />

            <Controller
              control={control}
              name='applicationURL'
              render={({ field: { onChange, value, name } }) => (
                <FormControlWithLabel
                  isRequired
                  label='link de candidaturas'
                  errorMessage={formErrors[name]?.message}
                >
                  <Input
                    type='text'
                    value={value}
                    onChange={onChange}
                    placeholder='https://vaganova.com/candidar'
                  />
                </FormControlWithLabel>
              )}
            />
          </Flex>

          <Button isLoading={isLoading} type='submit' width='100%'>
            analisar
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
