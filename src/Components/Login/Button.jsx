import React from 'react'
import {Box,Button} from "@chakra-ui/react"

export default function ButtonF({btn,bg,color,variant,size,handleClick}) {
    if(!size) size="lg"
  return (
    <Box pb="10px" w="100%">
         <Button onClick={()=>handleClick()} width="100%" size={size}  color={color} w="full" colorScheme={bg} variant={variant}>{btn}</Button>
    </Box>
  )
}
