import React from 'react';
import Types from 'prop-types';
import { Box, List, Paper, Typography } from '@material-ui/core';
import WineListRow from './wine-list-row';

export default function WineList({ wines }) {
  const renderWineRow = (wine, index) => {
    return <WineListRow key={index} wine={wine} />;
  };

  return (
    <Box minWidth="70%" mt={8}>
      <Paper>
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Vos vins
          </Typography>
          <List component="div">{wines.map(renderWineRow)}</List>
        </Box>
      </Paper>
    </Box>
  );
}

WineList.propTypes = {
  wines: Types.arrayOf(
    Types.shape({
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
  ).isRequired
};
