import { useState } from 'react';
import { NavLogo } from './NavLogo';
import { NavContainer } from './NavContainer';
import { MenuToggle } from './MenuToggle';
import { MenuLinks } from './MenuLinks';
import { MenuItem } from './MenuItem';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useBreakpointValue } from '@chakra-ui/react';

export const TopNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const colorSwitch = useBreakpointValue({ base: null, md: <ColorModeSwitcher /> });


  return (
    <NavContainer {...props}>
      <NavLogo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} children={[
        <MenuItem to="/">Home</MenuItem>,
        <MenuItem to="/about">About</MenuItem>,
        <MenuItem to="/blog">Blog</MenuItem>,
        <MenuItem to="/videos">Videos</MenuItem>,
        colorSwitch,
      ]} />
    </NavContainer>
  );
};