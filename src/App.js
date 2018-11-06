import React, { PureComponent } from 'react';
import './App.css';
import Grid from './Grid_container';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>Legend</div>
          <div>Blue: Bot</div>
          <div>Red: Node</div>
          <div>Purple: Both</div>
        </div>
        <Grid></Grid>
      </div>
    );
  }
}

export default App;
