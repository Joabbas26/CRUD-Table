import { createSlice } from "@reduxjs/toolkit";

const NewRowSlice = createSlice({
    name: 'newRow',
    initialState : [],
    reducers: {
        addRow: (state, action) => {
            const newRow = {
                rowNum: action.payload.rowNum,
                fName: action.payload.fName, 
                lName: action.payload.lname,
                compTime: action.payload.compTime,
                fullTime: action.payload.fullTime,
                overTime: action.payload.overTime,
                recomm: action.payload.recomm,
                total: action.payload.total,
            };
            state.push(newRow);
        },
        deleteRow: (state, action) => {
            return state.filter(row => row.rowNum !== action.payload.rowNum)
        },
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow } = NewRowSlice.actions;

/*
rowNum: (rowNum) => {
    state.rowNum += 1;
}
    
*/