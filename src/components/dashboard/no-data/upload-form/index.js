import React, { useState } from 'react';
import { Box, Button, IconButton, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import WineFileExample from './wine-file-example';
import { uploadFile } from '../../../../clients/wine-client';

export default function UploadForm({ onUpload }) {
  const [file, setFile] = useState(null);

  const addFile = (event) => {
    setFile(event.target.files[0]);
  };

  const removeFile = () => {
    setFile(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      uploadFileAsFormData(file);
    }
  };

  const uploadFileAsFormData = (file) => {
    const data = new FormData();
    data.append('file', file);
    uploadFile(data)
      .then((wines) => {
        onUpload(wines);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      {file === null ? (
        <>
          <Box mb={4}>
            <input
              id="input-file-wines"
              name="input-file-wines"
              type="file"
              accept=".csv"
              autoFocus
              onChange={addFile}
              style={{ display: 'none' }}
            />
            <label htmlFor="input-file-wines">
              <Button
                id="button-select-file"
                variant="contained"
                color="primary"
                component="span"
              >
                Choisir un fichier
              </Button>
            </label>
          </Box>
          <WineFileExample />
        </>
      ) : (
        <>
          <Button
            id="button-confirm-file"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Confirmer
          </Button>
          <Box>
            <Box display="inline-block">
              <Typography variant="body1" id="filename">
                Fichier selectionné: {file.name}
              </Typography>
            </Box>
            <Box display="inline-block">
              <IconButton
                id="button-delete-file"
                aria-label="delete"
                onClick={removeFile}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
