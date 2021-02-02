import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Stack,
  IconButton, ListItem,
  Modal,
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text, UnorderedList,
} from '@chakra-ui/react';
import { DeleteIcon, EmailIcon, InfoIcon, StarIcon } from '@chakra-ui/icons';
import { db } from '../../firebase';
import { useRef, useState } from 'react';

export const InterfaceItem = (props) => {
  const [alertIsOpen, setAlertOpen] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const onClose = () => setAlertOpen(false);
  const cancelRef = useRef();

  const parseItem = (item) => {
    if (props.type === 'talks' || props.type === 'videos') {
      return item.title;
    } else if (props.type === 'inbox') { // for messages and applications
      let pastedDate = new Date(item.sentAt * 1000);
      const months = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      return (
        <Box>
          {item.msgType === 'message'? <EmailIcon mr={2}/> : <StarIcon mr={2}/> }
          {item.email} - {months[pastedDate.getUTCMonth()]} {pastedDate.getUTCDate()} | {pastedDate.getUTCHours()}:{pastedDate.getUTCMinutes()}
        </Box>
      )
    }
  };

  const deleteItem = async (item) => {
    console.log(item.id);
    const res = await db.collection(props.type).doc(item.id).delete();
    console.log(res);
    setAlertOpen(false);
    await props.fetchData();
  };

  return (
    <Stack key={props.index} direction={['column', 'row']}>
      <Text>
        {parseItem(props.item)}
      </Text>

      <AlertDialog
        isOpen={alertIsOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Item
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" ml={3} onClick={() => deleteItem(props.item)}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {
        (props.type === 'inbox') ? <Modal isOpen={modalIsOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Message Info</ModalHeader>
            <ModalCloseButton onClick={() => setModalOpen(false)} />
            <ModalBody>
              <UnorderedList ml='12%' my='4%'>
                <ListItem>
                  Name: {props.item.name} ({props.item.pronouns})
                </ListItem>
                <ListItem>
                  Email: {props.item.email}
                </ListItem>
                <ListItem>
                  Message: <p>{props.item.message}</p>
                </ListItem>
              </UnorderedList>
            </ModalBody>
          </ModalContent>
        </Modal> : <div />
      }

      {
        (props.type === 'inbox') ? <IconButton onClick={() => {
          setModalOpen(true);
        }} icon={<InfoIcon />} /> : <div/>
      }

      <IconButton onClick={() => {
        setAlertOpen(true);
      }} icon={<DeleteIcon />} />
    </Stack>
  );
};