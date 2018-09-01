import React from 'react';
import Types from 'prop-types';

const WineListRowDetails = ({ bottles }) => {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  }

  const renderBottleInfo = (bottle, index) => {
    return (
      <div key={index}>
        [{ bottle.quantity }] { bottle.year } - { capitalize(bottle.size) }
      </div>
    );
  }

  return (
    <div>
      { bottles.map(renderBottleInfo) }
    </div>
  );
}

WineListRowDetails.propTypes = {
  bottles: Types.arrayOf(
    Types.shape({
      year: Types.number.isRequired,
      size: Types.string.isRequired,
      quantity: Types.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default WineListRowDetails;