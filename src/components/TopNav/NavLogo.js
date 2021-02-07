import { Box, Image } from '@chakra-ui/react';
import logo from '../../assets/PNG/ogLogo.png';


export const NavLogo = (props) => {
  return (
    <Box {...props}>
      <a href="/">
        <Image w={'6vmin'} src={logo} />
      </a>
    </Box>
  );
};