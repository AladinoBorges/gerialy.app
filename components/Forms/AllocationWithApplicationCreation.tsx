import { calculator } from '@/services/calculator';
import gerapi from '@/services/geriapi';
import { AllocationStatusEnum, AllocationType } from '@/types/allocation';
import { ApplicantType, ReadApplicantType } from '@/types/applicant';
import { ApplicationType } from '@/types/application';
import { FormChangeEventHandlerType } from '@/types/generic';
import { ReadUserType } from '@/types/user';
import { Box, Button, Flex, Heading, Input, Switch, Textarea, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FormControlWithLabel } from './ControlWithLabel';

interface PropTypes {
  token: string;
  user: ReadUserType;
  userType: ReadApplicantType;
}

const INITIAL_ALLOCATIOM_VALUE = {
  applicationURL: '',
  automaticClosingDate: calculator?.addDays(60, new Date()),
  description: '',
  isPublic: false,
  isRemote: false,
  name: '',
  openPositions: 1,
  status: AllocationStatusEnum.active,
};

export function AllocationWithApplicationCreationForm({ user, userType, token }: PropTypes) {
  const [isLoading, setIsLoading] = useState(false);
  const [allocationData, setAllocationData] = useState<AllocationType>(INITIAL_ALLOCATIOM_VALUE);

  const toast = useToast();
  const router = useRouter();

  const handleSwitchChange = () => {
    setAllocationData((previousValues) => ({
      ...previousValues,
      isRemote: !previousValues.isRemote,
    }));
  };

  const handleInputChange: FormChangeEventHandlerType = (event) => {
    const { name, value } = event.currentTarget;

    setAllocationData((previousValues) => ({ ...previousValues, [name]: value }));
  };

  // ? CRUD - start
  const generateArtificialIntelligenceAnalysis = async (
    allocation: AllocationType,
    application: ApplicationType,
    applicant: ApplicantType | null,
  ) => {
    const API_URL = `${process.env.NEXT_PUBLIC_API_ULR}/api/analysis`;
    const MUTATION_DATA = { allocation, application, applicant, creator: user };

    const analysis = await gerapi.mutate(API_URL, MUTATION_DATA, token);

    return analysis;
  };
  // ? CRUD - end

  const handleSubmission = async () => {
    try {
      setIsLoading(true);

      const processStages = allocationData?.recruitmentStages;

      const applicationData = {
        applicantName: user?.name,
        applicantEmail: user?.email,
        analysisDate: new Date(),
        ...(!!processStages?.length
          ? {
              process: processStages?.map((stageItem) => {
                return { stage: stageItem?.name, status: null };
              }),
            }
          : {}),
      };

      const applicantData = {
        user: user?.id,
        name: user?.name,
        email: user?.email,
      };

      const newAnalysis = await generateArtificialIntelligenceAnalysis(
        allocationData,
        applicationData,
        applicantData,
      );

      if (newAnalysis?.id) {
        router.push(`/dashboard/analysis/${newAnalysis?.id}`);

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

      <Flex width='100%' direction={{ sm: 'column', md: 'row' }} gap='2rem' align='flex-end'>
        <FormControlWithLabel isRequired label='nome da vaga'>
          <Input
            type='text'
            name='name'
            value={allocationData.name}
            onChange={handleInputChange}
            placeholder='desenvolvedor de parafusos sênior | remoto'
          />
        </FormControlWithLabel>

        <Box minWidth='fit-content' maxWidth='40%'>
          <FormControlWithLabel label='vaga remota?' display='flex'>
            <Switch
              name='applicationURL'
              onChange={handleSwitchChange}
              isChecked={allocationData.isRemote}
            />
          </FormControlWithLabel>
        </Box>
      </Flex>

      <FormControlWithLabel isRequired label='descrição'>
        <Textarea
          resize='none'
          height='25rem'
          name='description'
          onChange={handleInputChange}
          value={allocationData.description}
          placeholder='detalhes sobre a vaga...'
        />
      </FormControlWithLabel>

      <Flex width='100%' direction={{ sm: 'column', md: 'row' }} gap='2rem'>
        <FormControlWithLabel isRequired label='empresa'>
          <Input
            type='text'
            name='company'
            onChange={handleInputChange}
            value={allocationData.applicationURL}
            placeholder='stark industries'
          />
        </FormControlWithLabel>

        <FormControlWithLabel isRequired label='link de candidaturas'>
          <Input
            type='text'
            name='applicationURL'
            onChange={handleInputChange}
            value={allocationData.applicationURL}
            placeholder='https://vaganova.com/candidar'
          />
        </FormControlWithLabel>
      </Flex>

      <Button isLoading={isLoading} onClick={handleSubmission}>
        analisar
      </Button>
    </Flex>
  );
}
