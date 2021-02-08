import { useEffect, useState } from 'react';
import { NavLogo } from './NavLogo';
import { NavContainer } from './NavContainer';
import { MenuToggle } from './MenuToggle';
import { MenuLinks } from './MenuLinks';
import { MenuItem } from './MenuItem';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useBreakpointValue } from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';
import { db } from '../../firebase';

export const TopNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const colorSwitch = useBreakpointValue({ base: null, md: <ColorModeSwitcher /> });
  const [ticketToggle, setTicketState] = useState(false);
  const [link, updateLink] = useState('');

  const fetchData = async () => {
    const response = db.collection('ticketData').doc('04AySeIdnaNag5ZRQ10L');
    const dbData = await response.get();
    const ticketData = dbData.data();
    setTicketState(ticketData.toggle);
    updateLink(ticketData.link);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const ticketLink = ticketToggle ? <MenuItem color={tedxRed} to={link}>Tickets</MenuItem> : <div />;

  return (
    <NavContainer {...props}>
      <NavLogo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} children={[
        ticketLink,
        <MenuItem to="/">Home</MenuItem>,
        <MenuItem to="/about">About</MenuItem>,
        <MenuItem to="/blog">Blog</MenuItem>,
        <MenuItem to="/videos">Videos</MenuItem>,
        colorSwitch,
      ]} />
    </NavContainer>
  );
};