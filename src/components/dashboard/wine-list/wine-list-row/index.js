import React, { useState } from 'react';
import Types from 'prop-types';
import { Box, Collapse, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore, LabelTwoTone } from '@material-ui/icons';
import WineListRowDetails from './wine-list-row-details';

export default function WineListRow({ wine }) {
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
              color: labelColors[wine.color.toLowerCase()]
            }}
          />
        </Box>
        <ListItemText primary={wine.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <WineListRowDetails bottles={wine.bottles} />
      </Collapse>
    </Box>
  );
}

WineListRow.propTypes = {
  wine: Types.shape({
    name: Types.string.isRequired,
    color: Types.string.isRequired,
    type: Types.string,
    bottles: Types.arrayOf(
      Types.shape({
        year: Types.number.isRequired,
        size: Types.string.isRequired,
        quantity: Types.number.isRequired
      }).isRequired
    ).isRequired
  })
};
