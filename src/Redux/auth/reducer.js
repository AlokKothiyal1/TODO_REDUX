import {AUTH_SUCCESS,LOGOUT} from './actionType'

const initState ={
    isAuth:false,
    wrong:false
}

export default (state=initState,{type,email,password})=>{

    switch(type){
        
        case AUTH_SUCCESS:
            
            if(email==="alok@masai.com" && password==="alokkothiyal"){
                return{
                    ...state,
                    isAuth:true,
                    wrong:false
                }
            }
            else{
                return{
                    ...state,
                    wrong:true
                }
            }

        case LOGOUT:
            return{
                ...state,
                isAuth:false
            }
        default:
            return state
    }
}