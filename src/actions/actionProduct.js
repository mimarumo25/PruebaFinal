import axios from 'axios';
import  {types} from '../types/types';




export const searchSync = (product) => {
    console.log(product);
    return{
        type: types.search,
        payload: product
    }
}

//READ

export const listProductAsync = () => {
    return async (dispatch) => {

        axios
      .get(" https://recipe-rissoto.vercel.app/recipe")
      .then((resp) => {
       
        dispatch(listSync(resp.data));
      })
      .catch((error) => {
        console.log(error);
      });
        
    }
   
}

export const listSync = (product) => {
    return {
        type: types.list,
        payload: product
    }
}
export const carritoP = (product) => {
    return {
        type: types.carrito,
        payload: product
    }
}
export const carritoUdapte = (product) => {
    return {
        type: types.carritoUpdate,
        payload: product
    }
}


