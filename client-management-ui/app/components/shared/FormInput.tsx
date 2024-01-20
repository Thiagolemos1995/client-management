import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/react';

interface FormInputProps extends InputProps {
  label: string;
}

export default function FormInput({ label, ...rest }: FormInputProps) {
  return (
    <FormControl>
      {label && <FormLabel fontSize="sm">{label}</FormLabel>}
      <Input {...rest} />
    </FormControl>
  );
}
