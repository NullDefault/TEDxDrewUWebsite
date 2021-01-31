import {
  Box,
  useColorModeValue,
  VStack,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Heading,
} from '@chakra-ui/react';
import {auth} from '../firebase';
import { useHistory } from 'react-router-dom';
import { tedxRed } from '../utils/tedxColors';
import { useEffect, useState } from 'react';

export const Login = () => {
  const color = useColorModeValue('black', 'white');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).then(res => {
      history.push('/admin');
    }).catch(err => {
      setError(err.toString());
    });
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) history.push('/admin')
    })
  }, [])


  return (
    <Box textAlign="center" bg="primary.600" color={color}>
      <VStack py='12vmin' mx='auto' w={['80%', '40%']} minH="100vh">
        <Heading as="h1" size="3xl" color={tedxRed} pb={8}>
          Admin Login
        </Heading>
        <Heading as="h3" size="md" color={tedxRed} pb={8}>
          If you are a regular user, please turn away. This page is not meant for you.
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" onChange={e => setEmail(e.currentTarget.value)} />
        </FormControl>
        <FormControl id="password" pb={8} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={e => setPassword(e.currentTarget.value)} />
        </FormControl>
        <Text pb={8} color={tedxRed}>
          {error}
        </Text>
        <Button
          loadingText="Submitting"
          colorScheme="red"
          variant="solid"
          size="lg"
          onClick={signIn}
        >
          Login
        </Button>
      </VStack>
    </Box>
  );
};