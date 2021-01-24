import { Flex, VStack, Image, HStack, Text, Link, Divider} from '@chakra-ui/react';
import tedxTextLogo from '../assets/PNG/tedxDrewUTextLogo.png';
import React from 'react';

export const Footer = (props) => <Flex as="footer" py="8rem" bg="black" color="white" {...props}>
  <VStack spacing="24px">
    <Image src={tedxTextLogo} w="60vmin" pb="4%" />
    <HStack>
      <VStack w={'50%'}>
        <Text pl="8%" fontSize="lg">
        <Text fontSize="2xl">
        What is TEDx?</Text>
        <br />
        In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program
        of local, self-organized events that bring people together to share a TED-like experience. Our event is
        called TEDxDrewUniversity, where x = independently organized TED event. At our TEDxDrewUniversity event,
        TEDTalks video
        and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference
        provides general guidance for the TEDx program, but individual TEDx events, including ours, are
        self-organized.
      </Text>
      </VStack>
      <VStack w={'50%'} align="left" pl="12%" pb="2%">
        <Text fontSize="2xl" color="#e62b1e">Navigation</Text>

        <Link href="/" fontSize="2xl">Home</Link>
        <Link href="/" fontSize="2xl">About</Link>
        <Link href="/" fontSize="2xl">Blog</Link>

        <Link href="/" fontSize="2xl">Videos</Link>
        <Link href="/" fontSize="2xl">Speakers</Link>
        <Link href="/" fontSize="2xl">Sponsors</Link>

        <Link href="/" fontSize="2xl">Join the Team</Link>
        <Link href="/" fontSize="2xl">Get in Touch</Link>

        <Link href="/" fontSize="2xl">Facebook</Link>
        <Link href="/" fontSize="2xl">Twitter</Link>
        <Link href="/" fontSize="2xl">Instagram</Link>
      </VStack>
    </HStack>
    <Divider />
    <Text pt="2%" px="4%" textAlign="center">
      This independent TEDx event is operated under license from TED. Learn more at{' '}
      <Link color="#e62b1e" href="ted.com/tedx">ted.com/tedx</Link>
    </Text>
  </VStack>
</Flex>;