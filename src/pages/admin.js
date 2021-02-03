import {
  Box,
  useColorModeValue,
  VStack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Button,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { TalksInterface } from '../components/AdminInterfaces/TalksInterface';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { VideosInterface } from '../components/AdminInterfaces/VideosInterface';
import { InboxInterface } from '../components/AdminInterfaces/InboxInterface';
import { TicketInterface } from '../components/AdminInterfaces/TicketInterface';

export const Admin = () => {
  const color = useColorModeValue('black', 'white');
  const history = useHistory();

  const logOut = () => {
    auth.signOut().then(function() {
      history.push('/');
    }, function(error) {
      console.log(error);
    });
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user) history.push('/login');
    });
  }, []);

  return (
    <Box bg="primary.600" color={color}>
      <VStack py='4vmin' mx='auto' w={['80%', '60%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={12}>
          Administrator Page
        </Heading>
        <Accordion w="100%" pb={12} allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box>
                Tickets
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TicketInterface />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box>
                Blog
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box>
                Videos
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VideosInterface />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box>
                Talks
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TalksInterface />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box>
                Sponsors
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box>
                Team Members
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box>
                Messages & Applications
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <InboxInterface />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Button
          loadingText="Logging Out"
          colorScheme="red"
          variant="solid"
          size="lg"
          onClick={logOut}
        >
          Log Out
        </Button>
      </VStack>
    </Box>
  );
};