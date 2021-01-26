import { Box, Grid, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { Logo } from '../components/Logo';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const Landing = () => {
  const color = useColorModeValue("black", "white");

  return (
    <Box textAlign="center" fontSize="xl" bg="primary.600" color={color}>
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            This website is currently under development.
          </Text>
          <Link
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
  );
};