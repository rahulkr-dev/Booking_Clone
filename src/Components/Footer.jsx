import { Box, Checkbox, Heading, Input, Button, Text, Flex, Center, Grid, Image } from '@chakra-ui/react'
import React from 'react'
import { FooterLastSection } from './FooterLastSection'

export default function Footer() {
    return (
        <div >
            <Center h="254px" bg='#00224F'>
                <Box w="35rem">
                    <Heading color='white'>Save time, save money!</Heading>
                    <Text color='white'>sign up and we'll send the best deals to you</Text>
                    <Flex m="10px 0 6px 0">
                        <Input bg='white' h='3.2rem' placeholder='Your Email' />
                        <Button p="0 1.5rem" colorScheme='blue' h="3.2rem" ml="1rem">Subscribe</Button></Flex>
                    <Flex><Checkbox color='white' >send me a link to get the FREE Booking.com app!</Checkbox>
                    </Flex>
                </Box>
            </Center>
            <Center borderBottom='1px solid white' p="1rem 0" bg="#003580">
                <Button border="1px solid white" size="sm" background="#003580" colorScheme="#003580">List your property</Button>
            </Center>
            <Center bg="#003580">
                <Flex>
                    <Text fontSize='14px' color='white' p="0.7rem 1rem" as='u'>mobile version</Text>
                    <Text fontSize='14px' color='white' p="0.7rem 1rem" as='u'>manage your booking</Text>
                    <Text fontSize='14px' color='white' p="0.7rem 1rem" as='u'>Customer Service help</Text>
                    <Text fontSize='14px' color='white' p="0.7rem 1rem" as='u'>Become an affilate</Text>
                    <Text fontSize='14px' color='white' p="0.7rem 1rem" as='u'>Booking.com for Business</Text>
                </Flex>
            </Center>
            <FooterLastSection />
            <Center>
                <Text fontWeight='bold' color='#0071c2'>Extranet login</Text>
            </Center>
            <Text m="2rem 4rem" fontSize='12px' textAlign='start'>Copyright © 1996–2022 Booking.com™. All rights reserved.
            </Text>
            <Center m='2rem 0' fontSize='12px' >Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</Center>
            <Center mb="2rem" gap="2.4rem">
                <Image src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png"></Image>
                <Image src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png"></Image>
                <Image src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png"></Image>
                <Image src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png"></Image>
                <Image src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"></Image>
                <Image src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"></Image>
            </Center>



        </div>
    )
}
