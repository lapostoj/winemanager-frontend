import React from 'react';
import { Box } from '@material-ui/core';
import UploadForm from './upload-form';
import logo from './glass-and-bottle.svg';

export default function NoData({ onDataAdded }) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
      <img src={logo} height="300" alt="bouteille-et-verre" />
      <h2>Pas de bouteille disponible</h2>
      <UploadForm onUpload={onDataAdded} />
    </Box>
  );
}
