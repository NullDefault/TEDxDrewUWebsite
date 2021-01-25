import {useState} from "react";
import {NavLogo} from "./NavLogo";
import {NavContainer} from "./NavContainer";
import {MenuToggle} from "./MenuToggle";
import {MenuLinks} from "./MenuLinks";
import {MenuItem} from "./MenuItem";
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const TopNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <NavContainer {...props}>
      <NavLogo/>
      <MenuToggle toggle={toggle} isOpen={isOpen}/>
      <MenuLinks isOpen={isOpen} children={[
        <MenuItem to="/about" style={{ fontSize: 24 }}>About</MenuItem>,
        <MenuItem to="/blog" style={{ fontSize: 24 }}>Blog</MenuItem>,
        <MenuItem to="/videos" style={{ fontSize: 24 }}>Videos</MenuItem>,
        <MenuItem to="/" style={{ fontSize: 24 }}>Home</MenuItem>,
        <ColorModeSwitcher/>
      ]}/>
    </NavContainer>
  );
};