import React from 'react';
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  Tag,
  HStack,
} from '@chakra-ui/react';

const BlogCard = ({ slug, publishDate, summary, title }) => {
  return (
    <Box
      as="a"
      cursor="pointer"
      w="100%"
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: 'translateY(-4px)', shadow: 'sm' }}
    >
      <VStack
        align="start"
        p={4}
        bg={useColorModeValue('white', 'gray.800')}
        rounded="xl"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        spacing={0}
      >
        <HStack>
          <Text
            color={useColorModeValue('red.500', 'red.200')}
            fontWeight="bold"
            fontSize="xl"
          >
            {title}{' '}
            {new Date() - new Date(publishDate) < 1000 * 60 * 60 * 24 * 7 ? (
              <Tag size="md" mt={1} ml={1} colorScheme="green">
                New
              </Tag>
            ) : undefined}
          </Text>
        </HStack>

        <Text fontSize="lg" color={useColorModeValue('gray.700', 'gray.50')}>
          {summary}
        </Text>
        <Text fontSize="xs" color={useColorModeValue('gray.500', 'gray.400')}>
          {publishDate.toString()}
        </Text>
      </VStack>
    </Box>
  );
};

export default BlogCard;