import {
  VStack, Divider, Box
} from '@chakra-ui/react';
import { db } from '../../firebase';
import { useEffect, useState } from 'react';
import { InterfaceItem } from './InterfaceItem';

export const FirebaseDocumentList = (props) => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    setData([]);
    let data;
    if(props.type === 'inbox'){
      const msgs_response = db.collection('messages');
      const apps_response = db.collection('applications');

      const msgs_data = await msgs_response.get();
      const apps_data = await apps_response.get();

      msgs_data.docs.forEach(item => {
        const id = item.id;
        const itemData = item.data();
        itemData.id = id;
        itemData.msgType = 'message';
        setData(data => ([...data, itemData]));
      });

      apps_data.docs.forEach(item => {
        const id = item.id;
        const itemData = item.data();
        itemData.id = id;
        itemData.msgType = 'application';
        setData(data => ([...data, itemData]));
      });
    }else{
      const response = db.collection(props.type);
      data = await response.get();
      data.docs.forEach(item => {
        const id = item.id;
        const itemData = item.data();
        itemData.id = id;
        setData(data => ([...data, itemData]));
      });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <VStack spacing={8}>
      {
        data.map((item, i) => (
          <Box>
            <Divider mb={6}/>
            <InterfaceItem type={props.type} item={item} index={i} fetchData={fetchData}/>
          </Box>

        ))
      }
    </VStack>
  );
};