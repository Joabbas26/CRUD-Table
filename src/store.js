import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './ModalReducer'

export default configureStore ({ reducer: { store: storeReducer }});
