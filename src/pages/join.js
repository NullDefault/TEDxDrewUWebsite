import {
  Box,
  useColorModeValue,
  VStack,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  FormHelperText,
  Select,
  Textarea,
  Stack,
  Heading,
  CheckboxGroup,
  Checkbox,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';

export const JoinUs = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box align="center" bg="primary.600" color={color}>
      <VStack py='12vmin' mx='auto' w={['80%', '60%']} minH="100vh" spacing={8}>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Join Our Team
        </Heading>
        <Text pb={12} px={6}>
          We are looking for fun, hardworking individuals with strong communication and teamwork skills to join us in
          planning our biggest annual conference.
          Applicants should be ready for weekly team meetings and a commitment of between 1 to 4 hours of work per week,
          depending on your team, as well as our proximity to major events.
        </Text>
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
          <FormLabel>Email address </FormLabel>
          <Input type="email" placeholder="yourEmail@drew.edu" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="year">
          <FormLabel>Current year standing</FormLabel>
          <Select placeholder="Choose one">
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="graduate">Graduate</option>
          </Select>
        </FormControl>
        <FormControl id="teamInterest">
          <FormLabel>What teams are you interested in?</FormLabel>
          <CheckboxGroup colorScheme="red">
            <Stack direction={['column', 'row']}>
              <Checkbox value="creative">Creative</Checkbox>
              <Checkbox value="marketing">Marketing</Checkbox>
              <Checkbox value="curation">Curation</Checkbox>
              <Checkbox value="technical">Production</Checkbox>
              <Checkbox value="logistics">Logistics</Checkbox>
              <Checkbox value="finance">Finance</Checkbox>
            </Stack>
          </CheckboxGroup>
        </FormControl>
        <FormControl id="introduction">
          <FormLabel>Introduce yourself!</FormLabel>
          <Textarea />
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