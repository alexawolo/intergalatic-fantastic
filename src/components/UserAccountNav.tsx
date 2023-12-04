'use client';
import { signOut } from "next-auth/react";
import { Button } from '@chakra-ui/react'

const UserAccountNav = () => {
  return (
    <Button 
      onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`
    })} 
      colorScheme='red' 
      variant='solid'
    >Sign Out</Button> 
  )
}

export default UserAccountNav