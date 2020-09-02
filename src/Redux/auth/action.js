import {AUTH_SUCCESS,LOGOUT} from './actionType'

export const authSuccess = (email,password) => ({

    type:AUTH_SUCCESS,
    email:email,
    password:password

})


export const logout = () => ({    
    type:LOGOUT
})