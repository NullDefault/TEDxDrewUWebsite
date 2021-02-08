import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Heading,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { useState } from 'react';
import { db } from '../../firebase';
import { FirebaseDocumentList } from './FirebaseDocumentList';

export const SponsorInterface = () => {
  const color = useColorModeValue('black', 'white');
  const [status, setStatus] = useState(<div />);
  const [refreshTrigger, updateTrigger] = useState(0);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const postSponsor = () => {
    onClose();
    db.collection('sponsors').add({
      title: title,
      url: url,
    }).then(function(docRef) {
      let successAlert = <Alert status="success">
        <AlertIcon />
        Sponsor document created with ID: {docRef.id}
      </Alert>;
      setStatus(successAlert);
      updateTrigger(refreshTrigger + 1);
    }).catch(function(error) {
      let successError = <Alert status="error">
        <AlertIcon />
        Error adding Sponsor: {error}
      </Alert>;
      setStatus(successError);
    });
    setTitle('');
    setUrl('');
  };

  const cancel = () => {
    onClose();
    setTitle('');
    setUrl('');
  };

  const openModal = () => {
    if (title === '' || url === '') {

    } else {
      onOpen();
    }
  };


  return (
    <Box p={6} borderRadius="xl" textAlign="left" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={4}>
          Add New Sponsor
        </Heading>
        <FormControl id="title" isInvalid={title === ''}>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={e => setTitle(e.currentTarget.value)} />
          <FormHelperText>Sponsor name.</FormHelperText>
        </FormControl>
        <FormControl id="url" isInvalid={url === ''}>
          <FormLabel>Sponsor logo</FormLabel>
          <Input type="url" value={url} onChange={e => setUrl(e.currentTarget.value)} />
          <FormHelperText>URL link to an image of the sponsors logo.</FormHelperText>
        </FormControl>
        <Text pb={4}>
          {status ? status : ''}
        </Text>
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
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Please confirm you would like to create a new sponsor with the following data:
              <UnorderedList ml='12%' mt='4%'>
                <ListItem>
                  Name: {title}
                </ListItem>
                <ListItem>
                  Logo:
                </ListItem>
                <Image src={url}/>
              </UnorderedList>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={postSponsor}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={cancel}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Heading as="h1" size="lg" color={tedxRed} py={8}>
          Existing Sponsors
        </Heading>
        <FirebaseDocumentList type="sponsors" key={refreshTrigger} />
      </VStack>
    </Box>
  );
};