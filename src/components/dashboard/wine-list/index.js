import React, { useState } from 'react';
import Types from 'prop-types';
import { Box, Button, List, Paper, Typography } from '@material-ui/core';
import WineListRow from './wine-list-row';
import AddBottleModal from './add-bottle-modal';

export default function WineList({ wines }) {
  const [open, setOpen] = useState(false);

  const renderWineRow = (wine, index) => {
    return <WineListRow key={index} wine={wine} />;
  };

  const openAddBottleModal = () => {
    setOpen(true);
  };

  const closeAddBottleModal = () => {
    setOpen(false);
  };

  return (
    <Box minWidth="70%" mt={8}>
      <Box mb={3} display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          onClick={openAddBottleModal}
        >
          Ajouter une bouteille
        </Button>
      </Box>
      <Paper>
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Vos vins
          </Typography>
          <List component="div">{wines.map(renderWineRow)}</List>
        </Box>
      </Paper>
      <AddBottleModal open={open} close={closeAddBottleModal} />
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
