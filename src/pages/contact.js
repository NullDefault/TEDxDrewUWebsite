import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { validateEmail } from '../utils/validateEmail';
import { useState } from 'react';
import { db } from '../firebase';
import { useHistory } from 'react-router-dom';

export const Contact = () => {
  const color = useColorModeValue('black', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const postMessage = () => {
    onClose();
    db.collection('messages').add({
      name: name,
      pronouns: pronouns,
      email: email,
      message: message,
      sentAt: new Date(Date.now()),
    }).then(function(docRef) {
      console.log(docRef);
      history.push('/success');
    }).catch(function(error) {
      console.error(error);
      history.push('/error');
    });

    setName('');
    setPronouns('');
    setEmail('');
    setMessage('');
  };

  const openModal = () => {
    if (name === '' || pronouns === '' || !validateEmail(email) || message === '') {
      // do nothing
    } else {
      onOpen();
    }
  };

  const cancel = () => {
    onClose();
  };

  return (
    <Box textAlign="left" bg="primary.600" color={color}>
      <VStack py='12vmin' mx='auto' w={['80%', '60%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={12}>
          Get in touch with us
        </Heading>
        <HStack w="100%">
          <FormControl id="name" isInvalid={name === ''}>
            <FormLabel>Name</FormLabel>
            <Input value={name} onChange={e => setName(e.currentTarget.value)} />
            <FormHelperText>How you like to be called.</FormHelperText>
          </FormControl>
          <FormControl id="pronouns" isInvalid={pronouns === ''}>
            <FormLabel>Pronouns</FormLabel>
            <Input value={pronouns} onChange={e => setPronouns(e.currentTarget.value)} />
            <FormHelperText>Your preferred pronouns.</FormHelperText>
          </FormControl>
        </HStack>
        <FormControl id="email" validate={validateEmail}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="message" pb={8}>
          <FormLabel>Your Message</FormLabel>
          <Textarea placeholder="Your message to us" value={message}
                    onChange={e => setMessage(e.currentTarget.value)} />
        </FormControl>
        <Button
          loadingText="Submitting"
          colorScheme="red"
          variant="solid"
          size="lg"
          onClick={() => {
            openModal();
          }}
        >
          Submit
        </Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Please confirm you would like to send the following message
            <UnorderedList ml='12%' mt='4%'>
              <ListItem>
                Name: {name} ({pronouns})
              </ListItem>
              <ListItem>
                Email: {email}
              </ListItem>
              <ListItem>
                Message: <p>{message}</p>
              </ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={postMessage}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={cancel}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};