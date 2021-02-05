import { BlogCard } from './BlogCard';
import { Box, Skeleton, Stack } from '@chakra-ui/react';

export const BlogDisplay = ({data}) => {
  if (data.length === 0) {
    return (
      <Box minH="90vh" w={['100%', '70%']}>
        <Stack>
          <Skeleton startColor="pink.500" endColor="orange.500" height="10vh" />
          <Skeleton startColor="pink.500" endColor="orange.500" height="10vh" />
          <Skeleton startColor="pink.500" endColor="orange.500" height="10vh" />
        </Stack>
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
        />
      ))
    );
  }
};