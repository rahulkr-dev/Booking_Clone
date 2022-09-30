import React from 'react'
import {Box,Text,Code} from "@chakra-ui/react"
export default function OnCrossText({data}) {
  return (
    <Box >
         <Code>{data}</Code>
    </Box>
  )
}
