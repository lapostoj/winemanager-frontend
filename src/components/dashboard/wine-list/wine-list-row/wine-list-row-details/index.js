import React from 'react';
import Types from 'prop-types';
import './wine-list-row-details.css';

export default function WineListRowDetails({ bottles }) {
  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  };

  const renderBottleInfo = (bottle, index) => {
    return (
      <div key={index} className="wine-row-details-row">
        {bottle.quantity} {capitalize(bottle.size)} from {bottle.year}.
      </div>
    );
  };

  return <div>{bottles.map(renderBottleInfo)}</div>;
}

WineListRowDetails.propTypes = {
  bottles: Types.arrayOf(
    Types.shape({
      year: Types.number.isRequired,
      size: Types.string.isRequired,
      quantity: Types.number.isRequired
    }).isRequired
  ).isRequired
};
