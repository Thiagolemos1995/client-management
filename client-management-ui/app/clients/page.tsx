import { Card, CardBody, Flex, Text } from '@chakra-ui/react';
import { fetchClientList } from '../../services/clients';
import { Client } from '../Models/interfaces';
import ClientTable from '../components/ClientsPage/ClientTable';
import ClientListFilter from '../components/ClientsPage/ClientListFilter';
import { CreateClient } from '../components/ClientsPage/CreateClient';

async function getClientList() {
  return await fetchClientList()
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
}

export default async function ClientsPage() {
  const clientList: Client[] = await getClientList();

  return (
    <Flex
      flexDir="column"
      h="calc(100vh - 60px)"
      w="100vw"
      bgGradient="#c1c1c1"
    >
      <Flex flexDir="column" px="50px" py="30px" gap="1rem">
        <Text fontSize="1.5rem" fontWeight="bold" color="white">
          Lista de Clientes
        </Text>

        <Flex justifyContent="space-between" gap="15">
          <ClientListFilter />
          <CreateClient />
        </Flex>

        <Card>
          <CardBody>
            <ClientTable clientList={clientList} />
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
}
