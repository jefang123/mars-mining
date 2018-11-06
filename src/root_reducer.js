import { combineReducers } from 'redux';
import botsReducer from './bots_reducer';
import nodesReducer from './nodes_reducer';

export default combineReducers({
  bots: botsReducer,
  nodes: nodesReducer,
});
