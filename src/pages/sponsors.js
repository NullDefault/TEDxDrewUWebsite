import { Box, Heading, SimpleGrid, useColorModeValue, VStack } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { SponsorCard } from '../components/cards/SponsorCard';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { SponsorDisplay } from '../components/collectionDisplays/SponsorDisplay';

export const Sponsors = () => {
  const color = useColorModeValue('black', 'white');
  const [sponsors, setSponsors] = useState([]);


  const fetchSponsors = async () => {
    const response = db.collection('sponsors');
    const data = await response.get();
    data.docs.forEach(item => {
      setSponsors(sponsors => ([...sponsors, item.data()]));
    });
  };

  useEffect(() => {
    fetchSponsors();
    // eslint-disable-next-line
  }, []);

  return (
    <Box textAlign="left" bg="primary.600" color={color}>
      <VStack py='12vmin' mx='auto' w={['80%', '60%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={12}>
          Our Sponsors
        </Heading>

        <SponsorDisplay data={sponsors}/>
      </VStack>
    </Box>
  );
};