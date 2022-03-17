import React from 'react';
import { Heading } from '@chakra-ui/react';
import Container from '../components/container';
import SEO from '../components/seo';

const Blog = () => {
  return (
    <Container>
      <SEO title="Blog" />
      <Heading size="xl">About</Heading>
    </Container>
  );
};

export default Blog;
