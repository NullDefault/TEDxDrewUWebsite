import {
  Box,
  useColorModeValue,
  Heading, VStack, Spinner,
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { VideoCard } from '../components/VideoCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Talks = () => {
  const color = useColorModeValue('black', 'white');
  const [talks, setTalks] = useState([]);
  const body = () => {
    if (talks.length !== 0) {
      return (
        talks.map(talk => {
          return (
            <VideoCard
              title={talk.title}
              url={talk.url}
            />
          );
        })
      );
    } else {
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
    }
  };


  const fetchTalks = async () => {
    axios({
      method: 'get',
      url: 'https://us-central1-tedxdrewuniversitywebsite.cloudfunctions.net/api/talks',
    })
      .then((response) => {
        setTalks(response.data);
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
          body()
        }
      </VStack>
    </Box>
  );
};