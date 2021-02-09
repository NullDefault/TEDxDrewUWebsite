import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading, Image,
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

export const TeamInterface = () => {
  const color = useColorModeValue('black', 'white');
  const [status, setStatus] = useState(<div />);
  const [refreshTrigger, updateTrigger] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [team, setTeam] = useState('');
  const [year, setYear] = useState('');

  const postBlog = () => {
    onClose();
    db.collection('team').add({
      name: name,
      bio: bio,
      picUrl: imgUrl,
      team: team.toLowerCase(),
      year: year,
    }).then(function(docRef) {
      let successAlert = <Alert status="success">
        <AlertIcon />
        Team member added with the ID: {docRef.id}
      </Alert>;
      setStatus(successAlert);
      updateTrigger(refreshTrigger + 1);
    }).catch(function(error) {
      let successError = <Alert status="error">
        <AlertIcon />
        Error adding team member: {error}
      </Alert>;
      setStatus(successError);
    });
    setName('');
    setBio('');
    setImgUrl('');
    setTeam('');
    setYear('');
  };

  const cancel = () => {
    onClose();
  };

  const openModal = () => {
    if (!(name === '' || imgUrl === '' || bio === '' || team === '' || year === '')) {
      onOpen();
    }
  };


  return (
    <Box p={6} borderRadius="xl" textAlign="left" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={4}>
          Add New Team Member
        </Heading>

        <FormControl id="title" isInvalid={name === ''}>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={e => setName(e.currentTarget.value)} />
          <FormHelperText>Member full name.</FormHelperText>
        </FormControl>

        <FormControl id="summary" isInvalid={team === ''}>
          <FormLabel>Team</FormLabel>
          <Input value={team} onChange={e => setTeam(e.currentTarget.value)} />
          <FormHelperText>Team they belong to.</FormHelperText>
        </FormControl>


        <FormControl id="author" isInvalid={year === ''}>
          <FormLabel>Year</FormLabel>
          <Input type="number" value={year} onChange={e => setYear(e.currentTarget.value)} />
          <FormHelperText>Their graduating year.</FormHelperText>
        </FormControl>

        <FormControl id="imgUrl" isInvalid={imgUrl === ''}>
          <FormLabel>Link to member picture</FormLabel>
          <Input type="url" placeholder="https://<yourlink>/your-image.png" value={imgUrl}
                 onChange={e => setImgUrl(e.currentTarget.value)} />
          <FormHelperText> URL link to the profile picture of the team member. </FormHelperText>
        </FormControl>

        <FormControl id="bodyText" isInvalid={bio === ''}>
          <FormLabel>Member short bio</FormLabel>
          <Textarea placeholder="Main content of the post." value={bio}
                    onChange={e => setBio(e.currentTarget.value)} />
          <FormHelperText>Make it welcoming and playful!</FormHelperText>
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
              Please confirm you would like to add a new team member with the following data:
              <UnorderedList ml='12%' mt='4%'>
                <ListItem>
                  Name: {name}
                </ListItem>
                <ListItem>
                  Team: {team}
                </ListItem>
                <ListItem>
                  Year: {year}
                </ListItem>
                <ListItem>
                  Profile picture:
                </ListItem>
                <Image src={imgUrl}/>
                <ListItem>
                  Bio:
                  <p>
                    {bio}
                  </p>
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
          Current Team Members
        </Heading>
        <FirebaseDocumentList type="team" key={refreshTrigger} />
      </VStack>
    </Box>
  );
};