import { Center, Image } from '@chakra-ui/react';

export const SponsorCard = ({url}) => {
  return (
    <Center w='100%'>
      <Image
        style={{
          mixBlendMode: "multiply"
        }}
        src={url}
      />
    </Center>
  )
}