import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  IconButton,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { DeleteIcon, EmailIcon, InfoIcon, StarIcon } from '@chakra-ui/icons';
import { db } from '../../firebase';
import { useRef, useState } from 'react';
import { parseInterestIcon } from '../../utils/parseInterestIcon';

export const InterfaceItem = (props) => {
  const [alertIsOpen, setAlertOpen] = useState(false);
  const [modalIsOpen, setModalOpen] = useState(false);
  const onClose = () => setAlertOpen(false);
  const cancelRef = useRef();

  const parseItem = (item) => {
    if (props.type === 'talks' || props.type === 'videos' || props.type === 'blogs') {
      return item.title;
    } else if (props.type === 'inbox') { // for messages and applications
      return (
        <Box>
          {item.msgType === 'message' ? <EmailIcon mr={2} /> : <StarIcon mr={2} />}
          {item.email} - {item.sentAt.toDate().toDateString()}
        </Box>
      );
    }
  };

  const deleteItem = async (item) => {
    console.log(item.id);
    let type;
    if (props.type === 'inbox') {
      type = item.msgType + 's';
    } else {
      type = props.type;
    }

    const res = await db.collection(type).doc(item.id).delete();
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
                {
                  props.item.year && <ListItem>Year: {props.item.year}</ListItem>
                }
                {
                  props.item.teamInterest &&
                  <ListItem>
                    Team Interest:
                    <UnorderedList spacing={3}>
                      <ListItem>
                        Creative: {parseInterestIcon(props.item.teamInterest.creative)}
                      </ListItem>
                      <ListItem>
                        Marketing: {parseInterestIcon(props.item.teamInterest.marketing)}
                      </ListItem>
                      <ListItem>
                        Curation: {parseInterestIcon(props.item.teamInterest.curation)}
                      </ListItem>
                      <ListItem>
                        Production: {parseInterestIcon(props.item.teamInterest.production)}
                      </ListItem>
                      <ListItem>
                        Logistics: {parseInterestIcon(props.item.teamInterest.logistics)}
                      </ListItem>
                      <ListItem>
                        Finance: {parseInterestIcon(props.item.teamInterest.finance)}
                      </ListItem>
                    </UnorderedList>
                  </ListItem>
                }
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
        }} icon={<InfoIcon />} /> : <div />
      }

      <IconButton onClick={() => {
        setAlertOpen(true);
      }} icon={<DeleteIcon />} />
    </Stack>
  );
};