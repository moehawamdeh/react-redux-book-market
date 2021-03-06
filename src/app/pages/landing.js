/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { landingBackgroundColor, navTextColor } from '../../app/constants/colors';
import { Navbar } from 'react-bootstrap';
import ApperanceControlsStrip from '../../components/ApperanceNavControls';
import SearchBox from '../../components/SearchBox';
import Logo from '../../components/Logo';
import DarkModeProvider from '../../features/darkmode/DarkModeProvider';
import { Link, useHistory } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  font-family: sans-serif;
  white-space: nowrap;
  background-color: ${landingBackgroundColor};
  color: ${navTextColor};
`;
const CenteredContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  align-content: center;
  text-align: center;
`;

function LandingPage () {
  const history = useHistory();
  const searchHandler = (text) => {
    text.length && history.push('/main?q=' + text);
  };
  return (
    <DarkModeProvider>
    <Container className="App">
            <ApperanceControlsStrip/>
            <CenteredContainer>
              <Logo size='large' orientation='vertical'/>
              <SearchBox callback={searchHandler}></SearchBox>
            </CenteredContainer>
    </Container>
    </DarkModeProvider>
  );
}

export default LandingPage;
