import React from 'react';
import { primaryColor } from '../app/constants/colors';
import styled from 'styled-components';
import Logo from './Logo';
import ApperanceNavControls from './ApperanceNavControls';

const ThemedNav = styled.nav`
background: ${primaryColor};
`;

function NavBar () {
  return (
    <ThemedNav className="navbar">
    <Logo className="navbar-brand" size='small' orientation='horizantal'></Logo>
    <ApperanceNavControls></ApperanceNavControls>
  </ThemedNav>
  );
}

export default NavBar;
