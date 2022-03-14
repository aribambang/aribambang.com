import React from 'react';
import { IconType } from 'react-icons';
import { DiReact, DiPython, DiMysql } from 'react-icons/di';
import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiReact,
} from 'react-icons/si';
import {
  Box,
  HStack,
  Text,
  useColorModeValue,
  Icon,
  SimpleGrid,
  Heading,
  VStack,
} from '@chakra-ui/react';
import Link from '../components/link';

type IconMeta = {
  color: string;
  text: string;
  type: string;
  link: string;
  icon: IconType;
};

type IconSet = {
  [key in string]: IconMeta;
};

const iconSet: IconSet = {
  node: {
    color: '#689f63',
    text: 'NodeJS',
    type: 'Programming Language',
    link: 'https://nodejs.org',
    icon: SiNodedotjs,
  },
  python: {
    color: '#3776ab',
    text: 'Python',
    type: 'Programming Language',
    link: 'https://python.org',
    icon: DiPython,
  },
  go: { color: '#7fd5ea', text: 'Golang', type: 'Programming Language', link: '', icon: SiGo },
  ts: {
    color: '#3178c6',
    text: 'TypeScript',
    type: 'Programming Language',
    link: 'https://www.typescriptlang.org/',
    icon: SiTypescript,
  },
  react: {
    color: '#61dafb',
    text: 'React',
    type: 'Javascript Library',
    link: 'https://reactjs.org/',
    icon: DiReact,
  },
  next: {
    color: 'https://nextjs.org/',
    text: 'Next',
    type: 'React Framework',
    link: '',
    icon: SiNextdotjs,
  },
  mysql: {
    color: '#00758f',
    text: 'MySQL',
    type: 'Database',
    link: 'https://mysql.com/',
    icon: DiMysql,
  },
  postgres: {
    color: '#336791',
    text: 'PostgreSQL',
    type: 'Database',
    link: 'https://www.postgresql.org/',
    icon: SiPostgresql,
  },
  mongo: {
    color: '#589636',
    text: 'MongoDB',
    type: 'Database',
    link: 'https://www.mongodb.com/',
    icon: SiMongodb,
  },
  reactnative: {
    color: '#61dafb',
    text: 'React Native',
    type: 'Mobile',
    link: 'https://reactnative.dev/',
    icon: SiReact,
  },
};

interface RenderIconProps {
  iconData: IconMeta;
}

function RenderIcon({ iconData }: RenderIconProps): React.ReactElement {
  const { color, icon, text, type, link } = iconData;
  return (
    <Link href={link} unstyled variant="" target="_blank">
      <HStack
        p={4}
        bg={useColorModeValue('white', 'neutralD.100')}
        rounded="lg"
        borderWidth="1px"
        borderColor={useColorModeValue('neutral.400', 'neutralD.400')}
        w="100%"
        textAlign="left"
        align="start"
        spacing={4}
        transition="all 0.25s"
        transition-timing-function="spring(1 100 10 10)"
        _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
      >
        <Box
          rounded="lg"
          p={2}
          position="relative"
          overflow="hidden"
          lineHeight={0}
          boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
        >
          <Box position="absolute" top={0} bottom={0} left={0} right={0} opacity={0.25}></Box>
          <Icon as={icon} height={10} width={10} color={useColorModeValue(color, 'currentColor')} />
        </Box>
        <VStack align="start" justify="flex-start" spacing={1} maxW="lg" h="100%">
          <VStack spacing={0} align="start" flexGrow="1">
            <Text fontWeight="bold" fontSize="md" noOfLines={2}>
              {text}
            </Text>
            <Text fontSize="xs" color={useColorModeValue('neutral.900', 'neutralD.900')}>
              {type}
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Link>
  );
}

const TechStack = () => {
  return (
    <VStack align="start" spacing={8}>
      <Heading size="lg">Technologies</Heading>
      <Text>These are the toolstacks I have hands-on experience on</Text>
      <SimpleGrid columns={[2, 3]} spacing={4} mt={8} width={'100%'}>
        {Object.entries(iconSet).map(([iconKey, iconValue]) => (
          <RenderIcon key={iconKey} iconData={iconValue} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default TechStack;
