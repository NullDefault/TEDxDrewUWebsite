import { Box, Heading, Link, useColorModeValue, VStack } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';

export const SuccessPage = (props) => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg="primary.600" color={color} {...props}>
      <VStack  py='12vmin' minH="100vh" textAlign="center">
        <Heading as="h1" size="4xl" color={tedxRed} pb={12} px={4}>
          We successfully received your submission!
        </Heading>
        <Link href="/" fontSize="2xl" mt="5%" color={tedxRed}>
          Go to Home Page
        </Link>
      </VStack>
    </Box>
  )
}