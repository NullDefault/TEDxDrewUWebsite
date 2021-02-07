import { Box, Heading, SimpleGrid, useColorModeValue, VStack } from '@chakra-ui/react';
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
          <SponsorCard
            url={'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png'} />
          <SponsorCard
            url={'https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/163_Hooli_logo_logos-512.png'} />
          <SponsorCard
            url={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fcyberpunk2044%2Fimages%2Ff%2Ffa%2FArasakaLogo.jpg%2Frevision%2Flatest%2Fscale-to-width-down%2F250%3Fcb%3D20140716040515&f=1&nofb=1'} />
          <SponsorCard url={'https://i.pinimg.com/originals/bb/60/b1/bb60b1377e4eb244e5667daf09ce50d2.png'} />
          <SponsorCard
            url={'https://vignette.wikia.nocookie.net/cyberpunk/images/b/b6/Militech_Logotype_Yellow.png/revision/latest?cb=20200408033128'} />
        </SimpleGrid>
      </VStack>
    </Box>
  );
};