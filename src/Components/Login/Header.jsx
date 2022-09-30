import React, { useContext } from 'react'
import {Box,Heading,Text} from "@chakra-ui/react"
import { authContext } from '../../Context/AuthContext/AuthContextProvider'
const style = {textAlign:"start",fontSize:"14px",marginTop:"5px"}
export default function Header({data,text}) {
  const {setCurrentEmail,currentEmail} = useContext(authContext)

    if(!text) text=null
  return (
    <Box w="100%">
        <Heading textAlign="left" as="h1" fontSize="27px">{data}</Heading>
        <p style={style}  >{text}</p>
       <Text fontWeight="bold" textAlign="start">{currentEmail}</Text>
    </Box>
  )
}
