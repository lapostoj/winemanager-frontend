import React, { useState } from 'react';
import Types from 'prop-types';
import { Box, Button, List, Typography } from '@mui/material';
import WineListRow from './wine-list-row';
import AddBottleModal from './add-bottle-modal';

export default function WineList({ bottles }) {
  const [open, setOpen] = useState(false);

  const renderWineRow = (bottle, index) => {
    return <WineListRow key={index} bottle={bottle} />;
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
      <Typography variant="h4" gutterBottom>
        Vos vins
      </Typography>
      <List component="div">{bottles.map(renderWineRow)}</List>
      <AddBottleModal open={open} close={closeAddBottleModal} />
    </Box>
  );
}

WineList.propTypes = {
  bottles: Types.arrayOf(
    Types.shape({
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
    })
  ).isRequired,
};
