import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Grid,
  theme
} from '@chakra-ui/react';
import {ExternalLinkIcon} from '@chakra-ui/icons';
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
              This website is currently under development.
            </Text>
            <Link
              color="blue.800"
              href="https://www.drew.edu/"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Drew University <ExternalLinkIcon mx="4px" />
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
