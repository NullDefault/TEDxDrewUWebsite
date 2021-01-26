import {
  Box,
  useColorModeValue,
  Heading, VStack
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { VideoCard } from '../components/VideoCard';

export const Talks = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg="primary.600" textAlign="center" color={color}>
      <VStack spacing={24} pb="48px" mx='auto'>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Past Talks
        </Heading>
        <VideoCard
          title={'How \'traveling like a local\' can help cities fight overtourism | Janek Rubes'}
          url={'https://www.youtube.com/watch?v=36A5bOSP334'}
        />
        <VideoCard
          title={'Take a Deep Breath... | Laurel Kearns'}
          url={'https://www.youtube.com/watch?v=YRu0VUHoxSg'}
        />
        <VideoCard
          title={'Colonies of change | Olivia Blondheim'}
          url={'https://www.youtube.com/watch?v=UZShktU009Y'}
        />
      </VStack>
    </Box>
  );
};
