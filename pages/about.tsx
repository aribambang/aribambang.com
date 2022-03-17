import React from 'react';
import Container from '../components/container';
import { Heading } from '@chakra-ui/react';
import SEO from '../components/seo';

const About = () => {
  return (
    <Container>
      <SEO title="About" />
      <Heading size="xl">About</Heading>
    </Container>
  );
};

export default About;
