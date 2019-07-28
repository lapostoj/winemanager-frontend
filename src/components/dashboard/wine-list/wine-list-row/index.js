import React, { useState } from 'react';
import Types from 'prop-types';
import { Box, Collapse, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore, LabelTwoTone } from '@material-ui/icons';
import WineListRowDetails from './wine-list-row-details';

export default function WineListRow({ bottle }) {
  const labelColors = {
    red: '#990033',
    rose: '#ffcccc',
    white: '#e6e6b3'
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box borderBottom={1} borderColor="grey.400">
      <ListItem button onClick={handleClick}>
        <Box mr={1}>
          <LabelTwoTone
            style={{
              color: labelColors[bottle.wine.color.toLowerCase()]
            }}
          />
        </Box>
        <ListItemText primary={bottle.wine.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <WineListRowDetails bottle={bottle} />
      </Collapse>
    </Box>
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
      producer: Types.string.isRequired
    }),
    history: Types.arrayOf(
      Types.shape({
        time: Types.string.isRequired,
        quantity: Types.number.isRequired,
        details: Types.string.isRequired
      }).isRequired
    ).isRequired,
    storageLocation: Types.shape({
      position: Types.string.isRequired
    }).isRequired
  })
};
