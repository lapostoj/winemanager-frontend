import React, { Component } from 'react';
import { Box, Container } from '@material-ui/core';
import NoData from './no-data';
import WineList from './wine-list';
import { getBottlesForCellarId } from '../../clients/bottle-client';

export default class Dashboard extends Component {
  static CELLAR_ID = 5662025548038144;

  constructor() {
    super();
    this.state = {
      bottles: []
    };
  }

  componentDidMount() {
    this.loadBottles();
  }

  loadBottles() {
    getBottlesForCellarId(Dashboard.CELLAR_ID)
      .then(bottles => {
        this.setState({ bottles });
      })
      .catch(error => {
        console.error(error);
      });
  }

  setWines(bottles) {
    this.setState({ bottles });
  }

  render() {
    const { bottles } = this.state;

    return (
      <Container classes={{ root: 'dashboard' }}>
        <Box display="flex" justifyContent="center">
          {bottles.length !== 0 ? (
            <WineList bottles={bottles} />
          ) : (
            <NoData onDataAdded={wines => this.setWines(wines)} />
          )}
        </Box>
      </Container>
    );
  }
}
