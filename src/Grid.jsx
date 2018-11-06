import React from 'react';
import './Grid.css';

class Grid extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    setInterval(this.props.fetchBots, 1000);
    setInterval(this.props.fetchNodes, 1000);
  }
  render () {
    <p> Test </p>
  }
};

export default Grid;