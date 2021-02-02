import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

export const parseInterestIcon = (val) => {
  if(val){
    return (<CheckIcon/>)
  }else{
    return (<CloseIcon/>)
  }
}