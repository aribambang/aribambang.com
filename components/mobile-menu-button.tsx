import React from 'react';
import { VStack, Text, useColorModeValue, Icon } from '@chakra-ui/react';

interface MobileMenuButtonProps {
  label: string;
  icon: any;
  onClick: React.MouseEventHandler;
}

const MobileMenuButton = (props: MobileMenuButtonProps) => {
  const { label, icon, onClick, ...rest } = props;
  return (
    <VStack
      as="button"
      spacing={0}
      rounded="md"
      px={6}
      onClick={onClick}
      {...rest}
      color={useColorModeValue('neutral.1100', 'neutralD.1100')}
    >
      <Icon>{icon}</Icon>

      <Text
        fontSize="xs"
        fontWeight="500"
        color={useColorModeValue('neutral.1000', 'neutralD.1000')}
      >
        {label}
      </Text>
    </VStack>
  );
};

export default MobileMenuButton;
