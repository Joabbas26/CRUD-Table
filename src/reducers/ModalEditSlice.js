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
        saveRow: (state, action) => {
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
            state.splice(state.indexOf(newRow), 1, action.payload)
        }
    },
});

export default ModalEditSlice.reducer;
export const {toggleEdit, saveRow} = ModalEditSlice.actions;

/*

items[items.indexOf(oldValue)] = newValue

const index = items.findIndex(x => x === 3452)
items[index] = 1010

var index = items.indexOf(3452);
if (index !== -1) {
    items[index] = 1010;
}

*/