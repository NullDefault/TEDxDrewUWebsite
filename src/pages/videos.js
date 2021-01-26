import {
  Box,
  useColorModeValue,
  Heading, VStack
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { VideoCard } from '../components/VideoCard';

export const Videos = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg="primary.600" textAlign="center" color={color}>
      <VStack spacing={24} py='12vmin' mx='auto'>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Video Gallery
        </Heading>
        <VideoCard
          title={"TEDx Drew University 2020 - Solve for X"}
          url={"https://www.youtube.com/watch?v=M_Ei_AmQDEs"}/>
        <VideoCard
          title={"TEDx Drew University 2019 - The Nature of Being"}
          url={"https://www.youtube.com/watch?v=uQ4GTVLGi9k"}/>
      </VStack>
    </Box>
  );
};
