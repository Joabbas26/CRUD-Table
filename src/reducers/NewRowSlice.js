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
            return state.filter(row => row.rowNum !== action.payload.rowNum)
        },
    },
});

export default NewRowSlice.reducer;
export const { addRow, deleteRow } = NewRowSlice.actions;

/*
function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.item];
    case 'remove':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      throw new Error();
  }
}
function FavoriteMovies() {
  const [state, dispatch] = useReducer(reducer, [{ name: 'Heat' }]);
  return (
    // Use dispatch({ type: 'add', item: movie })
    // and dispatch({ type: 'remove', index })...
  );
}
}
    
*/