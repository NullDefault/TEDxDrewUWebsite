import { Box, Center, Text, VStack, Image, Link } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import pnfArt from '../assets/WebP/404art.webp';
import React from 'react';

export const PageNotFound = () => {
  return (
    <Box minH="100vh" bg={tedxRed} color="white">
      <Center>
        <VStack>
          <Image src={pnfArt} pt="25%" w={'50vmin'} />
          <Text fontSize="64px">
            404
          </Text>
          <Text fontSize="36px">
            Page Not Found
          </Text>
          <Link href="/" fontSize="2xl">
            Go to Home Page
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};