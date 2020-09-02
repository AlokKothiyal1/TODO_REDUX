import {ADD_TODO, REMOVE_TODO} from './actionType'
import { v4 as uuid } from 'uuid';
import {saveData,loadData} from '../localstorage'

export const initState = loadData("todo") || {
    todo:[],
    total:0
}

export default function reducer(state=initState,{type,payload}){

    switch(type) {
        case ADD_TODO:{
             
         const item ={
             name:payload,
             id:uuid(),
             status:false
         }
         const newData ={
                        ...state, 
                        total:state.total+1,
                        todo:[...state.todo,item]
         }

         saveData("todo",newData)
             return newData
        }

        case REMOVE_TODO:{
            const id =payload
            console.log(id)
            const newState = state.todo.filter(item=>item.id!==id)
            const newData ={
                ...state,
                total:state.total-1,
                todo:newState
            }
            saveData("todo",newData)
            return newData
        }
        default:
            return state
    }
}