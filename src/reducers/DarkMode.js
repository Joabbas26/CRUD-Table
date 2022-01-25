import { createSlice } from "@reduxjs/toolkit";

export const DarkMode = createSlice({
    name: "darkMode",
    initialState: {
        isDark: false,
    },
    reducers: {
        dark: (state) => {
            state.isDark = true;
        },
        light: (state) => {
            state.isDark = false;
        },
    },
});

export default DarkMode.reducer;
export const { dark, light } = DarkMode.actions;