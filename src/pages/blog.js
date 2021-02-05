import { Box, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { BlogDisplay } from '../components/BlogDisplay';

export const Blog = () => {
  const color = useColorModeValue('black', 'white');
  const [blogs, setBlogs] = useState([]);


  const fetchBlogs = async () => {
    const response = db.collection('blogs');
    const data = await response.get();
    data.docs.forEach(item => {
      setBlogs(blogs => ([...blogs, item.data()]))
    });
  };

  useEffect(() => {
    fetchBlogs();
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
          Blog
        </Heading>
        <BlogDisplay data={blogs}/>
      </VStack>
    </Box>
  );
};