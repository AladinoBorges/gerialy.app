import { session } from '@/services/session';
import { FormChangeEventHandlerType } from '@/types/generic';
import { LoginPayloadType } from '@/types/session';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MouseEventHandler, useState } from 'react';
import { FormControlWithLabel } from './ControlWithLabel';

const FORM_INITIAL_VALUES = { identifier: '', password: '' };

export function UserLoginForm() {
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

      const redirectURL = await session.login(formData);

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
    <form style={{ width: '100%', maxWidth: '500px' }}>
      <Flex
        gap='2rem'
        width='100%'
        rounded='lg'
        boxShadow='md'
        direction='column'
        padding='4rem 4rem 8rem 4rem'
      >
        <Flex direction='column' align='center' paddingBottom='1rem' gap='0.5rem' width='100%'>
          <Link href={`${process.env.NEXT_PUBLIC_LANDING_PAGE}`}>
            <Image
              priority
              width={135}
              height={42.5}
              alt='gerialy beta logo'
              src='/gia_beta_logo.png'
            />
          </Link>

          <Text cursor='default' textAlign='center'>
            {"inteligência p'ra quem gere e quem busca."}
          </Text>
        </Flex>

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
      </Flex>
    </form>
  );
}

interface PropTypes {
  role: string;
}
