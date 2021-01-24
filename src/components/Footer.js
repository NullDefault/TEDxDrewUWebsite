import { Flex, VStack, Image, HStack, Text, Link, Divider, Box, Icon } from '@chakra-ui/react';
import { AiFillHome, AiFillInfoCircle, AiFillVideoCamera, AiFillMessage, AiFillFacebook, AiFillInstagram} from 'react-icons/ai';
import { ImBlog } from 'react-icons/im';
import { MdGroup } from 'react-icons/md';

import { GiTeamIdea } from 'react-icons/gi';
import {RiMoneyDollarCircleFill} from 'react-icons/ri';
import { NavLink } from './NavLink';
import tedxTextLogo from '../assets/PNG/tedxDrewUTextLogo.png';

export const Footer = (props) => <Flex as="footer" py="8rem" bg="black" color="white" {...props}>
  <VStack spacing="24px">
    <Image src={tedxTextLogo} w="60vmin" pb="4%" />
    <HStack>
      <VStack w={'50%'}>
        <Text pl="8%" fontSize="lg">
          <Text fontSize="3xl" color="#e62b1e">
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

        <NavLink href="/">Home <Icon as={AiFillHome} /></NavLink>
        <NavLink href="/">About <Icon as={AiFillInfoCircle} /></NavLink>
        <NavLink href="/">Blog <Icon as={ImBlog} /></NavLink>

        <Box h="12px" />

        <NavLink href="/">Videos <Icon as={AiFillVideoCamera} /></NavLink>
        <NavLink href="/">Speakers <Icon as={MdGroup} /></NavLink>
        <NavLink href="/">Sponsors <Icon as={RiMoneyDollarCircleFill} /></NavLink>

        <Box h="12px" />

        <NavLink href="/">Join the Team <Icon as={GiTeamIdea} /></NavLink>
        <NavLink href="/">Get in Touch <Icon as={AiFillMessage} /></NavLink>

        <Box h="12px" />

        <NavLink href="/">Facebook <Icon as={AiFillFacebook}/></NavLink>
        <NavLink href="/">Instagram <Icon as={AiFillInstagram}/></NavLink>
      </VStack>
    </HStack>
    <Divider />
    <Text pt="2%" px="4%" textAlign="center">
      This independent TEDx event is operated under license from TED. Learn more at{' '}
      <Link color="#e62b1e" href="ted.com/tedx">ted.com/tedx</Link>
    </Text>
  </VStack>
</Flex>;