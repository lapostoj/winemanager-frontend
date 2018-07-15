import React from 'react';
import UploadForm from './upload-form';
import logo from './glass-and-bottle.svg';

const NoData = ({onDataAdded}) => (
  <div className="center">
    <img src={logo} className="no-data-img" height="300" alt="bouteille-et-verre" />
    <h2>Pas de bouteille disponible</h2>
    <div className="center">
      <UploadForm onUpload={onDataAdded}></UploadForm>
    </div>
  </div>
);

export default NoData;