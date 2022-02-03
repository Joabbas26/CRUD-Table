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
        <BootstrapSwitchButton checked={isDark} onstyle="dark" offstyle="light"onChange={setDarkMode}/>
        <label className="switch">
          <input type="checkbox"/>
          <span className="slider round"></span>
        </label>
        <image className='moon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRZmm6HmffogvMNeaxNjVzZOlkJzVr456rg&usqp=CAU'/>
        <image className='sun' src='https://www.pikpng.com/pngl/m/0-5587_pin-by-pngsector-on-sun-png-sun-transparent.png'/>
    </div>
  );
}

/*


 */