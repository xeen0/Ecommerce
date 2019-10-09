import SHOP_DATA from './shop.data'

const INTIAL_STATE ={ 
    collections : SHOP_DATA
}

export const shopReducer  = (state = INTIAL_STATE , action )=> {
    switch(action.type){
        default :
         return state
    }
}