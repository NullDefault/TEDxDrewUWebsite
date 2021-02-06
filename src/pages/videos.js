import {
  Box,
  useColorModeValue,
  Heading, VStack
} from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { VideoDisplay } from '../components/VideoDisplay';
import { useEffect, useState } from 'react';
import { db } from '../firebase';

export const Videos = () => {
  const color = useColorModeValue('black', 'white');
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    const response = db.collection('videos').orderBy('addedAt');
    const data = await response.get();
    data.docs.forEach(item => {
      setVideos(videos => ([...videos, item.data()]))
    });
  };

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, []);


  return (
    <Box bg="primary.600" textAlign="center" color={color}>
      <VStack spacing={24} pb="48px"  mx='auto'>
        <Heading as="h1" size="3xl" color={tedxRed}>
          Video Gallery
        </Heading>
        <VideoDisplay data={videos}/>
      </VStack>
    </Box>
  );
};
