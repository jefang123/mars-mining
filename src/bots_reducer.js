import { RECEIVE_BOTS } from './api_actions'

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOTS:
      return action.bots;
    default: 
      return state;
  }
};