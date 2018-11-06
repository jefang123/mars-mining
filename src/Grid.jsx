import React from 'react';
import './Grid.css';

const GRID = new Array(20);
for (var i = 0; i < GRID.length; i++) {
  GRID[i] = new Array(20);
  GRID[i].fill(null)
}


class Grid extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // bots: this.props.bots,
      // nodes: this.state.nodes
    }
  }

  componentDidMount() {
    // setInterval(this.props.fetchBots, 1000);
    // setInterval(this.props.fetchNodes, 1000);
    this.props.fetchBots();
    this.props.fetchNodes();
  }
  render () {
    return(
    <p> Test </p>
    )
  }
};

export default Grid;