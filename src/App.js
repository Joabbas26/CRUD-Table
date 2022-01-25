import React from 'react';
import './App.css';
import MainTable from './MainTable';
//import Input from './Input';
import MainModal from './MainModal';
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
