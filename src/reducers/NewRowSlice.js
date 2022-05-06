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
                looks: action.payload.looks,
                make: action.payload.make,
                eng: action.payload.eng,
                recomm: action.payload.recomm,
                total: action.payload.total,
            };
            state.push(newRow);
        },
        deleteRow: (state, action) => {
            state.splice(action.payload.rowNum - 1, 1);
        },
        saveRow: (state, action) => {
            const updatedRow = {
                // rowNum: action.payload.rowNum,
                fName: action.payload.fName,
                lName: action.payload.lName,
                looks: action.payload.looks,
                make: action.payload.make,
                eng: action.payload.eng,
                recomm: action.payload.recomm,
                total: action.payload.total,
            };
            state.splice(state.findIndex((arrow) => arrow.id === action.payload), 1, updatedRow);
        },
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow, saveRow } = NewRowSlice.actions;

/*


const index = state.findIndex((rows) =>
    rows.id === action.payload.id);
    state.splice(action.payload.rowNum, 1, updatedRow);


deleteMeal: (state, action) => {
    let { inputIndex } = action.payload;
    state.meals.splice(inputIndex, 1);
},

*/