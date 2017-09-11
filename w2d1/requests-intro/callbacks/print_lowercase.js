//transforms the html string into poetic lowercase and prints it to the console.
//Use path: '/http-examples/step6/lowercase.html'

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
    console.log(html.toLowerCase());
  }

getHTML(requestOptions, printLowerCase);