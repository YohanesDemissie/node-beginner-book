// import { request } from "http";

var server = require("./server"); //linking to server.js
var router = require('./router'); //linking to router.js
var requestHandlers = require('./requestHandlers');  //linking to reqhandlers.js

var handle = {};  //pg. 23
handle['/'] = requestHandlers.start; //pg. 23
handle['/start'] = requestHandlers.start; //pg. 23
handle['/upload'] = requestHandlers.upload; //pg. 23
handle['/show'] = requestHandlers.show;

server.start(router.route, handle); //starting server off router.js route function as a handler

