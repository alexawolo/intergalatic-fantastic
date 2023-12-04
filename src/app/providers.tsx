'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

export function Providers({ children, session }: { children: React.ReactNode, session: Session }) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <CacheProvider>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </CacheProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}