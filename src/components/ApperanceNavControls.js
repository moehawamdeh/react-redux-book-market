/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { Globe2 } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { LanguageContext } from '../features/MultiLang/LanguageContext';
import Text from './Text';
import NavBarItem from './NavBarItem';
import ThemeSwitch from './ThemeSwitch';
import { toggleDarkMode } from '../features/darkmode/DarkModeSlice';

function ApperanceControlsStrip () {
  const dispatch = useDispatch();
  const { userLanguageChange } = useContext(LanguageContext);
  return (
      <div className="d-flex flex-row-reverse" >
          <NavBarItem className="p-2" label={<Text tid="dark_theme"></Text>} onClick={() => dispatch(toggleDarkMode())}>
            <ThemeSwitch />
        </NavBarItem>
        <NavBarItem className="p-2" label={<Text tid="lang_swap_text"></Text>} onClick={() => userLanguageChange()}>
            <Globe2 />
        </NavBarItem>
      </div>
  );
}

export default ApperanceControlsStrip;
