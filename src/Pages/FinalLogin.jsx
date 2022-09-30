import React from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Header from '../Components/Login/Header'
import { InputF } from '../Components/Login/Input'
import ButtonF from '../Components/Login/Button'
import InputFooter from '../Components/Login/InputFooter'
import { Badge, Box } from "@chakra-ui/react"

export default function FinalLogin() {
    return (
        <VStack m="auto" width="360px">
            <Header data="Enter your password" text="Please enter your Booking.com password for" />
            <InputF type="password" lable="Password" />
            <ButtonF variant="solid" bg="blue" color="white" btn="Sign in" />
            <Box p="0 0 15px 0"><Badge >or</Badge></Box>
            <ButtonF variant="outline" bg="white" color="blue" btn="Sign in with a verification link" />
            <Box>
                <ButtonF size="sm" variant="solid" bg="white" color="blue.500" btn="Forgotten your password?" />

            </Box>
            <InputFooter />
        </VStack>
    )
}
