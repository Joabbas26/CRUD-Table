import { createSlice } from '@reduxjs/toolkit'

const initialState = {isOpen: false};

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show: (state) => {
            state.isOpen = true;
        },
        hide: (state) => {
            state.isOpen = false;
        },
    },
});

export default ModalSlice.reducer;
export const { show, hide } = ModalSlice.actions;

/*



*/