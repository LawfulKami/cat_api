const fetchBreedDescription = require("./breedFetcher");
const breed = process.argv[2];

fetchBreedDescription(breed, (error, desc) => {
  if (error) {
    return ('Error fetch details:', error);
  } else {
    return (desc);
  }
});