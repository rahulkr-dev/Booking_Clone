import { Button, Grid,Text } from '@chakra-ui/react'
import React from 'react'

export default function TextInsideImage({text1,text2,btn,width}) {
  return (
    <Grid p='1rem' pos="absolute" top="0">
        <Text textAlign='left' mt='1rem' color='white' fontWeight='bold'>{text1}</Text>
        <Text textAlign='justify' w='16rem' color='white'>{text2}</Text>
        <Button w={width} mt="3rem" colorScheme='blue'>{btn}</Button>
    </Grid>
  )
}
