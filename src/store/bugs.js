import { createAction, createReducer } from '@reduxjs/toolkit'

//action creater
export const bugAdded = createAction("bugAdded")

export const bugRemoved = createAction("bugRemoved");
export const bugResolved = createAction("bugResolved");

const stete = {
    token:null,    
    auth:null,
    bugs:[],
}


export const setToken = createAction("setToken")
export const loginSuccess = createAction("loginSuccess")
export const logoutSuccess = createAction("logoutSuccess") 
export const switchRole = createAction("switchRole")


let lastId = 0;
export default createReducer(stete,{
    bugAdded:(state, action) =>{
        state.bugs.push({
            id:++lastId,
            description:action.payload.description,
            resolved:false
        })
    },

    setToken:(state, action) =>{
        state.token=action.payload.token
    },

    loginSuccess:(state, action) =>{
        state.auth=action.payload.auth
    },
    logoutSuccess:(state, action) =>{
        state.auth.loggedIn=false;
        state.auth.user=null;
        state.token=null
    },


})


