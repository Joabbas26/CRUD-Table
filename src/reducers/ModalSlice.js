import { createSlice } from '@reduxjs/toolkit'

const initialState = {isOpen: false};

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show: (state, action) => {
            state.isOpen = action.payload;
            
        },
        hide: (state, action) => {
            state.isOpen = !action.payload;
        },
    },
});

export default ModalSlice.reducer;
export const { show, hide } = ModalSlice.actions;

/*



*/