import {createStore, combineReducers} from 'redux';
import cartReducer from './cartReducer'
import catalogReducer from './catalogReducer'

let reducers = combineReducers({
    cart: cartReducer,
    catalog: catalogReducer
})

let store = createStore(reducers);


export default store;