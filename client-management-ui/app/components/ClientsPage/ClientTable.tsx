'use client';

import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Client } from '../../Models/interfaces';

interface ClientTableProps {
  clientList: Client[];
}

const clientTableHeader = [
  { title: 'Nome' },
  { title: 'E-mail' },
  { title: 'Telefone' },
];

export default function ClientTable({ clientList }: ClientTableProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            {clientTableHeader.map((head, index) => (
              <Th key={index}>{head.title}</Th>
            ))}
          </Tr>
        </Thead>
        {clientList ? (
          <Tbody>
            {clientList.map((client, index) => (
              <Tr key={index}>
                <Td>{client.name}</Td>
                <Td>{client.email}</Td>
                <Td> {client.phone}</Td>
              </Tr>
            ))}
          </Tbody>
        ) : (
          <TableCaption>Não há nenhum cliente cadastrado</TableCaption>
        )}
      </Table>
    </TableContainer>
  );
}
