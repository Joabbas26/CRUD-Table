import React from 'react';
import './App.css';
// import MainTable from './MainTable';
// import MainModal from './MainModal';
// import EditModal from './EditModal';
import TableCombined from './TableCombined';
import DarkModeToggle from './DarkModeToggle';
import { useSelector } from 'react-redux';


function App() {
  // Gets state for dark mode from redux
  const isDark = useSelector((state) => state.darkMode.isDark);

  return (
    <div className = {`${isDark ? 'darkTheme' : 'lightTheme'}`}>
      <DarkModeToggle/>
      {/* <MainTable/> */}
      {/* <MainModal/> */}
      {/* <EditModal/> */}
      <TableCombined/>
    </div>
  );
}

export default App;

/*

*/