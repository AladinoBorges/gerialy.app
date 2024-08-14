import { AllocationType } from '@/types/allocation';
import { ApplicationType } from '@/types/application';
import { FormChangeEventHandlerType } from '@/types/generic';
import { Box, Button, Flex, Heading, Input, Switch, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { FormControlWithLabel } from './ControlWithLabel';

const INITIAL_ALLOCATIOM_VALUE = {
  name: '',
  isPublic: false,
  applicationURL: '',
  openPositions: 1,
  status: 'active',
  isRemote: false,
  description: '',
};

export function AllocationWithApplicationCreationForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [applicationData, setApplicationData] = useState<{}>({});
  const [allocationData, setAllocationData] = useState(INITIAL_ALLOCATIOM_VALUE);

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
  const createAllocation = async (data: AllocationType) => {};

  const createA = async (data: ApplicationType) => {};
  // ? CRUD - end

  const handleSubmission = async () => {
    try {
      setIsLoading(true);
    } catch (error) {
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
