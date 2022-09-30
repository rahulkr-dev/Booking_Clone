import React from 'react'
import {Box,Button} from "@chakra-ui/react"

export default function ButtonF({btn,bg,color,variant,size,handleClick,disable}) {
    if(!size) size="lg";
    if(!disable) disable=false;
  return (
    <Box pb="10px" w="100%">
         <Button disabled={disable.pass!=disable.confirmPass}  onClick={()=>handleClick()} width="100%" size={size}  color={color} w="full" colorScheme={bg} variant={variant}>{btn}</Button>
    </Box>
  )
}
