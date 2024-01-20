'use client';
import { useState } from 'react';

import { AddIcon, WarningTwoIcon } from '@chakra-ui/icons';
import {
  Icon,
  Text,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Flex,
  Spinner,
} from '@chakra-ui/react';
import FormInput from '../shared/FormInput';
import { useCreateClient } from '../../../hooks/clients/useCreateClient';

export function CreateClient() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { createNewClient, hasError, isLoading } = useCreateClient();

  async function handleCreateClient() {
    await createNewClient(name, email, phone);
    onClose();
  }

  return (
    <>
      <Button
        h="100%"
        bgColor="white"
        borderRadius="6px"
        _hover={{
          bgColor: '#201928',
          color: 'white',
        }}
        onClick={onOpen}
      >
        <VStack p="10px" justifyContent="center" alignItems="center">
          <Icon as={AddIcon} color="#503F63" />

          <Text>Criar Cliente</Text>
        </VStack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading && !hasError ? (
              <VStack my="auto" w="100%">
                <Spinner thickness="8px" w={40} h={40} color="#503F63" />
              </VStack>
            ) : !isLoading && hasError ? (
              <VStack>
                <Icon w={40} h={40} as={WarningTwoIcon} color="#503F63" />
                <Text>Desculpe, ocorreu um erro ao criar esse cliente</Text>
              </VStack>
            ) : (
              <Flex flexDir="column" gap={10}>
                <FormInput
                  label="Nome"
                  onInput={(ev) =>
                    setName((ev.target as HTMLInputElement).value)
                  }
                />
                <FormInput
                  label="E-mail"
                  onInput={(ev) =>
                    setEmail((ev.target as HTMLInputElement).value)
                  }
                />
                <FormInput
                  label="Telefone"
                  onInput={(ev) =>
                    setPhone((ev.target as HTMLInputElement).value)
                  }
                />
              </Flex>
            )}
          </ModalBody>

          {!isLoading && !hasError && (
            <ModalFooter>
              <Button
                w="full"
                variant="ghost"
                colorScheme="purple"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                w="full"
                bgColor="#503F63"
                _hover={{
                  bgColor: '#201928',
                }}
                color="white"
                onClick={handleCreateClient}
              >
                Criar
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
