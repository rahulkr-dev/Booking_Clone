import { reducer } from "./reducer";

const { createContext, useReducer, useState } = require("react");

export const authContext = createContext();
const init = {
    isAuth:true,
    isRes:false,
    userEmail:[],
    userData:[]
}
export function AuthContextProvider({children}){
    const [loginData,dispatch] = useReducer(reducer,init)
    const [currentEmail,setCurrentEmail] = useState('')
    return <authContext.Provider value={{loginData,dispatch,currentEmail,setCurrentEmail}} >{children}</authContext.Provider>
}
