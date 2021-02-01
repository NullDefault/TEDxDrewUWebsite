import {
  Box, Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Alert,
  AlertIcon,
  Text,
  useColorModeValue,
  VStack,
  useDisclosure,
  UnorderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { useState } from 'react';
import { db } from '../../firebase';
import { FirebaseDocumentList } from './FirebaseDocumentList';

export const VideosInterface = () => {
  const color = useColorModeValue('black', 'white');
  const [status, setStatus] = useState(<div/>);
  const [refreshTrigger, updateTrigger] = useState(0);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const postVideo = () => {
    onClose();
    db.collection('videos').add({
      title: title,
      url: url,
      addedAt: new Date(Date.now()),
    }).then(function(docRef){
      let successAlert = <Alert status="success">
        <AlertIcon />
        Video created with ID: {docRef.id}
      </Alert>
      setStatus(successAlert);
      updateTrigger(refreshTrigger+1);
    }).catch(function(error) {
      let successError = <Alert status="error">
        <AlertIcon />
        Error adding Video: {error}
      </Alert>
      setStatus(successError);
    })
    setTitle('');
    setUrl('');
  };

  const cancel = () => {
    onClose();
    setTitle('');
    setUrl('');
  }

  const openModal = () => {
    if(title === '' || url === ''){

    }else{
      onOpen()
    }
  }


  return (
    <Box p={6} borderRadius="xl" textAlign="left" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={4}>
          Add New Video
        </Heading>
        <FormControl id="title" isInvalid={title === ''}>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={e => setTitle(e.currentTarget.value)} />
          <FormHelperText>Video title.</FormHelperText>
        </FormControl>
        <FormControl id="url" isInvalid={url === ''}>
          <FormLabel>Video URL</FormLabel>
          <Input type="url" value={url} onChange={e => setUrl(e.currentTarget.value)} />
          <FormHelperText>YouTube URL to the video.</FormHelperText>
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
            openModal()
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
              Please confirm you would like to create a new video with the following data:
              <UnorderedList ml='12%' mt='4%'>
                <ListItem>
                  Title: {title}
                </ListItem>
                <ListItem>
                  Url: {url}
                </ListItem>
              </UnorderedList>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={postVideo}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={cancel}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Heading as="h1" size="lg" color={tedxRed} py={8}>
          Existing Videos
        </Heading>
        <FirebaseDocumentList type="videos" key={refreshTrigger} />
      </VStack>
    </Box>
  );
};