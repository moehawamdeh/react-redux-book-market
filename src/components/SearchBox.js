import React from 'react';
import PropTypes from 'prop-types';
export default function SearchBox ({ callback }) {
  return (
        <div>
        <div className="row form-group">
        <div className="input-group">
            <input type="text" className="form-control"/>
            <span className="input-group warning"><span className="glyphicon glyphicon-warning-sign"></span></span>
        </div>
    </div>
        </div>
  );
}

SearchBox.propTypes = {
  callback: PropTypes.func
};
