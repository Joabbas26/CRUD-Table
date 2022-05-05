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
                    rowNum: action.payload.rowNum,
                    fName: action.payload.fName,
                    lName: action.payload.lName,
                    looks: action.payload.looks,
                    make: action.payload.make,
                    eng: action.payload.eng,
                    recomm: action.payload.recomm,
                    total: action.payload.total,
                };
                alert(action.payload.rowNum - 1);
                // const index = state.findIndex((rows) =>
                    // rows.id === action.payload.id);
                    state.splice(updatedRow.rowNum -1, 1, updatedRow);
            },
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow, saveRow } = NewRowSlice.actions;

/*




state.roundScore.splice(state.roundScore.findIndex((arrow) => arrow.id === action.payload), 1);

deleteMeal: (state, action) => {
    // you receive you inputIndex from the payload
    let { inputIndex } = action.payload;
    // and you use it to splice the desired item off the array
    state.meals.splice(inputIndex, 1);
    ...your other logic if any
},

var i = remove.length;
while (i--) {
    if (remove[i] != undefined)
        options.series[0].data.splice(remove[i],1);
}  
remove.push(index);

var cache = ["0", "1", "2", "3", "4"];
cache.r = "r";
console.log(cache.length);
for (var i = cache.length - 1; i >= 0; i--) {
    cache.splice(i, 1);
}
console.log(cache);


*/