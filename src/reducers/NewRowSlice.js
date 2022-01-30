import { createSlice } from "@reduxjs/toolkit";

const NewRowSlice = createSlice({
    name: 'newRow',
    initialState : [
        {
            rowNum: 0,
            fName: '', 
            lName: '',
            compTime: 0,
            fullTime: '',
            overTime: 0,
            recomm: 0,
        }
    ],
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
            };
            state.push(newRow);
        },
        deleteRow: (state, action) => {
            return  state.filter((row) => row.rowNum !== action.payload.rowNum)
            
        }
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow} = NewRowSlice.actions;

/*

 fName: '', 
    lName: '',
    compTime: 0,
    fullTime: '',
    overTime: 0,
    recomm: 0,
    
*/