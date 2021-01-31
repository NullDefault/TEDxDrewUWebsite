import {
  Box,
  useColorModeValue,
  Heading, VStack
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { VideoDisplay } from '../components/VideoDisplay';


export const Talks = () => {
  const color = useColorModeValue('black', 'white');
  const [talks, setTalks] = useState([]);

  const fetchTalks = async () => {
    const response = db.collection('talks');
    const data = await response.get();
    data.docs.forEach(item => {
      setTalks(talks => ([...talks, item.data()]))
    });
  };

  useEffect(() => {
    fetchTalks();
    // eslint-disable-next-line
  }, []);

  return (
    <Box bg="primary.600" textAlign="center" color={color}>
      <VStack spacing={24} pb="48px" mx='auto'>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Past Talks
        </Heading>
        <VideoDisplay data={talks}/>
      </VStack>
    </Box>
  );
};