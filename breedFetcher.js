const args = process.argv.slice(2);
const request = require('request');

request(` https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {

  if (JSON.parse(body).length === 0) {
    console.log('MREOWER: that aint a real cat!!');
  } else if (error === 'ENOTFOUND') {
    console.log('MREOWER: u have a (smol) meowstake in your URL!!');
  } else if (response === undefined || response === 'undefined:1') {
    console.log('MREOWER: PLWESASE USE A VALID URL!!!');
  } else if (error === SyntaxError) {
    console.log('MREOWER: CHECK UR SPELLING!!!');
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});