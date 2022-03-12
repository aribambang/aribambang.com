import React from 'react';
import { Center, CenterProps } from '@chakra-ui/react';
import Container from './container';

interface SectionProps extends CenterProps {
  full: boolean;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const { full, children, ...rest } = props;

  return (
    <Center as="section" {...rest} w="100%">
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
};

export default Section;
