import { createSlice } from "@reduxjs/toolkit";

const EditModalSlice = createSlice({
    name: 'editModal',
    initialState: {
        value: false
    },
    reducers: {
       toggleEdit: (state) => {
        state.value = !state.value;
        }, 
    }
})

export default EditModalSlice.reducer;
export const {toggleEdit} = EditModalSlice.actions;