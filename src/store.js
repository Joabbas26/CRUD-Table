import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from './reducers/ModalSlice'

export default configureStore({
    reducer:{
        modal: ModalSlice,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })
