import {
  Box, Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';

export const TalksForm = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={6} borderRadius="xl" textAlign="left" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={4}>
          Add New Talk
        </Heading>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input />
          <FormHelperText>Talk title.</FormHelperText>
        </FormControl>
        <FormControl id="url">
          <FormLabel>Talk URL</FormLabel>
          <Input type="url" />
          <FormHelperText>YouTube URL to the talk video.</FormHelperText>
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