import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { secondaryColor } from '../app/constants/colors';
import { Search } from 'react-bootstrap-icons';
import { getText } from './Text';
import { debounce } from 'lodash';
const StyledButton = styled.button`
  background-color: ${secondaryColor};
  height: 100%;
  border-radius: 0 1em 1em 0 !important;
  padding-left: 20px;
  padding-right: 30px;
`;
const StyledInput = styled.input`
border-radius: 1em 0 0 1em !important;
padding: 0px 1em;
text-align: center;
`;
export default function SearchBox ({ callback, preset }) {
  const [searchText, setSearchText] = useState({ text: '' });

  const textChangeHandler = () => {
    callback &&
    debounce(callback, 1000);
  };
  return (
    <div className="form-group my-4">
    <div className="input-group m-auto input-group-lg col-lg-6 col-centered">
        <StyledInput onChange={e => { textChangeHandler(); setSearchText(e.target.value); }} placeholder={getText('search_hint') } maxLength="30" type="text" className="form-control">
        </StyledInput>
        <span className="input-group-btn">
        <StyledButton onClick={() => callback && callback(searchText)} type="button" className="btn btn-default">
              <Search style={{ color: 'white' }}></Search>
            </StyledButton>
        </span>
    </div>
    </div>
  );
}

SearchBox.propTypes = {
  callback: PropTypes.func,
  preset: PropTypes.string
};
