import { RECEIVE_BOTS, RECEIVE_NODES } from './api_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOTS:
      return action.bots.Bots;
    case RECEIVE_NODES:
      return action.nodes.Nodes;
    default: 
      return state;
  }
};