function getHTML (options, callback) {
  
  /* Add your code here */
  // while https is built-in to Node, it is a module, so it must be required
  var https = require('https');                               

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {
    var output = '';
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      output += data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function(){
      callback(output);
    });

  });
  
}

// the host can be thought of as the domain name you want to read from,
// and the path is the resource - '/' is the root path, but if you wanted to read a
// particular resource (like '/login/index.html'), that would be defined in the path
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);