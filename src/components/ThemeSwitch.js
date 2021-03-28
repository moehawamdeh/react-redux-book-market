/* eslint-disable no-unused-vars */
import React from 'react';
import { Toggle2Off, Toggle2On } from 'react-bootstrap-icons';
import { darkModeOn } from '../features/darkmode/DarkModeSlice';
import { useSelector } from 'react-redux';

export default function ThemeSwitch () {
  const isDarkMode = useSelector(darkModeOn);
  return (<div >
      {isDarkMode ? <Toggle2Off /> : <Toggle2On />}
      </div>
  );
}
