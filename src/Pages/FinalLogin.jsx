import React, { useContext, useState } from 'react'
import { Alert, AlertIcon, Container, VStack } from '@chakra-ui/react'
import Header from '../Components/Login/Header'
import { InputF } from '../Components/Login/Input'
import ButtonF from '../Components/Login/Button'
import InputFooter from '../Components/Login/InputFooter'
import { Badge, Box } from "@chakra-ui/react"
import { authContext } from '../Context/AuthContext/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import { isAuth } from '../Context/AuthContext/authAction'

export default function FinalLogin() {
    const { loginData, dispatch, setCurrentEmail, currentEmail } = useContext(authContext)
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleChange = (e) => {
        setPassword(e.target.value)
    }
    const handleClick = () => {
        // console.log(loginData.userData)
        let filter = loginData.userData.filter(item => item.email == currentEmail);
        console.log(filter)
        if (filter[0].password == password) {
            dispatch(isAuth)
            navigate("/")
            console.log('finally')
        } else {
         alert('password was not correct')
        }
    }

    return (
        <VStack m="auto" width="360px">
            <Header data="Enter your password" text="Please enter your Booking.com password for" />
            <InputF value={password} handleChange={handleChange} type="password" lable="Password" />
            <ButtonF handleClick={handleClick} variant="solid" bg="blue" color="white" btn="Sign in" />
            <Box p="0 0 15px 0"><Badge >or</Badge></Box>
            <ButtonF variant="outline" bg="white" color="blue" btn="Sign in with a verification link" />
            <Box>
                <ButtonF size="sm" variant="solid" bg="white" color="blue.500" btn="Forgotten your password?" />

            </Box>
            <InputFooter />
        </VStack>
    )
}
