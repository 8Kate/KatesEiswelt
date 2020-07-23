"use strict";
exports.__esModule = true;
exports.App = void 0;
var Http = require("http");
var App;
(function (App) {
    Http.createServer(function (req, res) {
        res.write('Hello World!'); //write a response to the client
        res.end(); //end the response
    }).listen(8080);
})(App = exports.App || (exports.App = {}));
