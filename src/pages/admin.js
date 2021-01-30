import { Box, useColorModeValue, VStack, Heading, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { TalksForm } from '../components/adminForms/talksForm';

export const Admin = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box bg="primary.600" color={color}>
      <VStack py='4vmin' mx='auto' w={['80%', '60%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={12}>
          Administrator Page
        </Heading>
        <Accordion w="100%" allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Box>
                Videos
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
                Talks
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <TalksForm/>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
    </Box>
  )
}