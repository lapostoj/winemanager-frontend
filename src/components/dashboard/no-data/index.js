import React from 'react';
import UploadForm from './upload-form';
import './no-data.css';
import logo from './glass-and-bottle.svg';

export default function NoData({ onDataAdded }) {
  return (
    <div className="no-data-img-container">
      <img
        src={logo}
        className="no-data-img"
        height="300"
        alt="bouteille-et-verre"
      />
      <h2>Pas de bouteille disponible</h2>
      <UploadForm onUpload={onDataAdded} />
    </div>
  );
}
