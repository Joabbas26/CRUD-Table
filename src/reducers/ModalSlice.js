import { createSlice } from '@reduxjs/toolkit'

const openModal = {isOpen: false};

const ModalSlice = createSlice({
    name: 'modal',
    initialState : openModal,
    reducers: {
        show: (state, action) => {
            //state.isOpen = !action.payload;
            const newToggle = {...state, isOpen: true};
            console.log("new toogle", newToggle);
            
        },
        hide: (state, action) => {
            //state.isOpen = action.payload;
            const newToggle = {...state, isOpen: false};
            return newToggle;
        },
    },
});

export default ModalSlice.reducer;
export const { show, hide } = ModalSlice.actions;

/*



*/