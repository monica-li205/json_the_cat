const args = process.argv.slice(2);
const request = require('request');

request(`https://ap.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {

  if (error === null) {
    console.log('MREOWER: this is not a breed of cat!!');
  } else if (error.code === 'ENOTFOUND') {
    console.log('MREOWER: u have a meowstake in your URL!!');
  } else {
    console.log('status 200', response.statusCode);
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});