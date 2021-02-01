import {
  VStack
} from '@chakra-ui/react';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { InterfaceItem } from './InterfaceItem';

export const FirebaseDocumentList = (props) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    setData([]);
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

  return (
    <VStack spacing={8}>
      {
        data.map((item, i) => (
          <InterfaceItem type={props.type} item={item} index={i} fetchData={fetchData}/>
        ))
      }
    </VStack>
  );
};