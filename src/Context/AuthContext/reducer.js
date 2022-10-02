export const reducer = (state,action)=>{
    switch(action.type){
        case "_LOGIN": return {...state,isAuth:true};
        case "_ISRES" : return {...state,isRes:true}
        case "_USEREMAIL": return {...state,userEmail:action.payload};
        case "_USERDATA" : return {...state,userData:action.payload}
    }
}