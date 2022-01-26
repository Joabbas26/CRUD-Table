import { createSlice } from "@reduxjs/toolkit";

export const DarkMode = createSlice({
    name: "darkMode",
    initialState: {
        isDark: false,
    },
    reducers: {
        toggleDark: (state) => {
            state.isDark = !state.isDark;
        },
    },
});

export default DarkMode.reducer;
export const { toggleDark } = DarkMode.actions;