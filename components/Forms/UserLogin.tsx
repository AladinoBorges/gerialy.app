import { session } from '@/services/session';
import { FormChangeEventHandlerType } from '@/types/generic';
import { LoginPayloadType } from '@/types/session';
import { Button, Input } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useState } from 'react';
import { FormControlWithLabel } from './ControlWithLabel';

const FORM_INITIAL_VALUES = { identifier: '', password: '' };

export function UserLoginForm({ role }: PropTypes) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginPayloadType>(FORM_INITIAL_VALUES);

  const router = useRouter();

  const handleInputChange: FormChangeEventHandlerType = (event) => {
    const { name, value } = event.currentTarget;

    setFormData((previousFormData) => ({ ...previousFormData, [name]: value }));
  };

  const handleUserLogin: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      setIsLoading(true);

      const redirectURL = await session.login(formData, role);

      if (!redirectURL) {
        return;
      }

      router.push(redirectURL);
    } catch (error) {
      console.error('[FORMS COMPONENTS - USER LOGIN]: handleUserLogin', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form>
      <FormControlWithLabel isRequired label='email'>
        <Input
          type='email'
          name='identifier'
          value={formData.identifier}
          onChange={handleInputChange}
          placeholder='meuemail@google.com'
        />
      </FormControlWithLabel>

      <FormControlWithLabel isRequired label='senha'>
        <Input
          type='password'
          name='password'
          placeholder='**********'
          value={formData.password}
          onChange={handleInputChange}
        />
      </FormControlWithLabel>

      <Button isLoading={isLoading} onClick={handleUserLogin}>
        iniciar sessão
      </Button>
    </form>
  );
}

interface PropTypes {
  role: string;
}
