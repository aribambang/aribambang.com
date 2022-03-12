import React from 'react';
import {
  HStack,
  Button,
  useColorMode,
  Text,
  useColorModeValue,
  ButtonProps,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import Container from '../components/container';
import NextLink from 'next/link';
import Link from './link';
import { GithubLogo, LinkedinLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react';

const Footer = () => {
  const date = new Date().getFullYear();

  interface FooterLinkProps extends ButtonProps {
    href: string;
    name: string;
  }

  function FooterLink(props: FooterLinkProps) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          color={useColorModeValue('neutral.800', 'neutralD.800')}
          _hover={{ color: useColorModeValue('neutral.1000', 'neutralD.1000') }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container>
      <HStack justify="space-between" w="100%" display={{ base: 'none', md: 'flex' }} py={4}>
        <Text fontSize="sm" color={useColorModeValue('neutral.800', 'neutralD.800')}>
          © {date} Ari Bambang K{' '}
        </Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com/aribambangg/" variant="" unstyled target="_blank">
            <IconButton
              aria-label=""
              size="sm"
              icon={<Icon as={TwitterLogo} weight="fill" />}
              color={useColorModeValue('neutral.800', 'neutralD.1000')}
            ></IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/aribambang/" variant="" unstyled target="_blank">
            <IconButton
              aria-label=""
              size="sm"
              icon={<LinkedinLogo weight="fill" />}
              color={useColorModeValue('neutral.800', 'neutralD.1000')}
            ></IconButton>
          </Link>
          <Link href="https://github.com/aribambang" variant="" unstyled target="_blank">
            <IconButton
              aria-label=""
              size="sm"
              icon={<GithubLogo weight="fill" />}
              color={useColorModeValue('neutral.800', 'neutralD.1000')}
            ></IconButton>
          </Link>
        </HStack>
      </HStack>
    </Container>
  );
};

export default Footer;
