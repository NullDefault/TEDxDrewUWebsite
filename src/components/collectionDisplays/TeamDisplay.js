import { Box, Spinner, useColorModeValue } from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { TeamMemberCard } from '../cards/TeamMemberCard';

export const TeamDisplay = ({ data }) => {
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
      data.map(item => (
        <TeamMemberCard
          name={item.name}
          bio={item.bio}
          url={item.picUrl}
          team={item.team}
          year={item.year}
        />
      ))
    );
  }
};