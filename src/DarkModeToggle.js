import React from 'react';
import './App.css'
import { toggleDark } from './reducers/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function DarkModeToggle() {

    // Use dispatch declaration and state from redux
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.darkMode.isDark);

    // Redux to toggle between light and dark mode
    const setDarkMode = () => {
        dispatch(toggleDark());
    }

  return (
      // Bootstrap switch for dark mode
    <div className='toggleDiv'>
        <BootstrapSwitchButton checked={isDark} onstyle="dark" offstyle="light" onChange={setDarkMode}/>
      <input type="checkbox" id="check1" className="toggle"/>
      <label htmlFor="check1"></label>
    </div>
  );
}

/*


 */