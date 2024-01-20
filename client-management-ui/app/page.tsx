'use client';

import { Flex } from '@chakra-ui/react';
import MainSection from './components/HomePage/MainSection';

export default async function Index() {
  return (
    <Flex
      flexDir="column"
      h="calc(100vh - 60px)"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to-r,  #372C44, #AC8AD8, #372C44,)"
    >
      <MainSection />
    </Flex>
  );
}
