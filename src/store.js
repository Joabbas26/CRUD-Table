import { configureStore } from '@reduxjs/toolkit'
import EditModalSlice from './reducers/EditModalSlice';
import ModalSlice from './reducers/ModalSlice'
import NewRowSlice from './reducers/NewRowSlice'

const store = configureStore({
  reducer: {
    modal: ModalSlice,
    newRow: NewRowSlice,
    editModal: EditModalSlice,
  },
})

export default store;