import { EDIT_TRUE , EDIT_FALSE } from "../constant/edit";

const initialState ={
 edit : false   
}

export const editReducer =(state=initialState,{type})=>{
    switch (type) {
        case EDIT_TRUE:
            return {...state, edit:true}
            
        case EDIT_FALSE:
            return {...state, edit:false}
    
        default:
         return state
    }
}