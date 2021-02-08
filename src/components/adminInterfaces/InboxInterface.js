import { Box, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { FirebaseDocumentList } from './FirebaseDocumentList';
import { EmailIcon, StarIcon } from '@chakra-ui/icons';

export const InboxInterface = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box p={6} borderRadius="xl" textAlign="left" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={2}>
          Inbox
        </Heading>
        <Box textAlign="center" color={tedxRed} pb={2}>
          <EmailIcon /> : messages <br />
          <StarIcon /> : team applications
        </Box>
        <FirebaseDocumentList type="inbox" />
      </VStack>
    </Box>
  );
};