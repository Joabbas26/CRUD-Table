import './App.css';
import store from "./store";
import { Provider } from 'react-redux';
import CRUDAPP from './CRUDApp.js';


function App() {

  return (
    <Provider store={store}>
      <div>
        <CRUDAPP/>
      </div>
    </Provider>
  );
}

export default App;

/*

*/