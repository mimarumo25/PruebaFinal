import { types } from "../types/types";

export const loginReducer = (state={},action) => {
    switch (action.type) {
            case types.login:
            return{
                ...state,
                id: action.payload.id,
                name: action.payload.displayname,
                image: action.payload.photoURL,
                telephone: action.payload.phoneNumber
            }

            default:
                return state
    }
}