import { useState } from 'react';

import { createClient } from '../../services/clients';
import { useToast } from '@chakra-ui/react';

export function useCreateClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const toast = useToast();

  async function createNewClient(name: string, email: string, phone: string) {
    setIsLoading(true);
    return await createClient(name, email, phone)
      .then((response) => {
        toast({
          title: 'Cliente Criado',
          description: 'Cliente Criado com sucesso',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        return response;
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }

  return { createNewClient, isLoading, hasError };
}
