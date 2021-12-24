import { types } from "../types/types"
const initialState ={
    carrito:[]
}

export const carritoReducer =(state=initialState, action) =>{

    switch (action.type) {
        case types.carrito:
            return{
                carrito:[...state.carrito, action.payload]
            }
            case types.carritoUpdate:
                return{
                    carrito:action.payload
                }
    
        default:
           return state
    }
}