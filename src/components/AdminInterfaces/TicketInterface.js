import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { useEffect, useState } from 'react';
import { parseInterestIcon } from '../../utils/parseInterestIcon';
import { db } from '../../firebase';

export const TicketInterface = (props) => {
  const color = useColorModeValue('black', 'white');
  const [ticketToggle, setTicketToggle] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [link, setLink] = useState('loading...');
  const [nextLink, setNextLink] = useState('');

  const fetchData = async () => {
    setUpdating(true);
    const response = db.collection('ticketData').doc('04AySeIdnaNag5ZRQ10L');
    const dbData = await response.get();
    const ticketData = dbData.data();
    setTicketToggle(ticketData.toggle);
    setLink(ticketData.link);
    setUpdating(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const setNewLink = async () => {
    setUpdating(true);
    const response = db.collection('ticketData')
      .doc('04AySeIdnaNag5ZRQ10L')
      .update({
        link: nextLink,
        toggle: ticketToggle,
      });
    await fetchData();
    setUpdating(false);
  };

  const toggleTicketSales = async () => {
    setUpdating(true);
    const newToggle = !ticketToggle;
    const response = db.collection('ticketData')
      .doc('04AySeIdnaNag5ZRQ10L')
      .update({
        link: link,
        toggle: newToggle,
      });
    await fetchData();
    setUpdating(false);
  };

  return (
    <Box p={6} borderRadius="xl" textAlign="center" color={color} border="2px" borderColor="gray.300">
      <VStack>
        <Heading as="h1" size="lg" color={tedxRed} pb={4}>
          Ticket Sale Settings
        </Heading>
        <Text fontSize="xl">
          Ticket sales enabled: {parseInterestIcon(ticketToggle)}
        </Text>
        <Text fontSize="xl">
          Ticket sales url link:
          <Container w="60vw" overflow='hidden'>
            <Link isExternal href={link} fontSize="xl" color={tedxRed}>
              {link}
            </Link>
          </Container>

        </Text>

        <FormControl id="nextLink" isInvalid={nextLink === ''} w={['80%', '50%']} pt={'8vmin'}>
          <FormLabel>New Link</FormLabel>
          <Input value={nextLink} onChange={e => setNextLink(e.currentTarget.value)} />
          <FormHelperText>The link won't work unless it has the https:// part.</FormHelperText>
        </FormControl>
        <Button
          isLoading={updating}
          loadingText="Submitting"
          colorScheme="red"
          onClick={() => setNewLink()}
          mb={'8vmin'}
        >
          Set New Ticket Link
        </Button>


        <Button
          isLoading={updating}
          loadingText="Submitting"
          colorScheme="red"
          onClick={() => toggleTicketSales()}
        >
          {ticketToggle ? 'Turn Off Ticket Sales' : 'Enable Ticket Sales'}
        </Button>
      </VStack>
    </Box>
  );
};