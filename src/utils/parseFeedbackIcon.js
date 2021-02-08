import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { tedxRed } from './tedxColors';

export const parseFeedbackIcon = (val) => {
  if (val) {
    return (<CheckIcon color={'green.500'} />);
  } else {
    return (<CloseIcon color={tedxRed} />);
  }
};