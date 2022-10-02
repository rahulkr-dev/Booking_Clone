import React, { useContext, useState } from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Header from '../Components/Login/Header'
import { InputF } from '../Components/Login/Input'
import ButtonF from '../Components/Login/Button'
import InputFooter from '../Components/Login/InputFooter'
import OnCrossText from '../Components/Login/OnCrossText'
import ImageCardList from '../Components/Login/ImageCardList'
import { authContext } from '../Context/AuthContext/AuthContextProvider'
import { userEmail } from '../Context/AuthContext/authAction'
import { Navigate, useNavigate } from 'react-router-dom'

export default function SignInOrCreate() {
    const [email,setEmail] = useState('');
    const {loginData,dispatch,setCurrentEmail,currentEmail} = useContext(authContext)
    const navigate = useNavigate()
    // console.log(loginData,dispatch)
    const handleChange =(e)=>{
        setEmail(e.target.value)
    }
    const handleClick = ()=>{
        // console.log(loginData.userEmail)
        let filter = loginData.userEmail.filter(item=>item==email);
        // console.log(email)
        if(filter.length==0){
            let obj = [...loginData.userEmail,email]
            dispatch(userEmail(obj))
            // return <Navigate to="/register/password" />
            setCurrentEmail(email)
            navigate('/register/password')
        }else{
            console.log('hi')
            // return <Navigate to="/sign-in" />
            navigate("/sign-in")

        }
    }
    // console.log(email)
    return (
        <VStack m="auto" width="360px">
            <Header data="Sign in or create an account" />
            <InputF name="fEmail" value={email} handleChange={handleChange} type="email" lable="Email address" />
            <ButtonF handleClick={handleClick} btn="Continue with email" />
            <OnCrossText data="or use one of these options" />
            <ImageCardList />
            <InputFooter />

        </VStack>
    )
}
