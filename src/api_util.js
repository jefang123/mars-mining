import $ from 'jquery';

export const fetchBots= () => {
  return $.ajax({
    crossDomain: true,
    method: 'GET',
    dataType: 'jsonp',
    url: 'headlight-tournament-4.herokuapp.com/bots'
  });
};

export const fetchNodes = () => {
  return $.ajax({
    rossDomain: true,
    method: 'GET',
    dataType: 'jsonp',
    url: 'headlight-tournament-4.herokuapp.com/nodes'
  });
};

// function sendGETRequest(path, data, callback) {

//   const options = {
//     hostname: 'https://headlight-tournament-3.herokuapp.com',
//     port: 80,
//     path: path,
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   let response = [];

//   req = http.request(options, (res) => {
//     res.on('data', (chunk) => { response.push(chunk); });
//     res.on('end', () => { 
//       let finalResponse = JSON.parse(response.join(''));
//       callback(finalResponse); 
//     });
//   });

//   req.write(JSON.stringify(data));
//   req.end();
// }

// // Sample request

// let cb = function(response) {
//   console.log("Here are all the bots: ", response);
// }

// sendGETRequest("/bots", cb);