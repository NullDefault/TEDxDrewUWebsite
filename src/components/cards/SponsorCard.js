import { Center, Image } from '@chakra-ui/react';

export const SponsorCard = ({ title, url }) => {
  return (
    <Center w='100%'>
      <Image
        alt={title}
        src={url}
      />
    </Center>
  );
};