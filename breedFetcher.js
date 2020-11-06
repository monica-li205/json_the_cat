const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    const validData = data[0];

    if (validData) {
      callback(null, data[0].description);
    } else {
      callback('breed not found', null);
    }
  });
};

module.exports = { fetchBreedDescription };