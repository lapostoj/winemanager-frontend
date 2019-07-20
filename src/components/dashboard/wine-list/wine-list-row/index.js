import React, { Component } from 'react';
import Types from 'prop-types';
import { Box, Collapse, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore, LabelTwoTone } from '@material-ui/icons';
import WineListRowDetails from './wine-list-row-details';

export default class WineListRow extends Component {
  state = {
    open: false
  };

  static labelColors = {
    red: '#990033',
    rose: '#ffcccc',
    white: '#e6e6b3'
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { wine } = this.props;

    return (
      <Box borderBottom={1} borderColor="grey.400">
        <ListItem button onClick={this.handleClick}>
          <Box mr={1}>
            <LabelTwoTone
              style={{
                color: WineListRow.labelColors[wine.color.toLowerCase()]
              }}
            />
          </Box>
          <ListItemText primary={wine.name} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <WineListRowDetails bottles={wine.bottles} />
        </Collapse>
      </Box>
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
        quantity: Types.number.isRequired
      }).isRequired
    ).isRequired
  })
};
