const request = require('request');


const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
 
    //console.log('body:', body); // Print the HTML for the Google homepage.
    if (body) {
      //console.log("Body");
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('Breed not defined.');
        callback(error, 'Breed not defined');
      } else {
        //console.log("EMPTY");
      //console.log(data)
        let summary = data[0].description;
        //console.log(summary);
        callback(error, summary);
      }
    }
  });
};
module.exports = fetchBreedDescription;