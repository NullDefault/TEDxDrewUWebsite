import {
  HStack,
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Text,
  VStack,
  Button,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { db } from '../../firebase';
import { useEffect, useState, useRef } from 'react';

export const FirebaseDocumentList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = db.collection(props.type);
    const data = await response.get();
    data.docs.forEach(item => {

      const id = item.id;
      const itemData = item.data();
      itemData.id = id;

      setData(data => ([...data, itemData]));
    });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

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
    setData([]);
    await fetchData();
  };

  return (
    <VStack spacing={8}>
      {
        data.map((listElement, i) => (
          <HStack key={i}>
            <Text>
              {parseItem(listElement)}
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
                    <Button colorScheme="red" ml={3}>
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
        ))
      }
    </VStack>
  );
};