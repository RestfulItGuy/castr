const { Client } = require('podcast-api');

const client = Client({
  apiKey: process.env.REACT_APP_API_KEY
});

client.search({
  q: 'paranormal',
  type: 'podcast',
  language: 'English'
}).then((response) => {
  // Get response json data here
  console.log(response.data);
}).catch((error) => {
  console.log(error)
});

export function msToTime(s) {
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  if (hrs !== 0) {
    return hrs + ':' + mins + ':' + secs;
  } else {
    return mins + ':' + secs;
  }

}