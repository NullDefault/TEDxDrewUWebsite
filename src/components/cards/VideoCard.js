import { Center, Container, Heading } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

export const VideoCard = ({ title, url }) => {
  return (
    <Center w='100%'>
      <Container>
        <Heading as="h3" size="lg" textAlign="left" pb="12px">
          {title}
        </Heading>
        <ReactPlayer
          width='100%'
          controls='true'
          url={url} />
      </Container>
    </Center>
  );
};