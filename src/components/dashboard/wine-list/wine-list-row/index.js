import React from 'react';
import Types from 'prop-types';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@material-ui/core';
import { ExpandMore, LabelTwoTone } from '@material-ui/icons';
import WineListRowDetails from './wine-list-row-details';

const LabelColors = {
  red: '#990033',
  rose: '#ffcccc',
  white: '#e6e6b3',
};

export default function WineListRow({ bottle }) {
  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary
        id={`row-${bottle.wine.name}`}
        aria-controls={`row-${bottle.wine.name}`}
        expandIcon={<ExpandMore />}
      >
        <Box mr={1}>
          <LabelTwoTone
            style={{ color: LabelColors[bottle.wine.color.toLowerCase()] }}
          />
        </Box>
        <Typography>{bottle.wine.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <WineListRowDetails bottle={bottle} />
      </AccordionDetails>
    </Accordion>
  );
}

WineListRow.propTypes = {
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
