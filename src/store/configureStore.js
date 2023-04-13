// import { createStore ;
// import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux";     
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import authReducer from './bugs';

const reducers = combineReducers({
    authReducer          
});   

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export default store;