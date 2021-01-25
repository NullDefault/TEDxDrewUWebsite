import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';
import minimalistBg from '../assets/GIF/space.gif';
import spaceBg from '../assets/GIF/minimalistGifBg.gif';
import logo from '../assets/SVG/swooshX.svg';


export const Logo = props => {

  const bg = useColorModeValue(spaceBg, minimalistBg);

  return <Box
    style={{
      width: `60vw`,
      height: `60vh`,
      backgroundImage: `url(${bg})`,
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
    }}
  />;

};
