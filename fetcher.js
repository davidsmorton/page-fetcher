
let userInput = process.argv.slice(2);


const request = require('request');
const fs = require('fs');
const size = fs.statSync(`${userInput[1]}`);



request(userInput[0], function(error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the URL input.
  
  fs.writeFile(`${userInput[1]}`, body, (error) => {
    // If an error occurred, show it and return
    if (error) return console.error(error);
    console.log(`Downloaded and saved ${size.size} bytes to ${userInput[1]}`);
    console.log('Successfully wrote');
  });
  


});

// Jay helped me over the finish line with the fs.write file
// > node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html


//reference: https://www.codota.com/code/javascript/functions/fs/writeFile