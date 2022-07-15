import React from 'react';
import Types from 'prop-types';
import { Box } from '@mui/material';

const pluralize = (string, number) => (number < 2 ? string : `${string}s`);

export default function WineListRowDetails({ bottle }) {
  return (
    <Box p={3} borderColor="grey.200">
      {`${bottle.quantity} ${pluralize(
        bottle.size,
        bottle.quantity
      ).toLowerCase()} de l'année ${bottle.year}.`}
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
