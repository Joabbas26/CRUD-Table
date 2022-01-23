import { createSlice } from '@reduxjs/toolkit'

export const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        show: (state) => {
            state.isOpen = true;
        },
        hide: (state) => {
            state.isOpen = false;
        },
    },
})

export default ModalSlice.reducer;
export const { show, hide } = ModalSlice.actions;

/*



*/