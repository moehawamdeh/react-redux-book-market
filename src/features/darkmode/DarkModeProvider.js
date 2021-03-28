import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectedTheme } from './DarkModeSlice';

// eslint-disable-next-line react/prop-types
const DarkModeProvider = ({ children }) => {
  const theme = useSelector(selectedTheme);
  return (<ThemeProvider theme={{ theme: theme }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkModeProvider;
