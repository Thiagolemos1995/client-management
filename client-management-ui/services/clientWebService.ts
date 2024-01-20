import axios from 'axios';

export function clientWebService() {
  const clientServiceInstance = axios.create({
    baseURL:
      process.env.NEXT_PUBLIC_CLIENT_SERVICE_URL || 'http://localhost:3000',
    timeout: 10000,
  });

  return clientServiceInstance;
}
