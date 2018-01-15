'use strict'

var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname; 
        console.log('Request for' + pathname + 'recieved.');
        route(handle, pathname, response, request);

        // request.setEncoding('utf8'); //defined that we expect the encoding of the received data to be UTF-8

        // request.addListener('data', function (postDataChunk) {
        //     postData += postDataChunk;
        //     console.log('Received POST data chunk ' + postDataChunk + '.');
        // });
        // request.addListener('end', function() {
        //     route(handle, pathname, response, postData);
        // });
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server Has Started');
}

exports.start = start;