import React from 'react'
import { Box, FormLabel, Input } from "@chakra-ui/react"

export function InputF({lable,type,padding,value,handleChange,name}) {
  if(padding==true)padding="0"
  else padding="2rem"
    return (
        <Box pt={padding} pb="10px" w="100%">
            <FormLabel>{lable}</FormLabel>
            <Input name={name} value={value} onChange={(e)=>handleChange(e)}  type={type} />
        </Box>
    )
}
