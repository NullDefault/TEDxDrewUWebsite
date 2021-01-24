import { Link } from '@chakra-ui/react';
import React from 'react';

export const NavLink = (props) => {
  return (
    <Link href={props.href} fontSize="2xl" _hover={{
      color: 'red.600',
    }} {...props} />
  );
};