import React, { useState } from 'react';
import './App.css'
import { toggleDark } from './reducers/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default function DarkModeToggle() {
    const dispatch = useDispatch();
    const isDark = useSelector((state) => state.darkMode);

    const [dark, setDark] = useState(true);

    const setDarkMode = () => {
        dispatch(toggleDark());
        if(dark === true){
            // set className to 'darkMode'
            setDark(!dark);
        }
        else{
            // set className to 'darkMode'
            setDark(!dark);
        }
    }

  return (
  <div className='toggleDiv'><BootstrapSwitchButton checked={isDark} onstyle="dark" offstyle="light"onChange={`${setDarkMode}`}/></div>
  );
}

/*
    checked={false}
    onlabel='Admin User'
    offlabel='Regular User'
    onChange={(checked: boolean) => {
        this.setState({ isUserAdmin: checked })
    }}
 */