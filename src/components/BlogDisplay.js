import { BlogCard } from './BlogCard';
import { Box, Spinner, useColorModeValue } from '@chakra-ui/react';
import { tedxRed } from '../utils/tedxColors';

export const BlogDisplay = ({ data }) => {
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
        <BlogCard
          publishDate={item.publishDate}
          summary={item.summary}
          title={item.title}
          imgUrl={item.imgUrl}
          bodyText={item.bodyText}
          author={item.author}
        />
      ))
    );
  }
};