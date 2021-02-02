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
  Checkbox,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  UnorderedList,
  ListItem, ModalFooter,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { db } from '../firebase';
import { validateEmail } from '../utils/validateEmail';
import {parseInterestIcon} from '../utils/parseInterestIcon';

export const JoinUs = () => {
  const color = useColorModeValue('black', 'white');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const [name, setName] = useState('');
  const [pronouns, setPronouns] = useState('');
  const [email, setEmail] = useState('');
  const [year, setYear] = useState('');
  const [teamInterest, setTeamInterest] = useState({
    creative: false,
    marketing: false,
    curation: false,
    production: false,
    logistics: false,
    finance: false,
  });
  const [message, setMessage] = useState('');

  const postApplication = () => {
    onClose();
    db.collection('applications').add({
      name: name,
      pronouns: pronouns,
      email: email,
      message: message,
      year: year,
      teamInterest: teamInterest,
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
    setYear('');
    setTeamInterest({
      creative: false,
      marketing: false,
      curation: false,
      production: false,
      logistics: false,
      finance: false,
    });
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
          <FormControl id="name" isInvalid={name === ''}>
            <FormLabel>Name</FormLabel>
            <Input type="name" value={name} onChange={e => setName(e.currentTarget.value)} />
            <FormHelperText>How you like to be called.</FormHelperText>
          </FormControl>
          <FormControl id="pronouns" isInvalid={pronouns === ''}>
            <FormLabel>Pronouns</FormLabel>
            <Input type="pronouns" value={pronouns} onChange={e => setPronouns(e.currentTarget.value)} />
            <FormHelperText>Your preferred pronouns.</FormHelperText>
          </FormControl>
        </HStack>

        <FormControl id="email" isInvalid={email === ''}>
          <FormLabel>Email address </FormLabel>
          <Input type="email" value={email} onChange={e => setEmail(e.currentTarget.value)}
                 placeholder="yourEmail@drew.edu" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="year" isInvalid={year === ''}>
          <FormLabel>Current year standing</FormLabel>
          <Select placeholder="Choose one" value={year} onChange={e => setYear(e.currentTarget.value)}>
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="graduate">Graduate</option>
          </Select>
        </FormControl>
        <FormControl id="teamInterest">
          <FormLabel>What teams are you interested in?</FormLabel>
          <Stack direction={['column', 'row']}>
            <Checkbox
              isChecked={teamInterest.creative}
              onChange={(e) => {
                setTeamInterest({
                    creative: !teamInterest.creative,
                    marketing: teamInterest.marketing,
                    curation: teamInterest.curation,
                    production: teamInterest.production,
                    logistics: teamInterest.logistics,
                    finance: teamInterest.finance,
                  },
                );
              }}
            >Creative</Checkbox>
            <Checkbox
              isChecked={teamInterest.marketing}
              onChange={(e) => {
                setTeamInterest({
                  creative: teamInterest.creative,
                  marketing: !teamInterest.marketing,
                  curation: teamInterest.curation,
                  production: teamInterest.production,
                  logistics: teamInterest.logistics,
                  finance: teamInterest.finance,
                });
              }}
            >Marketing</Checkbox>
            <Checkbox
              isChecked={teamInterest.curation}
              onChange={(e) => {
                setTeamInterest({
                  creative: teamInterest.creative,
                  marketing: teamInterest.marketing,
                  curation: !teamInterest.curation,
                  production: teamInterest.production,
                  logistics: teamInterest.logistics,
                  finance: teamInterest.finance,
                });
              }}
            >Curation</Checkbox>
            <Checkbox
              isChecked={teamInterest.production}
              onChange={(e) => {
                setTeamInterest({
                  creative: teamInterest.creative,
                  marketing: teamInterest.marketing,
                  curation: teamInterest.curation,
                  production: !teamInterest.production,
                  logistics: teamInterest.logistics,
                  finance: teamInterest.finance,
                });
              }}
            >Production</Checkbox>
            <Checkbox
              isChecked={teamInterest.logistics}
              onChange={(e) => {
                setTeamInterest({
                  creative: teamInterest.creative,
                  marketing: teamInterest.marketing,
                  curation: teamInterest.curation,
                  production: teamInterest.production,
                  logistics: !teamInterest.logistics,
                  finance: teamInterest.finance,
                });
              }}
            >Logistics</Checkbox>
            <Checkbox
              isChecked={teamInterest.finance}
              onChange={(e) => {
                setTeamInterest({
                  creative: teamInterest.creative,
                  marketing: teamInterest.marketing,
                  curation: teamInterest.curation,
                  production: teamInterest.production,
                  logistics: teamInterest.logistics,
                  finance: !teamInterest.finance,
                });
              }}
            >Finance</Checkbox>
          </Stack>
        </FormControl>
        <FormControl id="introduction" isInvalid={message === ''}>
          <FormLabel>Introduce yourself!</FormLabel>
          <Textarea value={message} onChange={e => setMessage(e.currentTarget.value)} />
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

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Are you sure?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Please confirm you would like to send the following application
              <UnorderedList ml='12%' mt='4%'>
                <ListItem>
                  Name: {name} ({pronouns})
                </ListItem>
                <ListItem>
                  Email: {email}
                </ListItem>
                <ListItem>
                  Year: {year}
                </ListItem>
                <ListItem>
                  Team Interest:
                  <UnorderedList spacing={3}>
                    <ListItem>
                      Creative: {parseInterestIcon(teamInterest.creative)}
                    </ListItem>
                    <ListItem>
                      Marketing: {parseInterestIcon(teamInterest.marketing)}
                    </ListItem>
                    <ListItem>
                      Curation: {parseInterestIcon(teamInterest.curation)}
                    </ListItem>
                    <ListItem>
                      Production: {parseInterestIcon(teamInterest.production)}
                    </ListItem>
                    <ListItem>
                      Logistics: {parseInterestIcon(teamInterest.logistics)}
                    </ListItem>
                    <ListItem>
                      Finance: {parseInterestIcon(teamInterest.finance)}
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem>
                  Message: <p>{message}</p>
                </ListItem>
              </UnorderedList>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={postApplication}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={cancel}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Box>
  );
};