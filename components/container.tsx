import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

const Container = (props: BoxProps) => {
  return <Box w="full" mx="auto" maxW="3xl" px={{ base: '6', md: '8' }} {...props} />;
};

export default Container;
