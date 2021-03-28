/* eslint-disable react/prop-types */
import React from 'react';
import { navTextColor } from '../app/constants/colors';
import styled from 'styled-components';
import { navItemIconSize, navItemTextSize } from '../app/constants/dimens';

const Group = styled.div`
display: block;
align-items: center;
vertical-align:middle
`;
const Icon = styled.div`
color: ${navTextColor};
  width: 100%;
  vertical-align:middle;
  text-align:center;
  font-size: ${navItemIconSize};
`;
const Label = styled.p`
  color: ${navTextColor};
  width: 100%;
  vertical-align:middle;
  text-align:center;
  font-size: ${navItemTextSize};
`;

export default function NavBarItem (props) {
  return (<Group className="mx-4 my-3" onClick={props.onClick}><Icon>{props.children}</Icon><Label>{props.label}</Label></Group>);
}
