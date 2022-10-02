export const isAuth = {type:"_LOGIN"}
export const isRes = {type:"_ISRES"}
export const userEmail = (data)=>{
    return {
        type:"_USEREMAIL",
        payload:data
    }
}
export const userData = (obj)=>{
    return{
        type:"_USERDATA",
        payload:obj
    }
}