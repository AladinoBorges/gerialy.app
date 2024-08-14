import { BaseComponentPropTypes } from '@/types/generic';
import { FormControl, FormErrorMessage, FormHelperText, FormLabel } from '@chakra-ui/react';

export function FormControlWithLabel({
  label,
  children,
  helperText,
  isRequired,
  errorMessage,
  ...props
}: PropTypes) {
  return (
    <FormControl isRequired={isRequired} isInvalid={!!errorMessage?.trim()} {...props}>
      <FormLabel>{label}</FormLabel>

      {children}

      {!!helperText?.trim() && !errorMessage?.trim() ? (
        <FormHelperText>{helperText}</FormHelperText>
      ) : null}

      {!!errorMessage?.trim() ? <FormErrorMessage>{errorMessage}</FormErrorMessage> : null}
    </FormControl>
  );
}

interface PropTypes extends BaseComponentPropTypes {
  label: string;
  helperText?: string;
  isRequired?: boolean;
  errorMessage?: string;
  display?: string;
}
