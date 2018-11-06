import { RECEIVE_NODES } from './api_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_NODES:
      return action.nodes;
    default: 
      return state;
  }
};