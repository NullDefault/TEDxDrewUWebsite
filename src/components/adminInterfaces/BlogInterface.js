import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
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
  Textarea,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import React, { useState } from 'react';
import { db } from '../../firebase';
import { FirebaseDocumentList } from './FirebaseDocumentList';

export const BlogInterface = () => {
  const color = useColorModeValue('black', 'white');
  const [status, setStatus] = useState(<div />);
  const [refreshTrigger, updateTrigger] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [author, setAuthor] = useState('');

  const postBlog = () => {
    onClose();
    db.collection('blogs').add({
      title: title,
      summary: summary,
      imgUrl: imgUrl,
      bodyText: bodyText,
      author: author,
      publishDate: new Date(Date.now()),
    }).then(function(docRef) {
      let successAlert = <Alert status="success">
        <AlertIcon />
        Blog created with ID: {docRef.id}
      </Alert>;
      setStatus(successAlert);
      updateTrigger(refreshTrigger + 1);
    }).catch(function(error) {
      let successError = <Alert status="error">
        <AlertIcon />
        Error adding Blog: {error}
      </Alert>;
      setStatus(successError);
    });
    setTitle('');
    setSummary('');
    setImgUrl('');
    setBodyText('');
    setAuthor('');
  };

  const cancel = () => {
    onClose();
  };

  const openModal = () => {
    if (!(title === '' || imgUrl === '' || summary === '' || bodyText === '' || author === '')) {
      onOpen();
    }
  };


  return (
    <Box p={6} borderRadius="xl" textAlign="left" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={4}>
          Add New Blog
        </Heading>

        <FormControl id="title" isInvalid={title === ''}>
          <FormLabel>Title</FormLabel>
          <Input value={title} onChange={e => setTitle(e.currentTarget.value)} />
          <FormHelperText>Blog title.</FormHelperText>
        </FormControl>

        <FormControl id="summary" isInvalid={summary === ''}>
          <FormLabel>Blog summary.</FormLabel>
          <Input type="url" value={summary} onChange={e => setSummary(e.currentTarget.value)} />
          <FormHelperText>Short summary of the blog post.</FormHelperText>
        </FormControl>

        <FormControl id="imgUrl" isInvalid={imgUrl === ''}>
          <FormLabel>Link to blog image.</FormLabel>
          <Input type="url" placeholder="https://<yourlink>/your-image.png" value={imgUrl}
                 onChange={e => setImgUrl(e.currentTarget.value)} />
          <FormHelperText> URL link to the image you would like to be a part of the blog post. </FormHelperText>
        </FormControl>

        <FormControl id="bodyText" isInvalid={bodyText === ''}>
          <FormLabel>Blog body.</FormLabel>
          <Textarea placeholder="Main content of the post." value={bodyText}
                    onChange={e => setBodyText(e.currentTarget.value)} />
          <FormHelperText>Tip: You can format your text with html.</FormHelperText>
        </FormControl>

        <FormControl id="author" isInvalid={author === ''}>
          <FormLabel>Author of this blog.</FormLabel>
          <Input type="text" value={author} onChange={e => setAuthor(e.currentTarget.value)} />
          <FormHelperText>Your name / team.</FormHelperText>
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
              Please confirm you would like to create a new blog with the following data:
              <UnorderedList ml='12%' mt='4%'>
                <ListItem>
                  Title: {title}
                </ListItem>
                <ListItem>
                  Summary: {summary}
                </ListItem>
                <ListItem>
                  ImgUrl: {imgUrl}
                </ListItem>
                <ListItem>
                  BodyText:
                  <p>
                    <div dangerouslySetInnerHTML={{ __html: bodyText }} />
                  </p>
                </ListItem>
                <ListItem>
                  Author: {author}
                </ListItem>
              </UnorderedList>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={postBlog}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={cancel}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Heading as="h1" size="lg" color={tedxRed} py={8}>
          Existing Blogs
        </Heading>
        <FirebaseDocumentList type="blogs" key={refreshTrigger} />
      </VStack>
    </Box>
  );
};