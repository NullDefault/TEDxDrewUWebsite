import { Center, Image } from '@chakra-ui/react';

export const SponsorCard = ({ url }) => {
  return (
    <Center w='100%'>
      <Image
        src={url}
      />
    </Center>
  );
};