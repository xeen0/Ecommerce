import {combineReducers} from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //storage => localStorage , sessionStorage => sessionStorage
import UserReducer from './user/user-reducer';
import { cartReducer } from './cart/cart.reducer';
import { directoryReducer } from './directory/directory.reducer';
import { shopReducer } from './shop/shop.reducer';
const persistConfig = {
    key :'root',
    storage,
    whitelist:['cart']  //reducer we want to store in storage
}
const rootReducer = combineReducers ({
    user:UserReducer,
    cart:cartReducer,
    directory: directoryReducer,
    shop : shopReducer
})
export default persistReducer(persistConfig ,rootReducer) 
