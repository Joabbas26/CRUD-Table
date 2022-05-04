import { configureStore } from '@reduxjs/toolkit'
import DarkMode from './reducers/DarkMode'
import EditModalSlice from './reducers/EditModalSlice'
import ModalSlice from './reducers/ModalSlice'
import NewRowSlice from './reducers/NewRowSlice'

export default configureStore({
    reducer:{
        modal: ModalSlice,
        darkMode: DarkMode,
        newRow: NewRowSlice,
        editModal: EditModalSlice,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
