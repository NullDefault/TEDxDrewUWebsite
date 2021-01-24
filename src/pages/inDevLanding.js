import { Box, Grid, Link, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Logo } from '../components/Logo';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React from 'react';

export const InDevLanding = () => {

  const bg = useColorModeValue("red.500", "red.100");
  const color = useColorModeValue("white", "gray.800");


  return (
    <Box textAlign="center" fontSize="xl" bg={bg} color={color}>
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
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