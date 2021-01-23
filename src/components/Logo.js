import React from 'react';
import { Box } from '@chakra-ui/react';
import spaceBg from '../assets/GIF/space.gif';
import logo from '../assets/SVG/swooshX.svg';


export const Logo = props => {
  return <Box
    style={{
      width: `60vw`,
      height: `60vh`,
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
      webkitMaskPosition: `center`
    }}
  />;

};
