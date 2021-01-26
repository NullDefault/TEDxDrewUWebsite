import {
  Box,
  useColorModeValue,
  Heading, VStack, Container, Center } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { tedxRed } from '../utils/tedxColors';

export const Talks = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg="primary.600" textAlign="center" color={color}>
      <VStack spacing={24} pb="48px" mx='auto'>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Past Talks
        </Heading>
        <Center w='100%'>
          <Container>
            <Heading as="h3" size="lg" textAlign="left" pb="12px">
              How 'traveling like a local' can help cities fight overtourism | Janek Rubes
            </Heading>
            <ReactPlayer
              width='100%'
              controls='true'
              url='https://www.youtube.com/watch?v=36A5bOSP334' />
          </Container>
        </Center>
        <Center w='100%'>
          <Container>
            <Heading as="h3" size="lg" textAlign="left" pb="12px">
              Take a Deep Breath... | Laurel Kearns
            </Heading>
            <ReactPlayer
              width='100%'
              controls='true'
              url='https://www.youtube.com/watch?v=YRu0VUHoxSg' />
          </Container>
        </Center>
        <Center w='100%'>
          <Container>
            <Heading as="h3" size="lg" textAlign="left" pb="12px">
              Colonies of change | Olivia Blondheim
            </Heading>
            <ReactPlayer
              width='100%'
              controls='true'
              url='https://www.youtube.com/watch?v=UZShktU009Y' />
          </Container>
        </Center>
      </VStack>
    </Box>
  );
};
