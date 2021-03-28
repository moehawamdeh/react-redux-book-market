/* eslint-disable no-unused-vars */
import React from 'react';
import { primaryColor } from '../app/constants/colors';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './Logo';
import NewBooksSideBar from './NewBooksSideBar';
import ApperanceNavControls from './ApperanceNavControls';
const ThemedNav = styled.nav`
background: ${primaryColor};
`;

function NavBar () {
  return (
    <ThemedNav className="navbar"><a className="navbar-brand" href="#">
    <Logo size='small' orientation='horizantal'></Logo>
  </a>
    <ApperanceNavControls></ApperanceNavControls>
  </ThemedNav>
  );
}

export default NavBar;
