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
            total: 0,
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
                total: action.payload.total,
            };
            state.push(newRow);
        },
        deleteRow: (state, action) => {
            return  state.newRow.filter((row) => row.rowNum !== action.payload.rowNum)
            
        },
        calcTotal: (state, action) => {
            // Calculate total and return score
            const getRowTotal = ({compTime, fullTime, overTime, recomm, total}) => {
                // If comp time more than 50 get 30 points 
                if (compTime <= 10) {
                    total += 10;
                } else if (compTime > 10 && compTime < 50) {
                    total += 20;
                }else if (compTime >= 50){
                    total += 30;
                }

                // If full time get 20 points 
                if (fullTime === 'Yes') {
                    total += 20;
                } else {
                    total += 10;
                }

                // If over time more than 5 get 30 points 
                if (overTime < 5) {
                    total += 10;
                } else {
                    total += 20;
                }

                // Divide recommendation score by 10 and multiply  by 3 to get 30 points
                if (recomm <= 100) {
                    total += Math.floor((recomm/10) * 3);
                } else {
                    total += 0;
                }
                // Edit later
                return state.push(getRowTotal);
            };
        },
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow, calcTotal} = NewRowSlice.actions;

/*

    
*/