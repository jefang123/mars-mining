import React from 'react';
import './Grid.css';

// const GRID = new Array(20);
// for (var i = 0; i < GRID.length; i++) {
//   GRID[i] = new Array(20);
//   GRID[i].fill(null)
// }


class Grid extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // bots: this.props.bots,
      // nodes: this.state.nodes
    }
  }

  componentDidMount() {
    setInterval(this.props.fetchBots, 1000);
    setInterval(this.props.fetchNodes, 1000);
    // this.props.fetchBots();
    // this.props.fetchNodes();
  }
  render () {
    if (!this.props.bots) {
      return null
    }

    const GRID = new Array(20);
    for (var i = 0; i < GRID.length; i++) {
      GRID[i] = new Array(20);
      GRID[i].fill(null)
    }
    let bots = this.props.bots
    let nodes = this.props.nodes 

    // bots.forEach(bot => {
    //   GRID[bot.X][bot.Y] = "blue"
    // })

    for (var a = 0; a < bots.length; a++) {
      GRID[bots[a].Location.X][bots[a].Location.Y] = 'blue'
    }

    for (var b = 0; b < nodes.length; b++) {
      if (GRID[nodes[b].Location.X][nodes[b].Location.Y] === 'blue') {
        GRID[nodes[b].Location.X][nodes[b].Location.Y] = 'purple'
      } else {
        GRID[nodes[b].Location.X][nodes[b].Location.Y] = 'red'
      }
    }

    // nodes.forEach(node =>{
    //   if (GRID[node.X][node.Y] === "blue") {
    //     GRID[node.X][node.Y] = "purple"
    //   } else {
    //     GRID[node.X][node.Y] = "red"
    //   }
    // })

    let array = []

    let counter = 1;

    for (var i = 0; i < GRID.length; i++) {
      for (var j = 0; j < GRID[i].length; j++) {
        if (GRID[i][j] === "blue") {
          array.push(<div key={counter} className='blue'></div>)
        }
        else if (GRID[i][j] === "red" ) {
          array.push(<div key={counter} className = 'red'></div>)
        }
        else if (GRID[i][j] === "purple" ) {
          array.push(<div key={counter} className = 'purple'></div>)
        }
        else {
          array.push(<div key={counter} className= 'white'></div>)
        }
        counter ++;
      }
    }

    return(
      <div className="Grid">

      {array}
      </div>
    )
  }
};

export default Grid;