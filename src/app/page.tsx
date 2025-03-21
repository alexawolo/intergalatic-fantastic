import { Container, Link, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container textAlign='center'>
      <Text fontSize='4xl' fontWeight='bold' color='purple.600' mb='4'>Welcome to the Intergalactisphere</Text>
      <Text fontSize='xl' mb='4'>Links to get started:</Text>
      <Link href='/admin' color='blue.500'>Jump into the black hole! 🧑‍🚀</Link>
      <br></br>
      <Link href='/sign-in' color='blue.500'>Sign in to enter 🛸</Link>
      <br></br>
      <Link href='/sign-up' color='blue.500'>Sign up to discover 🔭</Link>
      <br></br>
      <br></br>
      <Text fontSize='xl' mb='4'>Testing Linear integration</Text>
      <Text fontSize='xl' mb='4'>Building something...</Text>
      <Text fontSize='xl' mb='4'>Another thing...</Text>
    </Container>
    )
}
