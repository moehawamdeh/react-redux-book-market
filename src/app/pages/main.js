/* eslint-disable no-unused-vars */
import React from 'react';
import { mainBackgroundColor } from '../../app/constants/colors';
import { Row, Col } from 'react-bootstrap';
import NewBooksSideBar from '../../components/NewBooksSideBar';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from '../../components/NavBar';
import DarkModeProvider from '../../features/darkmode/DarkModeProvider';
import { Link } from 'react-router-dom';

const ThemedContainer = styled(Col)`
background-color: ${mainBackgroundColor};
`;

function MainPage () {
  return (
    <>
    <ThemeProvider theme={{ theme: 'dark' }}>
    <Link to="/">
     <NavBar></NavBar>
     </Link>
     </ThemeProvider>
    <DarkModeProvider>
    <ThemedContainer className="px-4 py-4">
      <Row>
        <SearchResultsContainer searchText="java"/>
        <NewBooksSideBar/>
      </Row>
    </ThemedContainer>
    </DarkModeProvider>
    </>
  );
}

export default MainPage;
