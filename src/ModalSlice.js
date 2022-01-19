import {createSlice} from '@reduxjs/toolkit'

//const initialState = {isOpen: false};

const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers:{
        show: (state, action) => {
            state.isOpen = true;
        },
        hide: (state, action) => {
            state.isOpen = false;
        },
    },
})

export const { show, hide } = ModalSlice.actions;

export default ModalSlice.reducer;

/*



*/