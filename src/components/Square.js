import React from 'react';
import PropTypes from 'prop-types';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );  
}

Square.propTypes = {
  onSquareClick: PropTypes.func,
  value: PropTypes.string
}

export default Square;