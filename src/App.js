import React from 'react';
import './App.css';
import MainModal from './MainModal';
import MainTable from './MainTable';
//import { Provider } from 'react/redux';
//import store from './store'

function App() {


  return (
  //<Provider store={store}>
    <div className="App">
      <MainTable/>
      <MainModal/>
    </div>
   //</Provider>
  );
}

export default App;
