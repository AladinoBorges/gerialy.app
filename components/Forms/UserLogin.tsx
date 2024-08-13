import { FormChangeEventHandlerType } from '@/types/generic';
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { FormControlWithLabel } from './ControlWithLabel';

const FORM_INITIAL_VALUES = { email: '', password: '' };

export function UserLoginForm({ role }: PropTypes) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<LoginDataType>(FORM_INITIAL_VALUES);

  const handleInputChange: FormChangeEventHandlerType = (event) => {
    const { name, value } = event.currentTarget;

    setData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleUserRegistration = async (data: FormData) => {
    'use server';

    try {
      setIsLoading(true);

      const mutationResult = await data;
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form action={handleUserRegistration}>
      <FormControlWithLabel isRequired label='email'>
        <Input type='email' placeholder='meuemail@google.com' onChange={handleInputChange} />
      </FormControlWithLabel>

      <FormControlWithLabel isRequired label='senha'>
        <Input type='password' placeholder='**********' />
      </FormControlWithLabel>

      <Button isLoading={isLoading} type='submit'>
        iniciar sessão
      </Button>
    </form>
  );
}

interface LoginDataType {
  email: string;
  password: string;
}

interface PropTypes {
  role: string;
}
