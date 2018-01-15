typing node "javascript file name" in the terminal will retutn your console logs

#Breaking Down Lines 1-4
 The first line requires the http module that ships with Node.js and makes it accessible through the
 variable http.
 We then call one of the functions the http module offers: createServer. This function returns an object, and this object has a method named listen, and takes a numeric value which indicates the port number our HTTP server is going to listen on.

#Refer to Pg. 11-12 for "Passing Functions Around" & "passing and defining functions/paramters directly"

We define the function we want to pass to execute right there at the place where execute expects its
first parameter.
This way, we don’t even need to give the function a name, which is why this is called an anonymous
function.

#Utilizing asyncronus code
database.query("SELECT * FROM hugetable", function(rows) {
 var result = rows;
 });
 console.log("Hello World");
In this form above, our code is SYNCHRONUS: first do the database query, and only when this is done, then write to the console.
vs

var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");
#In this form above, our code is SYNCHRONUS: first do the database query, and only when this is done, then write to the console.
To avoid this, JavaScript, and therefore Node.js, introduces the concept of event-driven, asyn- chronous callbacks, by utilizing an event loop. 
Here, instead of expecting database.query() to directly return a result to us, we pass it a second parameter, an anonymous function.

Node.js continuously cycles through this loop again and again whenever there is nothing else to do, waiting for events. Events like, e.g., a slow database query finally delivering its results.

#module Simply need to start the server. This will be our index.js
As you can see, we can use our server module just like any internal module: by requiring its file and assigning it to a variable, its exported functions become available to us.

#PAge 21/18 has node parsing i may have to look back at
servre side uses actions not nouns to get things done,
router uses nouns to guide the actions given in server.js

In JavaScript, objects are just collections of name/value pairs - think of a JavaScript object as a dictionary with string keys.
If JavaScript objects are just collections of name/value pairs, how can they have methods? Well, the values can be strings, numbers etc. - or functions!

#Route.js if/else statement
What we do here is, we check if a request handler for the given pathname exists, and if it does, we simply call the according function. Because we can access our request handler functions from our object just as we would access an element of an associative array, we have this nice fluent handle[pathname](); expression I talked about earlier: “Please, handle this pathname”.

#Start and end point
These events are data (a new chunk of POST data arrives) and end (all chunks have been received).
This is done by adding listeners to the request object that is passed to our onRequest callback whenever an HTTP request is received.

#MODULE DEFINITION
Node libraries

The metaphor formidable uses is that of a form being submitted via HTTP POST, making it parseable in Node.js. 

We are obviously going to read the contents of this file into our Node.js server, and unsurprisingly, there is a module for that - it’s called fs.

#Node-Define
is a javascript runtime enviornment
I believe this is what allow our javascroipt code to run asynchronus

#use strict- optimizes load time in javascript