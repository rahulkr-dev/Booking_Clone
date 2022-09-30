import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreatePassword from '../Pages/CreatePassword'
import FinalLogin from '../Pages/FinalLogin'
import SignInOrCreate from '../Pages/SignInOrCreate'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/register' element={<SignInOrCreate />} />
        <Route path='/register/password' element={<CreatePassword />} />
        <Route path='/sign-in' element={<FinalLogin />} />
    </Routes>
  )
}
