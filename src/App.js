import React from 'react';
import './App.css';
import MainTable from './MainTable';
import MainModal from './MainModal';
import DarkModeToggle from './DarkModeToggle';
import { useSelector } from 'react-redux';
import EditModal from './EditModal';

function App() {

  // Gets state for dark mode from redux
  const isDark = useSelector((state) => state.darkMode.isDark);

  return (
    <div className = {`${isDark ? 'darkTheme' : 'lightTheme'}`}>
      <DarkModeToggle/>
      <MainTable/>
      <MainModal/>
      <EditModal/>
    </div>
  );
}

export default App;

/*

*/