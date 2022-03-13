import React from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  useDisclosure,
  VStack,
  Tooltip,
  SimpleGrid,
  useColorModeValue,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';
import { MenuIcon } from '@heroicons/react/solid';
import MobileMenuButton from './mobile-menu-button';
import MobileMenuItem from './mobile-menu-item';
import ThemeToggle from './theme-toggle';
import Link from './link';

const MobileMenuToggle = ({ mobile }: { mobile?: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Box>
      <Tooltip label="Newsletter">
        <MobileMenuButton label="Menu" icon={<MenuIcon />} onClick={onOpen} />
      </Tooltip>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay>
          <DrawerContent borderTopRadius="6px" bg={useColorModeValue('neutral.50', 'neutralD.50')}>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody pb={4}>
              <VStack spacing={4}>
                <VStack w="100%">
                  <MobileMenuItem href="/" title="Home" />
                  <SimpleGrid columns={2} spacing={2} w="100%">
                    <MobileMenuItem href="/about" title="About" />
                    <MobileMenuItem href="/blog" title="Blog" />
                    <MobileMenuItem href="/projects" title="Projects" />
                    <MobileMenuItem href="/tools" title="Tools" />
                  </SimpleGrid>
                </VStack>

                <Divider />
                <HStack justify="space-between" w="100%">
                  <HStack spacing={2}>
                    <Link
                      href="https://twitter.com/aribambangg/"
                      target="_blank"
                      unstyled
                      variant=""
                    >
                      <IconButton
                        aria-label=""
                        size="sm"
                        icon={<TwitterLogo weight="fill" />}
                        color={useColorModeValue('neutral.800', 'neutralD.1000')}
                      ></IconButton>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/aribambang/"
                      unstyled
                      target="_blank"
                      variant=""
                    >
                      <IconButton
                        aria-label=""
                        size="sm"
                        icon={<LinkedinLogo weight="fill" />}
                        color={useColorModeValue('neutral.800', 'neutralD.1000')}
                      ></IconButton>
                    </Link>
                    <Link href="https://github.com/aribambang" unstyled target="_blank" variant="">
                      <IconButton
                        aria-label=""
                        size="sm"
                        icon={<GithubLogo weight="fill" />}
                        color={useColorModeValue('neutral.800', 'neutralD.1000')}
                      ></IconButton>
                    </Link>
                  </HStack>
                  <ThemeToggle mobile />
                </HStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default MobileMenuToggle;
