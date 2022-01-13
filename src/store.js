import { configureStore } from '@reduxjs/toolkit'
import ModalReducer from './ModalSlice'

const store = configureStore({
    reducer:{
        modal: ModalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  })

export default store;

/*

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(ModalReducer, composeWithDevTools(
   applyMiddleware(thunk)
))

export default configureStore({
    reducer: {
        modal: ModalReducer,
    },
});
*/