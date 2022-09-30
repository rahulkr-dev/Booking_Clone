import React from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Header from '../Components/Login/Header'
import { InputF } from '../Components/Login/Input'
import ButtonF from '../Components/Login/Button'
import InputFooter from '../Components/Login/InputFooter'
import OnCrossText from '../Components/Login/OnCrossText'
import ImageCardList from '../Components/Login/ImageCardList'

export default function SignInOrCreate() {
    return (
        <VStack m="auto" width="360px">
            <Header data="Sign in or create an account" />
            <InputF type="email" lable="Email address" />
            <ButtonF btn="Continue with email" />
            <OnCrossText data="or use one of these options" />
            <ImageCardList />
            <InputFooter />

        </VStack>
    )
}
