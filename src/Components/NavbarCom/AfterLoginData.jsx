import { BellIcon } from '@chakra-ui/icons'
import { Avatar, Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AfterLoginData() {
    return (
        <Flex alignItems='center' gap="2rem" >
            <Box pos="relative" ml="1.5rem">
                <BellIcon w={9} h={9} color="black" />
                <Center fontWeight='bold' pos='absolute' top='4px' left="18px" color='white' fontSize="10px" bg='red' boxSize='1.1rem' borderRadius='full'>5</Center>
            </Box>
            <Box border='2px solid white' p="5px 7px" borderRadius={2} >
                <Link><Text color='white' >List your property</Text></Link>
            </Box>
            <Box>
                <Link>
                    <Flex>
                        <Avatar border='3px solid yellow' size='sm' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' />
                        <Box ml="10px" lineHeight='18px' >
                            <Text fontSize='14px' color='white' fontWeight='bold' >Your account</Text>
                            <Text fontSize='12px' color='yellow.500'>Genius Level 1</Text>
                        </Box>
                    </Flex>
                </Link>
            </Box>



        </Flex>
    )
}
