import React from 'react';
import { motion } from 'framer-motion';
import { Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MotionButton = motion(Button);

const MobileMenuItem = ({ href, title }: { href: string; title: string }) => {
  let isActive = false;
  const { pathname } = useRouter();

  if (href !== '/') {
    const [, group] = href.split('/');

    isActive = pathname.includes(group);
  } else {
    if (href === pathname) {
      isActive = true;
    }
  }

  return (
    <Link passHref href={href}>
      <MotionButton
        size="lg"
        aria-current={isActive ? 'page' : undefined}
        w="100%"
        variants={variants}
        bg={useColorModeValue('neutral.100', 'neutralD.100')}
        _activeLink={{
          color: useColorModeValue('neutral.1100', 'neutralD.1100'),
          bg: useColorModeValue('neutral.200', 'neutralD.400'),
        }}
        _hover={{
          backgroundColor: useColorModeValue('neutral.300', 'neutralD.300'),
        }}
      >
        {title}
      </MotionButton>
    </Link>
  );
};

export default MobileMenuItem;