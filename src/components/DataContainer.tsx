'use client';
import { Flex, Text, Image } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '@/lib/apollo-client';


const DataContainer = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <Text mt='200px' textAlign='center' fontSize='xl' fontWeight='bold'>Loading...</Text>

    if (error) return <Text mt='200px' textAlign='center' fontSize='lg'>Error : {error.message}</Text>

  return <>
    <Text mt="125px" fontWeight='bold' fontSize='xl'>Discover Intergalactic Travel Locations</Text>
    { data.locations.map(({ id, name, description, photo }: {id: number, name: string, description: string, photo: string}) => (
        <Flex key={id} mt="20px" mb="40px" flexDir='column'>
            <Text fontSize='lg' fontWeight='bold' mb='10px'>{name}</Text>
            <Flex w='full' justifyContent='space-between'>
                <Image width="300" maxH="200" alt="location-reference" src={`${photo}`} />
                <Flex flexDir='column' px='8'>
                    <Text fontWeight='bold'>About this location:</Text>
                    <Text>{description}</Text>
                </Flex>
            </Flex>
        </Flex> 
        ))}
  </>
};

export default DataContainer;