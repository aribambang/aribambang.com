import React from 'react';
import { SlideFade } from '@chakra-ui/react';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return <SlideFade in>{children}</SlideFade>;
};

export default PageTransition;
