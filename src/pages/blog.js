import { Box, useColorModeValue, VStack } from '@chakra-ui/react';
import BlogCard from '../components/BlogCard';

export const Blog = () => {
  const color = useColorModeValue('black', 'white');

  return (
    <Box textAlign="left" fontSize="xl" bg="primary.600" color={color}>
      <VStack
        minH="100vh"
        py='12vmin'
        px='10vmin'
        mx='auto'
        spacing={12}
        w={['100%', '70%']}>
        <BlogCard
          slug={'test'}
          publishDate={new Date('December 26, 2021 03:24:00')}
          summary={'My exploration into making this page work.'}
          title={'Testing Blog Functionality'}
        />
        <BlogCard
          slug={'test2'}
          publishDate={new Date('December 1, 2021 05:14:00')}
          summary={'What does it mean?'}
          title={'Lorem Ipsum'}
        />
        <BlogCard
          slug={'test3'}
          publishDate={new Date('November 26, 2020 07:31:00')}
          summary={'A classic or a cliche?'}
          title={'Hello world!'}
        />
      </VStack>
    </Box>
  );
};