import { useState } from 'react';

import { fetchClientList } from '../../services/clients';

export function useFetchClientList() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  async function getClientList() {
    setIsLoading(true);
    return await fetchClientList()
      .then((response) => response)
      .catch((error) => {
        setHasError(true);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }

  return { getClientList, isLoading, hasError };
}
