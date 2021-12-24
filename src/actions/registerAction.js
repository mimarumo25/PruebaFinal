import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";

export const register = (names, email,password) => {
  return {
    type: types.register,
    payload: {
      names,
      email,
      password,
    },
  };
};

export const registerEmailPassword = (names, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then(async({user}) => {
        await updateProfile(auth.currentUser, {displayName: names});
        console.log(user);
        dispatch(register(user.displayName,user.email, user.uid ));
      
      })
      .catch(e =>{
        console.log(e);
      })
  
  };
  
};
