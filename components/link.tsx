import React from 'react';
import NextLink from 'next/link';
import { chakra, ChakraProps } from '@chakra-ui/react';
import useColors from '../hooks/useColors';

interface LinkProps extends ChakraProps {
  href: string;
  unstyled: boolean;
  variant: string;
  target: string;
}

const Link: React.FC<LinkProps> = (props) => {
  const { href, unstyled } = props;
  const {
    internalLink,
    internalLinkBorder,
    internalLinkHover,
    internalLinkHoverBg,
    internalLinkHoverBorder,
    externalLink,
    externalLinkBorder,
    externalLinkHover,
    externalLinkHoverBg,
  } = useColors();
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  return unstyled ? (
    isInternalLink ? (
      <NextLink passHref href={href}>
        <chakra.a {...props} />
      </NextLink>
    ) : (
      <chakra.a {...props} />
    )
  ) : isInternalLink ? (
    <NextLink passHref href={href}>
      <chakra.a
        borderBottom="2px"
        borderRadius="1px"
        transition="all 0.3s"
        transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
        borderColor={internalLinkBorder}
        color={internalLink}
        _hover={{
          borderColor: internalLinkHoverBorder,
          color: internalLinkHover,
          backgroundColor: internalLinkHoverBg,
        }}
        {...props}
      />
    </NextLink>
  ) : (
    <chakra.a
      borderBottom="2px"
      borderRadius="1px"
      borderColor={externalLinkBorder}
      color={externalLink}
      transition="all 0.3s"
      transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        color: externalLinkHover,
        backgroundColor: externalLinkHoverBg,
      }}
      {...props}
    />
  );
};

export default Link;
