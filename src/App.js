import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import { Logo } from './components/Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              TEDxDrewUniversity website is currently in development.
            </Text>
            <Link
              color="blue.800"
              href="https://www.drew.edu/"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drew University
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
