import { Link, Text } from '@chakra-ui/react';
import { tedxRed } from '../../utils/tedxColors';

export const MenuItem = ({ children, isLast, to = '', ...rest }) => {
  return (
    <Link href={to}
          fontSize={22}
          _hover={{ color: tedxRed, fontSize: 29}}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};