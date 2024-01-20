import { useState } from 'react';

import { createClient } from '../../services/clients';

export function useCreateClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function createNewClient(name: string, email: string, phone: string) {
    setIsLoading(true);
    return await createClient(name, email, phone)
      .then((response) => response)
      .catch((error) => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }

  return { createNewClient, isLoading, hasError };
}
