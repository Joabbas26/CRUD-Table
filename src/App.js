import React from 'react';
import './App.css';
import MainTable from './MainTable';
//import Input from './Input';
import MainModal from './MainModal';
import DarkModeToggle from './DarkModeToggle';
import { useSelector } from 'react-redux';
//import { Provider } from 'react/redux';
//import store from './store'

function App() {

  const isDark = useSelector((state) => state.darkMode);

  return (
  //<Provider store={store}>
  <div className = {`${isDark ? 'darkTheme' : 'lightTheme'}`}>
      <DarkModeToggle/>
      <MainTable/>
      <MainModal/>
    </div>
   //</Provider>
  );
}

export default App;

/*
<div className = "App">
*/