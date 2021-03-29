/* eslint-disable no-unused-vars */
import React from 'react';
import { mainBackgroundColor } from '../../app/constants/colors';
import { Row, Col } from 'react-bootstrap';
import NewBooksSideBar from '../../components/NewBooksSideBar';
import SearchResultsContainer from '../../components/SearchResultsContainer';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from '../../components/NavBar';
import DarkModeProvider from '../../features/darkmode/DarkModeProvider';
import { Link, useHistory, useLocation } from 'react-router-dom';
import SearchBox from '../../components/SearchBox';
const ThemedContainer = styled(Col)`
background-color: ${mainBackgroundColor};
`;

function MainPage () {
  const search = useLocation().search;
  const history = useHistory();
  const query = new URLSearchParams(search).get('q');
  const searchHandler = (text) => {
    text.length && history.push('/main?q=' + text);
  };
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
      <SearchBox callback={searchHandler}></SearchBox>
        <SearchResultsContainer searchText={query}/>
        <NewBooksSideBar/>
      </Row>
    </ThemedContainer>
    </DarkModeProvider>
    </>
  );
}

export default MainPage;
