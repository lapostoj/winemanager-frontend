import React, { useState } from 'react';
import Types from 'prop-types';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core';
import { createBottle } from '../../../../clients/bottle-client';

export default function AddBottleModal({ open, close }) {
  const [bottle, setBottle] = useState({
    Year: 2019,
    Size: 75,
    Quantity: 1,
    CellarID: 123
  });

  const addBottle = () => {
    createBottle(bottle).then(() => {
      close();
    });
  };

  const handleNumberChange = name => event => {
    setBottle({ ...bottle, [name]: Number(event.target.value) });
  };

  return (
    <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Bouteille</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Entrer les détails de la bouteille à ajouter.
        </DialogContentText>
        <Box mb={2}>
          <form>
            <Box display="inline-block" mr={2}>
              <TextField
                id="bottleYear"
                type="number"
                label="Year"
                value={bottle.Year}
                onChange={handleNumberChange('Year')}
                autoFocus
              />
            </Box>
            <Box display="inline-block" mr={2}>
              <TextField
                id="bottleSize"
                type="number"
                label="Size"
                value={bottle.Size}
                onChange={handleNumberChange('Size')}
              />
            </Box>
            <Box display="inline-block" mr={2}>
              <TextField
                id="bottleQuantity"
                type="number"
                label="Quantity"
                value={bottle.Quantity}
                onChange={handleNumberChange('Quantity')}
              />
            </Box>
          </form>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Annuler
        </Button>
        <Button onClick={addBottle} color="primary">
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AddBottleModal.propTypes = {
  open: Types.bool.isRequired,
  close: Types.func.isRequired
};
