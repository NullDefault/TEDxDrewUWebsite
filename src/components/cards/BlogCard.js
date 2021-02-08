import React from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import placeholder from '../../assets/PNG/placeholder.png';

export const BlogCard = ({ publishDate, summary, title, imgUrl, bodyText, author }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pastedDate = publishDate.toDate();
  const fallback = <Image borderRadius="xl" border="2px" borderColor={tedxRed} mb={'4vmin'} w='60%' h='60%'
                          src={placeholder} />;


  return (
    <Box
      as="a"
      onClick={onOpen}
      cursor="pointer"
      w="100%"
      transition="all 0.25s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: 'translateY(-4px)', shadow: 'sm' }}
    >

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={tedxRed}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Image borderRadius="xl" border="2px" fallback={fallback} borderColor={tedxRed} mb={'4vmin'}
                     src={imgUrl} />
            </Center>


            <Text>
              <div dangerouslySetInnerHTML={{ __html: bodyText }} />
            </Text>

          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Box color={tedxRed}>
              By: {author}
            </Box>

            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
          {pastedDate.toDateString()}
        </Text>
      </VStack>
    </Box>
  );
};