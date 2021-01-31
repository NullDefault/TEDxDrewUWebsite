import {
  Box,
  Divider,
  Flex,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  IconButton
} from '@chakra-ui/react';
import {LockIcon} from '@chakra-ui/icons';
import {
  AiFillFacebook,
  AiFillHome,
  AiFillInfoCircle,
  AiFillInstagram,
  AiFillMessage,
  AiFillVideoCamera,
} from 'react-icons/ai';
import { FaHandsHelping } from 'react-icons/fa';
import { ImBlog } from 'react-icons/im';
import { MdGroup } from 'react-icons/md';
import { GiTeamIdea } from 'react-icons/gi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { NavLink } from './NavLink';
import tedxTextLogo from '../assets/PNG/tedxDrewUTextLogo.png';
import { tedxRed } from '../utils/tedxColors';

export const Footer = (props) => <Flex as="footer" py="8rem" bg="black" color="white" {...props}>
  <VStack spacing="24px">
    <Image src={tedxTextLogo} w="60vmin" pb="4%" />
    <Stack direction={['column', 'row']} align="center">
      <VStack w={'50%'}>
        <Text pl="8%" fontSize="lg">
          <Text fontSize="3xl" color={tedxRed}>
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
      <VStack w={'50%'} align={['center', 'left']} py="10%">
        <Text fontSize="3xl" color={tedxRed}>Navigation</Text>

        <NavLink href="/">Home <Icon as={AiFillHome} /></NavLink>
        <NavLink href="/about">About <Icon as={AiFillInfoCircle} /></NavLink>
        <NavLink href="/blog">Blog <Icon as={ImBlog} /></NavLink>

        <Box h="12px" />

        <NavLink href="/videos">Videos <Icon as={AiFillVideoCamera} /></NavLink>
        <NavLink href="/talks">Talks <Icon as={MdGroup} /></NavLink>
        <NavLink href="/sponsors">Sponsors <Icon as={RiMoneyDollarCircleFill} /></NavLink>

        <Box h="12px" />

        <NavLink href="/team">Our Team <Icon as={GiTeamIdea} /></NavLink>
        <NavLink href="/join">Join TEDx <Icon as={FaHandsHelping} /></NavLink>
        <NavLink href="/contact">Get in Touch <Icon as={AiFillMessage} /></NavLink>

        <Box h="12px" />

        <NavLink href="https://www.facebook.com/TEDxDrewU/">Facebook <Icon as={AiFillFacebook} /></NavLink>
        <NavLink href="https://www.instagram.com/tedxdrewuniversity/">Instagram <Icon as={AiFillInstagram} /></NavLink>
      </VStack>
    </Stack>
    <Divider />
    <Text pt="2%" px="4%" textAlign="center" pb="2%">
      This independent TEDx event is operated under license from TED. Learn more at{' '}
      <Link color={tedxRed} href="ted.com/tedx">ted.com/tedx</Link>
    </Text>
    <Link href="/login">
      <IconButton colorScheme="red"
                  variant="outline"
                  aria-label="Admin Login"
                  icon={<LockIcon />} />
    </Link>
  </VStack>
</Flex>;
