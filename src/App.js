import React from 'react';
import './App.css';
import MainTable from './MainTable';
//import { Provider } from 'react/redux';
//import store from './store'

function App() {

  return (
  //<Provider store={store}>
    <div className="App">
      <MainTable/>
    </div>
   //</Provider>
  );
}

export default App;
