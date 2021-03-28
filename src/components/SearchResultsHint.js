import React from 'react';
import Text from './Text';
import styled from 'styled-components';
import { secondaryColor } from '../app/constants/colors';
import PropTypes from 'prop-types';

const SearchTextElem = styled.h2`
color: ${secondaryColor};
font-weight: bold;
`;
export default function SearchResultsHint ({ found, text }) {
  const textId = found ? 'results_hint' : 'no_results_hint';
  return (<div className="d-inline-flex">
    <h2><Text tid={textId}/>&nbsp;&nbsp;</h2>
    <SearchTextElem className="m-0 p-0">{text}</SearchTextElem>
    </div>);
}
SearchResultsHint.propTypes = {
  text: PropTypes.string,
  found: PropTypes.bool
};
