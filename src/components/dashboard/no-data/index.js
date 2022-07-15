import React from 'react';
import { Box, Typography } from '@mui/material';
import UploadForm from './upload-form';
import logo from './glass-and-bottle.svg';

export default function NoData({ onDataAdded }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <img src={logo} height="300" alt="bouteille-et-verre" />
      <Typography variant="h4" gutterBottom={true}>
        Ajouter mes bouteilles
      </Typography>
      <UploadForm onUpload={onDataAdded} />
    </Box>
  );
}
