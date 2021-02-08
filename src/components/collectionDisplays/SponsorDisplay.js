import { Box, SimpleGrid, Spinner, useColorModeValue } from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { SponsorCard } from '../cards/SponsorCard';

export const SponsorDisplay = ({ data }) => {
  const color = useColorModeValue('black', 'white');

  if (data.length === 0) {
    return (
      <Box minH="80vh">
        <Spinner
          mt="20vh"
          thickness="10px"
          speed="0.60s"
          emptyColor={color}
          color={tedxRed}
          size="xl"
        />
      </Box>
    );
  } else {
    return (
      <SimpleGrid columns={[2, null, 3]} spacing="40px">
        {
          data.map(item => (
            <SponsorCard
              title={item.title}
              url={item.url}
            />
          ))
        }
      </SimpleGrid>
    );
  }
};