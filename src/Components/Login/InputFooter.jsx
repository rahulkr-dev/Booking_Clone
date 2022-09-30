import React from 'react'
import {Box,Divider,Text} from "@chakra-ui/react"
const style = {
    color:"blue"
}

export default function InputFooter() {
  return (
    <Box w="100%">
    <Box p="5px">
        <Divider orientation='horizontal'  />
        <Box m="20px 0" fontSize="12px" >By signing in or creating an account, you agree with our <span style={style} color="blue">Terms & conditions </span> and <span style={style}> Privacy statement</span></Box>
        <Divider orientation='horizontal'  />

    </Box>
    <Box p="1rem" fontSize={"13px"}>
        <Text>All rights reserved</Text>
        <Text >Copyright (2006 - 2022) - Booking.com <sup>tm</sup></Text>
    </Box>
    </Box>
  )
}
