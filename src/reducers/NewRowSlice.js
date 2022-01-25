import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fName: '', 
    lName: '',
    compTime: 0,
    fullTime: '',
    overTime: 0,
    recomm: 0,
    //isFetching: false,
    //isSuccess: false,
    //isError: false,
    //errorMessage: "",

}

const NewRowSlice = createSlice({
    name: 'newRow',
    initialState,
    reducers: {
        newRow: (state, action) => {
            state.data = action.payload;
        },
    },
});

export default NewRowSlice.reducer;
export const {newRow} = NewRowSlice.actions;