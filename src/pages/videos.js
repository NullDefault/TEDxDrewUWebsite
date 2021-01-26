import { Box, useColorModeValue, Grid, Text, Heading, Link } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

export const Videos = () => {
  const color = useColorModeValue('black', 'white');
  const linkColor = useColorModeValue('blue.600', 'blue.200');

  return (
    <Box textAlign="left" fontSize="xl" bg="primary.600" color={color}>
      <Grid minH="100vh" py='12vmin' px='10vmin'>
        <Heading as="h1" size="3xl">
          TEDx at Drew University on previous years
        </Heading>
        <Heading as="h3" size="lg" pt='10vmin'>
          TEDx Drew University 2020 - Solve for X
        </Heading>
        <Text>
          <ReactPlayer url='https://www.youtube.com/watch?v=M_Ei_AmQDEs'></ReactPlayer>
        </Text>
        <Heading as="h3" size="lg" pt='10vmin'>
          TEDx Drew University 2019 - The Nature of Being
        </Heading>
        <Text>
          <ReactPlayer url='https://www.youtube.com/watch?v=uQ4GTVLGi9k'></ReactPlayer>
        </Text>
      </Grid>
    </Box>
  );
};
