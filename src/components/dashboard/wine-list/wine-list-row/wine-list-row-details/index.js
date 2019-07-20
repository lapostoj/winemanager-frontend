import React from 'react';
import Types from 'prop-types';
import { Box } from '@material-ui/core';

export default function WineListRowDetails({ bottles }) {
  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  };

  const renderBottleInfo = (bottle, index) => {
    const isLast = index === bottles.length - 1;
    return (
      <Box
        key={index}
        p={3}
        borderBottom={isLast ? null : 1}
        borderColor="grey.200"
      >
        {bottle.quantity} {capitalize(bottle.size)} from {bottle.year}.
      </Box>
    );
  };

  return <>{bottles.map(renderBottleInfo)}</>;
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
