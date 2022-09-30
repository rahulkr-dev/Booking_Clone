import React, { useContext, useState } from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Header from '../Components/Login/Header'
import { InputF } from '../Components/Login/Input'
import ButtonF from '../Components/Login/Button'
import InputFooter from '../Components/Login/InputFooter'
import { Badge, Box } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContext/AuthContextProvider'
import { userData } from '../Context/AuthContext/authAction'
const init = {pass:'',confirmPass:''}
export default function CreatePassword() {
    const {loginData,dispatch,setCurrentEmail,currentEmail} = useContext(authContext)
    const navigate = useNavigate()
    const [user,setUser] = useState(init)
    const handleChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const handleClick = ()=>{
        let obj = [...loginData.userData,{email:currentEmail,password:user.pass}]
        dispatch(userData(obj))
        navigate("/sign-in")
    }
    // console.log(user);
    return (
        <VStack m="auto" width="360px">
            <Header data="Create password" text="Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers." />
            <InputF name="pass" value={user.pass} handleChange={handleChange} type="password" lable="Password" />
            <InputF name="confirmPass" value={user.confirmPass} handleChange={handleChange} type="password" lable="Confirm Password" padding={true} />
            <ButtonF disable={user} handleClick={handleClick} variant="solid" bg="blue" color="white" btn="Create account" />

            <InputFooter />
        </VStack>
    )
}
