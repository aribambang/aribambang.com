import type { NextPage } from 'next';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import PageTransition from '../components/page-transition';
import Section from '../components/section';
import Link from '../components/link';
import TechStack from '../components/tech-stack';

const Home: NextPage = () => {
  return (
    <Box>
      <PageTransition>
        <VStack spacing={12}>
          <Section full={false}>
            <VStack spacing={4} align="start" fontSize="2xl">
              <Heading size="xl">Hey, I'm Ari Bambang Kurniawan 👋</Heading>
              <VStack>
                <Text>
                  I’m a Software Engineer from Indonesia 🇮🇩. I work at{' '}
                  <Link
                    unstyled={false}
                    variant="text"
                    href="https://info.populix.co"
                    target="_blank"
                  >
                    Populix
                  </Link>{' '}
                  as a Backend Engineer.
                </Text>
              </VStack>
            </VStack>
          </Section>

          <Section full={false}>
            <TechStack />
          </Section>
        </VStack>
      </PageTransition>
    </Box>
  );
};

export default Home;
