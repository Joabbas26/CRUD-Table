import { createSlice } from "@reduxjs/toolkit";

const ModalEditSlice = createSlice({
    name: 'editModal',
    initialState: {
        on: false,
    },
    reducers: {
        toggleEdit: (state) => {
            state.on = !state.on;
        },
    },
});

export default ModalEditSlice.reducer;
export const {toggleEdit} = ModalEditSlice.actions;