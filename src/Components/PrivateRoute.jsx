import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../Context/AuthContext/AuthContextProvider'

export default function PrivateRoute({children}) {
    const {loginData} = useContext(authContext)
    // console.log(loginData.isAuth,'hi')
    if(loginData.isAuth==false) return <Navigate to='/register' />
  return (
    children
  )
}
