import React, { Component } from 'react';
import Types from 'prop-types';
import WineListRowDetails from './wine-list-row-details';
import { Collapse, ListItem, ListItemText } from '@material-ui/core';

class WineListRow extends Component {
  state = {
    open: false,
  }

  getClassForWine = (color) => {
    return color.toLowerCase();
  }

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { wine } = this.props;

    return (
      <React.Fragment>
        <ListItem button onClick={this.handleClick} className={'wine-row-title ' + this.getClassForWine(wine.color)}>
          <ListItemText primary={wine.name}/>
          { this.state.open ? 'Less' : 'More' }
        </ListItem>
        <Collapse in={this.state.open} timeout='auto' unmountOnExit className='wine-row-details'>
          <WineListRowDetails bottles={wine.bottles}/>
        </Collapse>
      </React.Fragment>
    );
  }
}

WineListRow.propTypes = {
  wine: Types.shape({
    name: Types.string.isRequired,
    color: Types.string.isRequired,
    type: Types.string,
    bottles: Types.arrayOf(
      Types.shape({
        year: Types.number.isRequired,
        size: Types.string.isRequired,
        quantity: Types.number.isRequired,
      }).isRequired
    ).isRequired,
  }),
};

export default WineListRow;