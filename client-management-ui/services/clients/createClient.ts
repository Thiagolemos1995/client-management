import { clientWebService } from '../clientWebService';

export async function createClient(name: string, email: string, phone: string) {
  const clientService = clientWebService();

  const createClient = clientService
    .post('/clients', {
      name,
      email,
      phone,
    })
    .then((response) => response.data);

  return createClient;
}
