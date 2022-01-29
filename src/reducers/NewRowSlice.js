import { createSlice } from "@reduxjs/toolkit";

const NewRowSlice = createSlice({
    name: 'newRow',
    initialState : "",
    reducers: {
        newRow: (state, action) => {
            action.payload;
        },
    },
});

export default NewRowSlice.reducer;
export const {newRow} = NewRowSlice.actions;

/*

 fName: '', 
    lName: '',
    compTime: 0,
    fullTime: '',
    overTime: 0,
    recomm: 0,
    
*/