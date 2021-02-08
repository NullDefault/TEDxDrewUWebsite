import { Box, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { TeamDisplay } from '../components/collectionDisplays/TeamDisplay';

export const Team = () => {
  const color = useColorModeValue('black', 'white');
  const [teamData, setTeamData] = useState([]);


  const fetchTeamData = async () => {
    const response = db.collection('team');
    const data = await response.get();
    data.docs.forEach(item => {
      setTeamData(teamData => ([...teamData, item.data()]));
    });
  };

  useEffect(() => {
    fetchTeamData();
    // eslint-disable-next-line
  }, []);

  return (
    <Box textAlign="left" fontSize="xl" bg="primary.600" color={color}>
      <VStack
        minH="100vh"
        py='6vmin'
        px='10vmin'
        mx='auto'
        spacing={12}
        w={['100%', '70%']}>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Our Team
        </Heading>
        <TeamDisplay data={teamData}/>
      </VStack>
    </Box>
  );
};