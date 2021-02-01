import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay, Button,
  HStack, IconButton,
  Text,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { db } from '../../firebase';
import { useRef, useState } from 'react';

export const InterfaceItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const parseItem = (item) => {
    if (props.type === 'talks') {
      return item.title;
    }
  };

  const deleteItem = async (item) => {
    // DOES NOT WORK
    console.log(item.id)
    const res = await db.collection(props.type).doc(item.id).delete();
    setIsOpen(false);
    await props.fetchData();

  };

  return (
    <HStack key={props.index}>
      <Text>
        {parseItem(props.item)}
      </Text>

      <AlertDialog
        isOpen={isOpen}
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
              <Button colorScheme="red" ml={3} onClick={()=>deleteItem(props.item)}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      <IconButton onClick={() => {
        setIsOpen(true)
      }} icon={<DeleteIcon />} />
    </HStack>
  )
}