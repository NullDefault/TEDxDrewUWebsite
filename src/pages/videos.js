import {
  Box,
  useColorModeValue,
  Heading, VStack, Container, Center } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { tedxRed } from '../utils/tedxColors';

export const Videos = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg="primary.600" textAlign="center" color={color}>
      <VStack spacing={24} pb="48px" mx='auto'>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Video Gallery
        </Heading>
        <Center w='100%'>
          <Container>
            <Heading as="h3" size="lg" textAlign="left" pb="12px">
              TEDx Drew University 2020 -<br/> Solve for X
            </Heading>
            <ReactPlayer
              width='100%'
              controls='true'
              url='https://www.youtube.com/watch?v=M_Ei_AmQDEs' />
          </Container>
        </Center>
        <Center w='100%'>
          <Container>
            <Heading as="h3" size="lg" textAlign="left" pb="12px">
              TEDx Drew University 2019 -<br/> The Nature of Being
            </Heading>
            <ReactPlayer
              width='100%'
              controls='true'
              url='https://www.youtube.com/watch?v=uQ4GTVLGi9k' />
          </Container>
        </Center>
      </VStack>
    </Box>
  );
};
