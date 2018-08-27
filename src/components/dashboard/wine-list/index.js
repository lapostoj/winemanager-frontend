import React from 'react';
import Types from 'prop-types';
import './wine-list.css';

const WineList = ({ wines }) => {
  const getClassForWine = (wine) => {
    return wine.color.toLowerCase();
  }

  const renderWineRow = (wine, index) => {
    return (
      <li
        key={index}
        className={"wine-row " + getClassForWine(wine)}
      >
        <span>{wine.name}</span>
      </li>
    );
  }

  return (
    <ul className="wine-list">
      { wines.map(renderWineRow) }
    </ul>
  );
}

WineList.propTypes = {
  wines: Types.arrayOf(
    Types.shape({
      name: Types.string.isRequired,
      color: Types.string.isRequired,
      year: Types.number,
      type: Types.string,
      size: Types.string,
      quantity: Types.number,
    }),
  ).isRequired,
};

export default WineList;