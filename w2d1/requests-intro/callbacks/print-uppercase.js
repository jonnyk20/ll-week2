// Transforms the html string into ALL CAPS and prints it to the console.

//path '/http-examples/step6/uppercase.html'

var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
    console.log(html.toUpperCase());
  }

getHTML(requestOptions, printUpperCase);