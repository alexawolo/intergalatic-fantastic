'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { Button, Link, Text, Input, FormErrorMessage } from '@chakra-ui/react';

const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

const SignInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if(signInData?.error) {
      console.log(signInData.error);
    } else {
      router.refresh();
      router.push('/admin')
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='form-container'>
        <div className='innerFormContent'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input variant='outline' bg='white' placeholder='mail@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    variant='outline' 
                    bg='white'
                    type='password'
                    placeholder='Enter your password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormErrorMessage>Password is required.</FormErrorMessage>
              </FormItem>
            )}
          />
        </div>
        <Button type='submit' w='full' mt='30px' colorScheme='blue' variant='solid'>
          Sign in
        </Button>
      </form>
      <Text color='gray.600' fontSize='sm' mt='2px' textAlign='center'>
        If you don&apos;t have an account, please&nbsp;{' '}
        <Link color='blue.500' href='/sign-up'>
          Sign up
        </Link>
      </Text>
    </Form>
  );
};

export default SignInForm;
