import { createSlice } from '@reduxjs/toolkit'

const ModalSlice = createSlice({
    name: 'modal',
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

export default ModalSlice.reducer;
export const { toggle } = ModalSlice.actions;

/*


*/