import { Box, Center, Text, VStack, Image, Link, useColorModeValue } from '@chakra-ui/react';
import pnfArt from '../assets/WebP/404art.webp';

export const PageNotFound = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box minH="100vh" bg="primary.500" color={color}>
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