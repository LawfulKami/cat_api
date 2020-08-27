const rq = require('request');

const fetchBreedDescription = function(breedName, callback) {
  rq(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (body.length > 2) {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    } else {
      callback(null, "Something went wrong, you might want to doublecheck the breed.");
    }
  });
};


module.exports = fetchBreedDescription;