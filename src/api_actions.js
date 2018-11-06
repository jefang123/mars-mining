import * as APINodes from './api_util';

export const RECEIVE_BOTS = 'RECEIVE_BOTS';
export const RECEIVE_NODES = 'RECEIVE_NODES';

export const receiveBots = bots => {
  return {
    type: RECEIVE_BOTS,
    bots 
  };
};

export const receiveNodes = nodes => {
  return {
    type: RECEIVE_NODES,
    nodes
  };
};

export const fetchBots = () => {
  return dispatch => {
    return APINodes.fetchBots().then(
      bots => {
        return dispatch(receiveBots(bots))
      }
    );
  };
};

export const fetchNodes = () => {
  return dispatch => {
    return APINodes.fetchNodes().then(
      nodes => {
        return disptach(receiveNodes(nodes))
      }
    );
  };
};