'use client';

import { SearchIcon } from '@chakra-ui/icons';
import { Card, CardBody, Flex, IconButton } from '@chakra-ui/react';
import FormInput from '../shared/FormInput';

export default function ClientListFilter() {
  return (
    <Card w="100%">
      <CardBody>
        <Flex>
          <FormInput label="Nome" />

          <IconButton
            mt="auto"
            color="#503F63"
            _hover={{
              bgColor: '#201928',
              color: 'white',
            }}
            aria-label="search"
            icon={<SearchIcon />}
            variant="outline"
          />
        </Flex>
      </CardBody>
    </Card>
  );
}
