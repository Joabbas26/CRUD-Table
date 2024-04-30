import './App.css';
import store from "./store";
import { Provider } from 'react-redux';


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