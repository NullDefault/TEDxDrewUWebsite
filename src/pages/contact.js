import {
  Box,
  useColorModeValue,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea, Heading,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';

export const Contact = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box textAlign="left" bg="primary.600" color={color}>
      <VStack py='12vmin' mx='auto' w={['80%', '60%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={12}>
          Get in touch with us
        </Heading>
        <HStack w="100%">
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="name" />
            <FormHelperText>How you like to be called.</FormHelperText>
          </FormControl>
          <FormControl id="pronouns">
            <FormLabel>Pronouns</FormLabel>
            <Input type="pronouns" />
            <FormHelperText>Your preferred pronouns.</FormHelperText>
          </FormControl>
        </HStack>
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="message" pb={8}>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Your message to us" />
        </FormControl>
        <Button
          loadingText="Submitting"
          colorScheme="red"
          variant="solid"
          size="lg"
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};