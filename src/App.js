import React, { Component } from 'react';
import Header from './components/header';
import Dashboard from './components/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
      </div>
    );
  }
}

export default App;
