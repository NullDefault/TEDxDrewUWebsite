import {
  Box,
  useColorModeValue,
  Heading, VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { VideoCard } from '../components/VideoCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Talks = () => {
  const color = useColorModeValue('black', 'white');
  const [talks, setTalks] = useState([]);

  const fetchTalks = async () => {
    axios
      .get('https://us-central1-tedxdrewuniversitywebsite.cloudfunctions.net/api/talks')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
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
        {
          talks && talks.map(talk=>{
            return(
              <VideoCard
                title={talk.title}
                url={talk.url}
              />
            )
          })
        }
      </VStack>
    </Box>
  );
};