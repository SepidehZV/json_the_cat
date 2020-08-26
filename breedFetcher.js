const request = require('request');
const breedName = process.argv.slice(2)[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (error) {
    console.log("Request Failed");
  } else {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    //console.log(typeof body)
     
    const data = JSON.parse(body);
    //console.log(data);
    //console.log(typeof data);
    if (data[0]) {
      console.log(data[0].description);
    } else {
      console.log("Breed Not Found!");
    }
  }
  
  
  
  
});