import { Box, useColorModeValue } from '@chakra-ui/react';
import spaceBg from '../assets/GIF/minimalistGifBg.gif';
import logo from '../assets/SVG/swooshX.svg';


export const Logo = (props) => {
  const filter = useColorModeValue(`brightness(1)`, `brightness(.75)`);

  return <Box
    {...props}
    style={{
      width: `60vmin`,
      height: `60vmin`,
      backgroundImage: `url(${spaceBg})`,
      backgroundSize: `fill`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      maskImage: `url(${logo})`,
      webkitMask: `url(${logo})`,
      maskSize: `50vmin`,
      webkitMaskSize: `50vmin`,
      maskRepeat: `no-repeat`,
      webkitMaskRepeat: `no-repeat`,
      maskPosition: `center`,
      webkitMaskPosition: `center`,
      filter: filter,
    }}
  />;
};
