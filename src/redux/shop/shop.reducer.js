import { ShopActionTypes } from './shop.types'

const INTIAL_STATE ={ 
    collections :null
}

export const shopReducer  = (state = INTIAL_STATE , action )=> {
    switch(action.type){
     case ShopActionTypes.UPDATE_COLLECTION:
         return {
             ...state,
             collections:action.payload
         }
        default :
         return state
    }
}