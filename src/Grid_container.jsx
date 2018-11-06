import { connect } from 'react-redux';
import Grid from './Grid';
import { fetchBots, fetchNodes } from './api_actions';

const mapStateToProps = state => {
  return {
    bots: state.bots,
    nodes: state.nodes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBots: () => dispatch(fetchBots()),
    fetchNodes: () => dispatch(fetchNodes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);