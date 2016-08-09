import React, { Component } from 'react';

const QuantityCell = ({ id, quantity, onQuantityCellClick, selectedCell }) => {
  if (selectedCell === id) {
    return (
      <td>
        <input placeholder={quantity} />
      </td>
    );
  } else {
    return <td onClick={() => { onQuantityCellClick(id) }} id={id}>{quantity}</td>;
  }
};

export default QuantityCell;
