import React from 'react';
import './App.css'
import { toggleDark } from './reducers/DarkMode';
import { useDispatch } from 'react-redux';

export default function DarkModeToggle() {

    // Use dispatch declaration and state from redux
    const dispatch = useDispatch();
    // const isDark = useSelector((state) => state.darkMode.isDark);

    // Redux to toggle between light and dark mode
    const setDarkMode = () => {
        dispatch(toggleDark());
    }

  return (
      // Bootstrap switch for dark mode
    <div className='toggleDiv'>
      <input type="checkbox" name='switch' id="switch" className="toggle" onClick={setDarkMode}/>
      <label htmlFor="switch" className='toggleLabel'></label>
    </div>
  );
}

/*


 */