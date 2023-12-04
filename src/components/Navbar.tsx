'use client';
import { Container, Flex, Link, Text } from '@chakra-ui/react';
import UserAccountNav from './UserAccountNav';
import { useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession()
  
  return <Flex w='100%' top='0' py='2' bg='gray.100' pos='fixed' borderBottom='1px' borderBottomColor='gray'>
        <Container display='flex' alignItems="center" justifyContent="space-between" m='0' minW='100%'>
            <Link href='/'>
            <Text fontSize='2xl'>👽</Text>
            </Link>
            {session?.user ? (
                <Flex alignItems='center'>
                    <UserAccountNav />
                </Flex>
            ) : (
            <Link colorScheme="black" href='/sign-in'>
                Sign in
            </Link>
            )}
        </Container>
    </Flex>
};

export default Navbar;
