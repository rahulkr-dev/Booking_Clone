import { reducer } from "./reducer";

const { createContext, useReducer } = require("react");

export const authContext = createContext();
const init = {
    isAuth:false,
    isRes:false,
    userEmail:[],
    userData:[]
}
export function AuthContextProvider({children}){
    const [loginData,dispatch] = useReducer(reducer,init)
    return <authContext.Provider value={{loginData,dispatch}} >{children}</authContext.Provider>
}
