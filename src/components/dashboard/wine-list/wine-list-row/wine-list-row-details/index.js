import React from 'react';
import Types from 'prop-types';
import { Box } from '@material-ui/core';

export default function WineListRowDetails({ bottle }) {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
  };

  // const renderBottleInfo = (bottle, index) => {
  //   const isLast = index === bottles.length - 1;
  //   return (
  //     <Box
  //       key={index}
  //       p={3}
  //       borderBottom={isLast ? null : 1}
  //       borderColor="grey.200"
  //     >
  //       {bottle.quantity} {capitalize(bottle.size)} from {bottle.year}.
  //     </Box>
  //   );
  // };

  return (
    <Box p={3} borderColor="grey.200">
      {bottle.quantity} {capitalize(bottle.size)} from {bottle.year}.
    </Box>
  );
}

WineListRowDetails.propTypes = {
  bottle: Types.shape({
    year: Types.number.isRequired,
    size: Types.string.isRequired,
    quantity: Types.number.isRequired,
    cellarID: Types.number.isRequired,
    wine: Types.shape({
      name: Types.string.isRequired,
      designation: Types.string.isRequired,
      growth: Types.string.isRequired,
      country: Types.string.isRequired,
      region: Types.string.isRequired,
      color: Types.string.isRequired,
      type: Types.string.isRequired,
      producer: Types.string.isRequired,
    }),
    history: Types.arrayOf(
      Types.shape({
        time: Types.string.isRequired,
        quantity: Types.number.isRequired,
        details: Types.string.isRequired,
      }).isRequired
    ).isRequired,
    storageLocation: Types.shape({
      position: Types.string.isRequired,
    }).isRequired,
  }),
};
