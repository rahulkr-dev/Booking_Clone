import React from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Header from '../Components/Login/Header'
import { InputF } from '../Components/Login/Input'
import ButtonF from '../Components/Login/Button'
import InputFooter from '../Components/Login/InputFooter'
import { Badge, Box } from "@chakra-ui/react"

export default function CreatePassword() {
    return (
        <VStack m="auto" width="360px">
            <Header data="Create password" text="Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers." />
            <InputF type="password" lable="Password" />
            <InputF type="password" lable="Confirm Password" padding={true} />
            <ButtonF variant="solid" bg="blue" color="white" btn="Create account" />

            <InputFooter />
        </VStack>
    )
}
