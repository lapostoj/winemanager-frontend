import React, { Component } from 'react';
import NoData from './no-data';
import WineList from './wine-list';
import { getWines } from '../../clients/wine-client';
import './dashboard.css';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      wineList: [],
    };
  }

  componentDidMount(){
    this.loadWines();
  }

  loadWines() {
    getWines()
      .then((wineList) => {
        this.setState({
          wineList,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setWines(wines) {
    this.setState({
      wineList: wines,
    });
  }

  render() {
    return (
      <div className="dashboard">
        { this.state.wineList.length !== 0 
          ? <WineList wines={this.state.wineList}/>
          : <NoData onDataAdded={(wines) => this.setWines(wines)}/> 
        }
      </div>
    );
  }
}
