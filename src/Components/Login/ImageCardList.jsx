import React from 'react'
import { Box, Image, Stack,Center ,Text} from "@chakra-ui/react"

export default function ImageCardList() {
    return (
        <Box pt="1rem">
            <Stack direction='row' gap="1rem">
                <Center boxSize="80px" border="1px solid gray" borderRadius={4}>
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://t3.ftcdn.net/jpg/03/00/02/06/240_F_300020628_2nRuwvJ2FwzfQpQ3XRVpW90hvZSjaXFT.jpg'
                        alt='Dan Abramov'
                    />
                </Center>
                <Center boxSize="80px"border="1px solid gray" borderRadius={4}>
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004__340.png'
                        alt='Dan Abramov'
                    />
                </Center>
                <Center boxSize="80px" border="1px solid gray" borderRadius={4}>
                    <Image
                        boxSize='30px'
                        objectFit='cover'
                        src='https://t4.ftcdn.net/jpg/03/92/71/99/240_F_392719944_L0LYv3e7QozB2tsj3CfUN0HPC8eZQOWb.jpg'
                        alt='Dan Abramov'
                    />
                </Center>
            </Stack>
           <Text fontSize="15px" p="1rem" fontWeight="bold" color="#0000FF" >More way to sign in</Text> 
        </Box>
    )
}
