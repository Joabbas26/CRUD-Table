import ModalReducer from './reducers/ModalReducer'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(ModalReducer, composeWithDevTools(
   applyMiddleware(thunk)
))

export default store;
/*




*/