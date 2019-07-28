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
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { createBottle } from '../../../../clients/bottle-client';

export default function AddBottleModal({ open, close }) {
  const bottleSizes = [
    { value: 37, name: 'Demi-bouteille' },
    { value: 50, name: 'Demi-litre' },
    { value: 62, name: 'Jura' },
    { value: 75, name: 'Bouteille' },
    { value: 150, name: 'Magnum' },
    { value: 300, name: 'Jéroboam' },
    { value: 600, name: 'Mathusalem' },
    { value: 1200, name: 'Salmanazar' },
    { value: 1800, name: 'Balthazar' },
    { value: 2400, name: 'Nabuchodonosor' }
  ];

  const [bottle, setBottle] = useState({
    Year: 2019,
    Size: 75,
    Quantity: 1,
    CellarID: 5662025548038144,
    WineID: 5744378123386880
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
                label="Année"
                value={bottle.Year}
                onChange={handleNumberChange('Year')}
                autoFocus
              />
            </Box>
            <Box display="inline-block" mr={2}>
              <FormControl>
                <InputLabel htmlFor="bottleSize">Bouteille</InputLabel>
                <Select
                  value={bottle.Size}
                  onChange={handleNumberChange('Size')}
                  inputProps={{
                    id: 'bottleSize'
                  }}
                  renderValue={value =>
                    `${
                      bottleSizes.find(bottleSize => bottleSize.value === value)
                        .name
                    } - ${value}ml`
                  }
                >
                  {bottleSizes.map((bottle, index) => (
                    <MenuItem key={index} value={bottle.value}>
                      {bottle.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box display="inline-block" mr={2}>
              <TextField
                id="bottleQuantity"
                type="number"
                label="Quantité"
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
