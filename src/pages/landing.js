import { Box, Grid, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { Logo } from '../components/Logo';
import { tedxRed } from '../utils/tedxColors';

export const Landing = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box textAlign="center" fontSize="xl" bg="primary" color={color}>
      <Grid minH="100vh" p={3}>
        <VStack spacing={4}>
          <Logo h="40vmin" pointerEvents="none" />
          <Heading as="h1" size="2xl" color={tedxRed} pb={12}>
            Coming Soon
          </Heading>
        </VStack>
      </Grid>
    </Box>
  );
};