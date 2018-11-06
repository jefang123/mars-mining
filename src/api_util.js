import $ from 'jquery';

export const fetchBots= () => {
  return $.ajax({
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    url: 'https://headlight-tournament-3.herokuapp.com/bots'
  });
};

export const fetchNodes = () => {
  return $.ajax({
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
    dataType: 'json',
    url: 'https://headlight-tournament-3.herokuapp.com/nodes'
  });
};
