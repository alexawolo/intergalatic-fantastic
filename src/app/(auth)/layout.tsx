'use client'
import { Container } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return <Container mt='100px' w='md' bg='blue.50' p="10" borderRadius='md'>{children}</Container>;
};

export default AuthLayout;
