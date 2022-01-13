//import {createSlice} from '@reduxjs/toolkit'
//import { combineReducers } from '@reduxjs/toolkit';

const initialState = {
    showModal: false
}

export function ModalReducer(state = initialState, action) {
    const actions = {
        "showModal" : {
            ...state,
            showModal: true
        },
        "hideModal" : {
            ...state,
            showModal: false
        }
    }

    return actions[action.type] || state
}

/*
    const ModalReducer = createSlice({
    name: 'modal',
    initialState: false,
    reducers:{
        show: (state) => !state,
    },
})



    const rootReducer = combineReducers({ modal: ModalReducer });
    export default rootReducer;
*/