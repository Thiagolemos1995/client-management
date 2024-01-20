import { clientWebService } from '../clientWebService';

export async function fetchClientList() {
  const clientService = clientWebService();

  const clientList = clientService
    .get('/clients')
    .then((response) => response.data);

  return clientList;
}
