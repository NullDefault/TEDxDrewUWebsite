import { Flex, useColorMode } from '@chakra-ui/react';

export const NavContainer = ({ children, ...props }) => {
  const { colorMode } = useColorMode();
  const color = { light: 'black', dark: 'white' };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={8}
      bg="primary.600"
      color={color[colorMode]}
      {...props}
    >
      {children}
    </Flex>
  );
};