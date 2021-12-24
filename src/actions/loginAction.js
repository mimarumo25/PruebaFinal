import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from "@firebase/auth"
import Swal from "sweetalert2"

import { facebook, google } from "../firebase/firebase"
import { types } from "../types/types"

export const login = (id, displayname) =>{
    return {
        type: types.login,
        payload:{
            id,
            displayname,           
            
        }
    }
}

export const loginGoogle = () =>{
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth,google)
        .then(({user})=>{
            console.log(user)
            dispatch(login(user.uid, user.displayName, user.photoURL, user.phoneNumber))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}
export const loginFacebook = () =>{
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth,facebook)
        .then(({user})=>{
            console.log(user)
            dispatch(login(user.uid, user.displayName))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const loginEmailPassword = (email,password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
            dispatch(login(user.uid, user.displayName))
           
        })
        .catch(error => {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario y/o contraseña incorrecta'
              })
        })
    }
}

export const logoutSincrono = () => {
    return{
        type: types.logout,
    }
 }
export const logout = () => {

    return(dispatch) => {
        const auth = getAuth();
        signOut(auth)
        .then(user => {
            dispatch(logoutSincrono())
        })
        .catch(error => {
            console.log(error);
        })
    }
}

