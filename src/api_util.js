export const fetchBots= () => {
  return $.ajax({
    method: 'GET',
    url: 'headlight-tournament-3.herokuapp.com/bots'
  });
};

export const fetchNodes = () => {
  return $.ajax({
    method: 'GET',
    url: 'headlight-tournament-3.herokuapp.com/nodes'
  });
};