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
