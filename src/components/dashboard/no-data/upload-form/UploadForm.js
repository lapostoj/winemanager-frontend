import React from 'react';
import { Button, FormControl, FormHelperText, Input } from '@material-ui/core';
import { uploadFile } from '../../../../clients/wine-client';

const UploadForm = ({onUpload}) => {
  let file;

  const handleFileInput = (event) => {
    file = event.target.files[0];
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      uploadFileAsFormData(file);
    }
  }

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
  }

  return (
    <form id="upload-wine-file-form" onSubmit={handleSubmit}>
      <FormControl required>
        <Input id="winefile" type="file" name="winefile" autoFocus onChange={handleFileInput}></Input>
        <FormHelperText>Choisissez un fichier CSV au format correct</FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Télécharger
      </Button>
    </form>
  );
}