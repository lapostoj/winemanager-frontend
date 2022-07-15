import React from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const SlightlyTransparentTableContainer = styled(TableContainer)(
  ({ theme }) => ({
    root: {
      opacity: '60%',
    },
  })
);

const WineExample = {
  Nom: 'Riesling - Vendanges tardives',
  Appellation: 'Riesling',
  Cru: '',
  Millésime: '1990',
  Région: 'Alsace',
  Couleur: 'Blanc',
  Type: 'Liquoreux',
  Stock: '1',
  Producteur: '',
  Origine: '',
  Format: '75',
};

export default function WineFileExample() {
  return (
    <Box width="100%">
      <Typography variant="h6" gutterBottom={true}>
        Exemple de fichier valide
      </Typography>
      <SlightlyTransparentTableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {Object.keys(WineExample).map((key, index) => (
                <TableCell key={`${index}-${key}`}>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {Object.values(WineExample).map((value, index) => (
                <TableCell key={`${index}-${value}`}>{value}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </SlightlyTransparentTableContainer>
    </Box>
  );
}
