import React from 'react'
import {Box,Heading,Text} from "@chakra-ui/react"
const style = {textAlign:"start",fontSize:"14px",marginTop:"5px"}
export default function Header({data,text}) {
    if(!text) text=null
  return (
    <Box w="100%">
        <Heading textAlign="left" as="h1" fontSize="27px">{data}</Heading>
        <p style={style}  >{text}</p>
       <Text fontWeight="bold" textAlign="start"></Text>
    </Box>
  )
}
