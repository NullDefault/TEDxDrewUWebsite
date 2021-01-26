import { Box, Center, Text, VStack, Image, Link, useColorModeValue } from '@chakra-ui/react';
import fourOhFourArt from '../assets/SVG/404.svg';
import { tedxRed } from '../utils/tedxColors';

export const PageNotFound = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box minH="100vh" bg="primary.500" color={color}>
      <Center>
        <VStack textAlign='center'>
          <Image src={fourOhFourArt} pt="15%" w={'60vmin'} />
          <Text fontSize="48px">
            Sorry, Page Not Found
          </Text>
          <Link href="/" fontSize="2xl" pt="5%" color={tedxRed}>
            Go to Home Page
          </Link>
        </VStack>
      </Center>
    </Box>
  );
};