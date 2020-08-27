const rq = require('request');
const breed = process.argv[2];

rq(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log("We couldn't reach Cat\n" + error);
  } else if (body.length > 2) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } else {
    console.log("Something went wrong, you might want to doublecheck the breed.");
  }
});