import { createSlice } from "@reduxjs/toolkit";

const NewRowSlice = createSlice({
    name: 'newRow',
    initialState : [],
    reducers: {
        addRow: (state, action) => {
            const newRow = {
                rowNum: action.payload.rowNum,
                fName: action.payload.fName, 
                lName: action.payload.lName,
                compTime: action.payload.compTime,
                fTime: action.payload.fTime,
                oTime: action.payload.oTime,
                recomm: action.payload.recomm,
                total: action.payload.total,
            };
            state.push(newRow);
        },
        deleteRow: (state, action) => {
            const index = state.findIndex((row) => 
                row.id === action.payload.id);
                state.splice(index, 1);
            },
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow } = NewRowSlice.actions;

/*
    
*/