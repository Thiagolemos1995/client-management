'use client';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Fade,
  Image,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function MainSection() {
  const router = useRouter();

  return (
    <Card maxW={{ sm: '250px', md: '400px' }} height="90%">
      <Fade in transition={{ enter: { duration: 1 } }}>
        <CardHeader>
          <Text fontSize="1.5rem" fontWeight="bold" textAlign="center">
            Olá! Bem vindo ao sistema de gestão de clientes da Company LTDA.
          </Text>
        </CardHeader>
        <CardBody>
          <Text fontWeight="medium" textAlign="center">
            Aqui será possível fazer a gestão de todos seus clientes
          </Text>

          <Image
            alt="client-management"
            src="/222cfb46c69e26f0192cd22078b1c617.png"
            width={'100%'}
            height={'100%'}
          />
        </CardBody>

        <CardFooter>
          <Button
            bgColor="#503F63"
            _hover={{
              bgColor: '#201928',
            }}
            color="white"
            w="100%"
            onClick={() => router.push('/clients')}
          >
            Ir para gestão de clientes
          </Button>
        </CardFooter>
      </Fade>
    </Card>
  );
}
