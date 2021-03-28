/* eslint-disable no-unused-vars */
import React from 'react';
import { mainBackgroundColor } from './app/constants/colors';
import { Row, Col } from 'react-bootstrap';
import NewBooksSideBar from './components/NewBooksSideBar';
import SearchResultsContainer from './components/SearchResultsContainer';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import DarkModeProvider from './features/darkmode/DarkModeProvider';
import MainPage from './app/pages/main';
import LandingPage from './app/pages/landing';
import { Switch, Route } from 'react-router';

const ThemedContainer = styled(Col)`
background-color: ${mainBackgroundColor};
`;

const App = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL. */}
      <Route exact path='/main' component={MainPage}></Route>
      <Route exact path='/' component={LandingPage}></Route>
    </Switch>
  );
};

export default App;
