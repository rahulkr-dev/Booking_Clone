import { Box, Checkbox, Heading, Input, Button, Text, Flex, Center } from '@chakra-ui/react'
import React from 'react'

export default function Footer() {
    return (
        <div >
            <Center h="254px" bg='#003580'>
                <Box w="35rem">
                    <Heading color='white'>Save time, save money!</Heading>
                    <Text color='white'>sign up and we'll send the best deals to you</Text>
                    <Flex m="10px 0 6px 0">
                        <Input bg='white' h='3.2rem' placeholder='Your Email' />
                        <Button colorScheme='blue' h="3.2rem" ml="1rem">Subscribe</Button></Flex>
                    <Flex><Checkbox color='white' >send me a link to get the FREE Booking.com app!</Checkbox>
                    </Flex>
                </Box>


            </Center>

        </div>
    )
}
