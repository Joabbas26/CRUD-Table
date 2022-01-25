import { configureStore } from '@reduxjs/toolkit'
import DarkMode from './reducers/DarkMode'
import ModalSlice from './reducers/ModalSlice'
import NewRowSlice from './reducers/NewRowSlice'

export default configureStore({
    reducer:{
        modal: ModalSlice,
        darkMode: DarkMode,
        newRow: NewRowSlice,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
