import { Box } from '@chakra-ui/react';
import spaceBg from '../assets/WEBM/minimalistGifBg.webm';
import logo from '../assets/SVG/swooshX.svg';


export const Logo = (props) => {
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
    }}
  />;
};
