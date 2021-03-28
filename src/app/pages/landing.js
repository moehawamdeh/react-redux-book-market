/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { landingBackgroundColor, navTextColor } from '../../app/constants/colors';
import { Navbar } from 'react-bootstrap';
import ApperanceControlsStrip from '../../components/ApperanceNavControls';
import SearchBox from '../../components/SearchBox';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import DarkModeProvider from '../../features/darkmode/DarkModeProvider';

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
  return (
    <Container className="App">
      <DarkModeProvider>
            <ApperanceControlsStrip/>
            <CenteredContainer>
              <Logo size='large' orientation='vertical'/>
              <Link to="/main">
              <SearchBox></SearchBox>
              </Link>
            </CenteredContainer>
            </DarkModeProvider>
    </Container>
  );
}

export default LandingPage;
