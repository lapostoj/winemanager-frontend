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
  MenuItem,
  TextField,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { createBottle } from '../../../../clients/bottle-client';

const BottleSizes = [
  { value: 37, name: 'Demi-bouteille' },
  { value: 50, name: 'Demi-litre' },
  { value: 62, name: 'Jura' },
  { value: 75, name: 'Bouteille' },
  { value: 150, name: 'Magnum' },
  { value: 300, name: 'Jéroboam' },
  { value: 600, name: 'Mathusalem' },
  { value: 1200, name: 'Salmanazar' },
  { value: 1800, name: 'Balthazar' },
  { value: 2400, name: 'Nabuchodonosor' },
];

const DefaultBottle = {
  Year: 2019,
  Size: 75,
  Quantity: 1,
  CellarID: 5662025548038144,
  WineID: 5744378123386880,
};

export default function AddBottleModal({ open, close }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [bottle, setBottle] = useState(DefaultBottle);

  const addBottle = () => createBottle(bottle).then(close);

  const handleNumberChange = (name) => (event) =>
    setBottle({ ...bottle, [name]: Number(event.target.value) });

  return (
    <Dialog
      open={open}
      onClose={close}
      maxWidth={false}
      fullScreen={fullScreen}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Ajouter une bouteille</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Entrer les détails de la bouteille à ajouter.
        </DialogContentText>
        <Box mb={2}>
          <Box display="inline-block" m={2} width="250px">
            <TextField
              id="input-select-bottle-size"
              label="Bouteille"
              select
              variant="outlined"
              fullWidth={true}
              value={bottle.Size}
              onChange={handleNumberChange('Size')}
              autoFocus
              SelectProps={{
                renderValue: (value) =>
                  `${
                    BottleSizes.find((bottleSize) => bottleSize.value === value)
                      .name
                  } - ${value}ml`,
              }}
            >
              {BottleSizes.map((bottle, index) => (
                <MenuItem key={index} value={bottle.value}>
                  {bottle.name}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Box display="inline-block" m={2}>
            <TextField
              id="bottleYear"
              type="number"
              label="Année"
              variant="outlined"
              value={bottle.Year}
              onChange={handleNumberChange('Year')}
            />
          </Box>
          <Box display="inline-block" m={2}>
            <TextField
              id="bottleQuantity"
              type="number"
              label="Quantité"
              variant="outlined"
              value={bottle.Quantity}
              onChange={handleNumberChange('Quantity')}
            />
          </Box>
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
  close: Types.func.isRequired,
};
