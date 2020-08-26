const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      //console.log('error:', error); // Print the error if one occurred
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      //console.log('body:', body); // Print the HTML for the Google homepage.
      //console.log(typeof body)
      
      const data = JSON.parse(body);
      //console.log(data);
      //console.log(typeof data);
      if (data[0]) {
        callback(null,data[0].description);
      } else {
        error = "invalid/non-existent breed";
        callback(error,null);
      }
    }
  });
};
module.exports = { fetchBreedDescription };

