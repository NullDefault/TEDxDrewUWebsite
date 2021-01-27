import { Box, Heading, useColorModeValue, VStack, SimpleGrid } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { SponsorCard } from '../components/SponsorCard';

export const Sponsors = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box textAlign="left" bg="primary.600" color={color}>
      <VStack py='12vmin' mx='auto' w={['80%', '60%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={12}>
          Our Sponsors
        </Heading>
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <SponsorCard url={"https://ih0.redbubble.net/image.538431154.1686/flat,1000x1000,075,f.u2.jpg"}/>
          <SponsorCard url={"https://www.dafont.com/forum/attach/orig/6/3/636175.png?1"}/>
          <SponsorCard url={"https://i.pinimg.com/originals/48/57/58/48575898784b74834f564cb1c163dc93.jpg"}/>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};