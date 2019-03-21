import React from 'react';
import Types from 'prop-types';
import { List } from '@material-ui/core';
import WineListRow from './wine-list-row';
import './wine-list.css';

export default function WineList({ wines }) {
  const renderWineRow = (wine, index) => {
    return <WineListRow key={index} wine={wine} className="wine-row" />;
  };

  return (
    <div className="wine-list-wrapper">
      <List className="wine-list" component="div">
        {wines.map(renderWineRow)}
      </List>
    </div>
  );
}

WineList.propTypes = {
  wines: Types.arrayOf(
    Types.shape({
      name: Types.string.isRequired,
      color: Types.string.isRequired,
      type: Types.string,
      bottles: Types.arrayOf(
        Types.shape({
          year: Types.number.isRequired,
          size: Types.string.isRequired,
          quantity: Types.number.isRequired
        }).isRequired
      ).isRequired
    })
  ).isRequired
};
