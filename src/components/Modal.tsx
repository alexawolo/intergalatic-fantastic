'use client';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Flex, Input } from "@chakra-ui/react"
import { User } from "next-auth"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const modal = (props: {user: User | undefined}) => {  
  const [index, setIndex] = useState(0)
  const [updatedUsername, setUpdatedUsername] = useState('')
  const [updatedJobTitle, setUpdatedJobTitle] = useState('')
  const router = useRouter();
  const { data: session, update } = useSession()

  
    return <>
      <Flex justifyContent='end' alignItems='center'  w='100%' top='57px' py='2' bg='gray.50' pos='fixed'>
        <Text mr='6px'><b>Username:</b> {props.user?.username}</Text>
        {props.user?.job ? (
            <Text mr='6px'><b>Job Title:</b> {props.user?.job}</Text>
        ): null}
        <Button onClick={() => {setIndex(1)}}>Edit User Information</Button>
      </Flex>

      <Modal isOpen={index > 0} onClose={() => {setIndex(0)}} isCentered motionPreset='slideInRight'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User Information</ModalHeader>
          <ModalCloseButton onClick={() => router.refresh()}/>
          
          { index === 1 && (
            <>
                <ModalBody>
                    <Text fontSize='lg'>Update Username</Text>
                    <Flex minW='full' justifyContent='space-between' alignItems='center'>
                        <Input type='text' defaultValue={updatedUsername} placeholder='Enter updated username' onChange={(e) => {setUpdatedUsername(e.target.value)}}/>
                        <Button onClick={() => update({username: updatedUsername})}>Update</Button>
                    </Flex>

                </ModalBody>
                <ModalFooter>
                    <Button variant='ghost' onClick={() => {setIndex(2)}}>Edit Job Title</Button>
                </ModalFooter>
            </>
          )}
          { index === 2 && (
            <>
                <ModalBody>
                    <Text fontSize='lg'>Edit Job Title</Text>
                    <Flex minW='full' justifyContent='space-between' alignItems='center' h='35px' zIndex={0}>
                        <Input type='text' defaultValue={updatedJobTitle} placeholder='Enter updated job title' onChange={(e) => {setUpdatedJobTitle(e.target.value)}}/>
                        <Button onClick={() => update({job: updatedJobTitle})}>Update</Button>
                    </Flex>
                </ModalBody>
                <ModalFooter>
                    <Button variant='ghost' onClick={() => {setIndex(1)}}>Edit Username</Button>
                </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
}

export default modal