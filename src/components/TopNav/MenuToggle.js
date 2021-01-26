import { Box } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      <ColorModeSwitcher mx={6}/>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};