import { useColorModeValue } from '@chakra-ui/react';

const useColors = () => {
  const internalLink = useColorModeValue('primaryD.200', 'primary.600');
  const internalLinkBorder = useColorModeValue('primaryD.200', 'primary.200');
  const internalLinkHoverBorder = useColorModeValue('primaryD.200', 'primary.200');
  const internalLinkHover = useColorModeValue('primaryD.200', 'primary.200');
  const internalLinkHoverBg = useColorModeValue('primaryD.200', 'primary.200');

  const externalLink = useColorModeValue('primaryD.300', 'primary.300');
  const externalLinkBorder = useColorModeValue('primary.400', 'primary.400');
  const externalLinkHover = useColorModeValue('primaryD.50', 'primaryD.200');
  const externalLinkHoverBg = useColorModeValue('primary.400', 'primary.400');

  return {
    internalLink,
    internalLinkBorder,
    internalLinkHoverBorder,
    internalLinkHover,
    internalLinkHoverBg,
    externalLink,
    externalLinkBorder,
    externalLinkHover,
    externalLinkHoverBg,
  };
};

export default useColors;
